import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, ShieldCheck, User, Sparkles, GraduationCap, BookOpen, Globe } from 'lucide-react';
import Chatbot from '../components/Chatbot';

export default function Portal() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    
    // Simulate login and redirect to the new Student Dashboard
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/student-dashboard');
    }, 1500);
  };

  const fillDemoCredentials = () => {
    setEmail('student@demo.com');
    setPassword('password123');
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
        
        {/* Left Column: Login Form */}
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

            <div className="mb-10 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-royal-gold/20 text-royal-gold mb-6 border border-royal-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                <ShieldCheck size={32} />
              </div>
              <h1 className="text-4xl font-serif font-bold text-white mb-2 tracking-tight">
                Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-gold to-royal-gold-light">Portal</span>
              </h1>
              <p className="text-white/60 text-sm mb-4">
                Access your academic universe. Enter your credentials to continue.
              </p>
              <button 
                onClick={fillDemoCredentials}
                type="button"
                className="text-xs font-bold text-royal-navy bg-royal-gold hover:bg-royal-gold-light px-4 py-2 rounded-full transition-colors shadow-lg"
              >
                Use Demo Account
              </button>
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

              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-xs text-royal-gold hover:text-white transition-colors">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40 group-focus-within/input:text-royal-gold transition-colors">
                    <Lock size={20} />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-royal-gold/50 focus:border-royal-gold/50 transition-all backdrop-blur-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
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
                    <span>SECURE LOGIN</span>
                    <ArrowRight size={20} />
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-white/50">
                New student? <Link to="/admissions" className="text-royal-gold hover:text-white transition-colors font-medium">Complete Enrollment</Link>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Empty space for 3D character/scene to shine on Desktop */}
        <div className="hidden lg:block h-[600px] relative">
          {/* The Spline scene is positioned absolutely behind this, but we can add some floating text or UI elements here */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-10 right-10 backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl max-w-sm shadow-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-royal-gold/20 flex items-center justify-center flex-shrink-0">
                <User className="text-royal-gold" size={24} />
              </div>
              <div>
                <h4 className="text-white font-serif font-bold mb-1">Welcome Back, Scholars</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Experience the next generation of academic management. Your entire university life, beautifully organized in one place.
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
