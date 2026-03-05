import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, ShieldCheck, Sparkles, GraduationCap, BookOpen, Globe, ArrowLeft } from 'lucide-react';
import Chatbot from '../components/Chatbot';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending reset link
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-royal-navy relative overflow-hidden flex items-center justify-center pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgba(20, 30, 50, 1) 0%, rgba(10, 15, 30, 1) 100%)',
              'radial-gradient(circle at 100% 100%, rgba(30, 40, 70, 1) 0%, rgba(10, 15, 30, 1) 100%)',
              'radial-gradient(circle at 50% 50%, rgba(40, 30, 60, 1) 0%, rgba(10, 15, 30, 1) 100%)',
              'radial-gradient(circle at 0% 100%, rgba(20, 50, 60, 1) 0%, rgba(10, 15, 30, 1) 100%)',
              'radial-gradient(circle at 0% 0%, rgba(20, 30, 50, 1) 0%, rgba(10, 15, 30, 1) 100%)',
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-80"
        />
        
        {/* Floating Particles/Orbs */}
        <motion.div
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-gold/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: mousePosition.x * 0.03,
            y: mousePosition.y * 0.03,
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Abstract Animated Shapes Container */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full flex items-center justify-center opacity-30 lg:opacity-60">
          <motion.div
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.1, 1, 0.9, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-[600px] h-[600px] border-[1px] border-royal-gold/30 rounded-full absolute"
          />
          <motion.div
            animate={{
              rotate: [360, 270, 180, 90, 0],
              scale: [0.9, 1, 1.1, 1, 0.9],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-[450px] h-[450px] border-[1px] border-white/20 rounded-full absolute"
          />
          <motion.div
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="w-[300px] h-[300px] border-[2px] border-royal-gold/40 rounded-full absolute border-dashed"
          />
          <motion.div
            animate={{
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-[800px] h-[800px] border-[1px] border-blue-400/10 rounded-full absolute"
          />
        </div>
      </div>

      {/* Floating Icons (Visual Effects) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[
          { Icon: GraduationCap, delay: 0, x: '10%', y: '20%' },
          { Icon: BookOpen, delay: 2, x: '80%', y: '15%' },
          { Icon: Globe, delay: 4, x: '15%', y: '70%' },
          { Icon: Sparkles, delay: 1, x: '85%', y: '80%' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2], 
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 8, 
              delay: item.delay, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute text-royal-gold/30"
            style={{ left: item.x, top: item.y }}
          >
            <item.Icon size={48} />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Forgot Password Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md mx-auto lg:mx-0"
        >
          {/* Glassmorphism Card */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
            
            {/* Card Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-royal-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 text-green-400 mb-6 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                  <ShieldCheck size={40} />
                </div>
                <h2 className="text-2xl font-serif font-bold text-white mb-4">Check Your Email</h2>
                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  We've sent a password reset link to <span className="text-royal-gold font-medium">{email}</span>. Please check your inbox and follow the instructions.
                </p>
                <Link
                  to="/portal"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all"
                >
                  <ArrowLeft size={18} />
                  Return to Login
                </Link>
              </div>
            ) : (
              <>
                <div className="mb-10 text-center lg:text-left">
                  <Link to="/portal" className="inline-flex items-center gap-2 text-white/50 hover:text-royal-gold transition-colors text-sm mb-6">
                    <ArrowLeft size={16} />
                    Back to Login
                  </Link>
                  <h1 className="text-4xl font-serif font-bold text-white mb-2 tracking-tight">
                    Reset <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-gold to-royal-gold-light">Password</span>
                  </h1>
                  <p className="text-white/60 text-sm">
                    Enter your student email address and we'll send you a link to reset your password.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-white/70 uppercase tracking-wider ml-1">
                      Student Email
                    </label>
                    <div className="relative group/input">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40 group-focus-within/input:text-royal-gold transition-colors">
                        <Mail size={20} />
                      </div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-royal-gold/50 focus:border-royal-gold/50 transition-all backdrop-blur-sm"
                        placeholder="student@royalimperial.edu.in"
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting || !email}
                    className="w-full py-4 gold-gradient text-royal-navy font-bold rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-8"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-2 border-royal-navy/30 border-t-royal-navy rounded-full"
                      />
                    ) : (
                      <>
                        <span>SEND RESET LINK</span>
                        <ArrowRight size={20} />
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </div>
        </motion.div>

        {/* Right Column: Empty space for 3D character/scene to shine on Desktop */}
        <div className="hidden lg:block h-[600px] relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-10 right-10 backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl max-w-sm shadow-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-royal-gold/20 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="text-royal-gold" size={24} />
              </div>
              <div>
                <h4 className="text-white font-serif font-bold mb-1">Secure Recovery</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Your account security is our priority. We use encrypted links to ensure only you can access your academic profile.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Chatbot */}
      <Chatbot />
    </div>
  );
}
