import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Loader2, X } from 'lucide-react';
import { GoogleGenAI, Modality } from '@google/genai';

const scriptParts = [
  {
    text: "Welcome to Royal Imperial College. Founded in 1965, our institution began with a simple yet profound vision: to create a space where rigorous academic inquiry meets practical innovation.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    text: "In the transformative era of the 1960s, a coalition of visionary educators and civic leaders recognized the need for a university that didn't just preserve knowledge, but actively created it.",
    image: "https://images.unsplash.com/photo-1525926477800-7a3b10316ac6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    text: "They laid the cornerstone of our first building, Heritage Hall, with a commitment to accessible, world-class education. With just 300 students and three faculties—Arts, Sciences, and Commerce—the journey began.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop"
  },
  {
    text: "The early years were characterized by a pioneering spirit. Our first cohort of students were trailblazers, setting the standard for academic rigor and community engagement.",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    text: "Throughout the 1970s, the campus grew, adding new libraries, laboratories, and student residences. The 1980s brought a new era of scientific discovery.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2190&auto=format&fit=crop"
  },
  {
    text: "The inauguration of the Advanced Sciences Wing in 1982 marked our transition from a teaching-focused college to a major research institution.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    text: "Our faculty began tackling some of the most pressing challenges of the time, laying the groundwork for breakthroughs in engineering, biotechnology, and computer science.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  },
  {
    text: "As we entered the 1990s and the new millennium, our commitment to excellence was recognized on a global scale. In 2001, we were awarded the prestigious 'Institution of Excellence' status.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    text: "We opened our doors to the world, establishing our first international exchange programs and welcoming a diverse community of scholars from over fifty countries.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop"
  },
  {
    text: "This global perspective enriched our campus culture and broadened our academic horizons. The 2010s saw a massive expansion of our infrastructure.",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    text: "With the construction of the EcoSphere Innovation Campus, a testament to our commitment to sustainability and green technologies.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  },
  {
    text: "Today, in 2026, Royal Imperial College stands as a beacon of knowledge and innovation. With the recent launch of our state-of-the-art AI and Robotics Center, we continue to push the boundaries of what is possible.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    text: "Our students are developing autonomous vehicles, brain-computer interfaces, and nanosatellites. Our 50,000-strong alumni network spans the globe.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop"
  },
  {
    text: "Leading industries, shaping policies, and making a tangible difference in society. From Nobel laureates to tech entrepreneurs, our graduates carry the Royal Imperial legacy wherever they go.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  {
    text: "From our humble beginnings in Heritage Hall to our current standing in the top 1% of global rankings, our core values remain unchanged.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    text: "We believe in the power of education to transform lives. We believe in fostering intellectual curiosity, ethical leadership, and a commitment to public service.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
  },
  {
    text: "We are Royal Imperial College. A legacy of excellence. Shaping the minds that shape our world. Thank you for being a part of our story.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop"
  }
];

export default function DocumentaryPlayer({ onClose }: { onClose: () => void }) {
  const [isGenerating, setIsGenerating] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const startTimeRef = useRef<number>(0);
  const pauseTimeRef = useRef<number>(0);
  const audioBufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    const generateDocumentary = async () => {
      try {
        const apiKey = (import.meta as any).env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
        if (!apiKey) {
          throw new Error("Gemini API key is missing. Please ensure it is set in your environment.");
        }

        const ai = new GoogleGenAI({ apiKey });
        
        const fullScript = scriptParts.map(p => p.text).join(" ");

        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash-preview-tts",
          contents: [{ parts: [{ text: fullScript }] }],
          config: {
            responseModalities: [Modality.AUDIO],
            speechConfig: {
                voiceConfig: {
                  prebuiltVoiceConfig: { voiceName: 'Kore' },
                },
            },
          },
        });

        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (!base64Audio) {
          throw new Error("Failed to generate audio.");
        }

        // Decode base64 to ArrayBuffer
        const binaryString = window.atob(base64Audio);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        audioContextRef.current = audioCtx;
        
        let audioBuffer: AudioBuffer;
        try {
          // Try decoding as WAV/MP3 first. decodeAudioData might detach the buffer.
          const bufferCopy = bytes.buffer.slice(0);
          audioBuffer = await audioCtx.decodeAudioData(bufferCopy);
        } catch (e) {
          // Fallback: Assume raw 16-bit PCM at 24000Hz
          const int16Array = new Int16Array(bytes.buffer);
          const float32Array = new Float32Array(int16Array.length);
          for (let i = 0; i < int16Array.length; i++) {
            float32Array[i] = int16Array[i] / 32768.0;
          }
          audioBuffer = audioCtx.createBuffer(1, float32Array.length, 24000);
          audioBuffer.getChannelData(0).set(float32Array);
        }

        audioBufferRef.current = audioBuffer;

        if (isMounted) {
          setIsGenerating(false);
          // We don't auto-play immediately because browsers block audio without user interaction.
          // The user already clicked "Play" to open this component, so we can try to play.
          playAudio();
        }

      } catch (err: any) {
        console.error("Error generating documentary:", err);
        if (isMounted) {
          setError(err.message || "An error occurred while generating the documentary.");
          setIsGenerating(false);
        }
      }
    };

    generateDocumentary();

    return () => {
      isMounted = false;
      if (sourceNodeRef.current) {
        try { sourceNodeRef.current.stop(); } catch (e) {}
        sourceNodeRef.current.disconnect();
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close();
      }
    };
  }, []);

  const playAudio = () => {
    if (!audioContextRef.current || !audioBufferRef.current) return;
    
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }

    const source = audioContextRef.current.createBufferSource();
    source.buffer = audioBufferRef.current;
    source.connect(audioContextRef.current.destination);
    
    source.onended = () => {
      setIsPlaying(false);
    };

    source.start(0, pauseTimeRef.current);
    startTimeRef.current = audioContextRef.current.currentTime - pauseTimeRef.current;
    sourceNodeRef.current = source;
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    if (sourceNodeRef.current && audioContextRef.current) {
      try { sourceNodeRef.current.stop(); } catch (e) {}
      pauseTimeRef.current = audioContextRef.current.currentTime - startTimeRef.current;
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  // Update image based on playback time
  useEffect(() => {
    if (!isPlaying || !audioContextRef.current || !audioBufferRef.current) return;

    const totalDuration = audioBufferRef.current.duration;
    const interval = setInterval(() => {
      const currentTime = audioContextRef.current!.currentTime - startTimeRef.current;
      const progress = currentTime / totalDuration;
      
      // Calculate which part we are in based on progress
      const partIndex = Math.floor(progress * scriptParts.length);
      if (partIndex >= 0 && partIndex < scriptParts.length && partIndex !== currentPartIndex) {
        setCurrentPartIndex(partIndex);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, currentPartIndex]);

  return (
    <div className="w-full h-full relative bg-black flex flex-col items-center justify-center overflow-hidden">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-colors z-50"
      >
        <X size={24} />
      </button>

      {isGenerating ? (
        <div className="flex flex-col items-center text-white z-10">
          <Loader2 size={48} className="animate-spin text-royal-gold mb-4" />
          <h3 className="text-2xl font-serif mb-2">Generating Documentary...</h3>
          <p className="text-white/60 text-sm max-w-md text-center">
            Our AI is currently synthesizing the narration for "The Royal Imperial Story: 1965 - Present". This may take a few moments.
          </p>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center text-white p-8 text-center z-10">
          <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mb-4">
            <X size={32} />
          </div>
          <h3 className="text-2xl font-serif mb-2">Generation Failed</h3>
          <p className="text-white/60 mb-6">{error}</p>
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-white text-black rounded-full font-medium"
          >
            Close
          </button>
        </div>
      ) : (
        <div className="w-full h-full relative group">
          {/* Slideshow */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentPartIndex}
              src={scriptParts[currentPartIndex].image}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              alt="Documentary Scene"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Subtitles */}
          <div className="absolute bottom-24 left-0 w-full px-8 text-center z-20">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentPartIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-white/90 text-xl md:text-2xl font-serif max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
              >
                "{scriptParts[currentPartIndex].text}"
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent flex items-center justify-center gap-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={togglePlay}
              className="w-12 h-12 bg-royal-gold text-royal-navy rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
            </button>
            
            {/* Progress Bar */}
            <div className="w-full max-w-2xl h-1 bg-white/20 rounded-full overflow-hidden relative">
              <div 
                className="absolute top-0 left-0 h-full bg-royal-gold transition-all duration-100"
                style={{ 
                  width: `${audioContextRef.current && audioBufferRef.current ? 
                    ((audioContextRef.current.currentTime - startTimeRef.current) / audioBufferRef.current.duration) * 100 : 0}%` 
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
