import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Des from '../Des/Des';


const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <motion.div 
      className="min-h-screen flex flex-col relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100"
          style={{ y: backgroundY }}
        />
        
        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{ 
            background: `
              radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)
            `,
            y: backgroundY
          }}
          animate={{
            background: [
              `radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.2) 0%, transparent 50%),
               radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
               radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)`,
              `radial-gradient(circle at 75% 25%, rgba(14, 165, 233, 0.2) 0%, transparent 50%),
               radial-gradient(circle at 25% 75%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
               radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)`
            ]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-sky-300/20 to-blue-400/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/2 right-20 w-24 h-24 bg-gradient-to-bl from-cyan-300/20 to-blue-500/20 rounded-2xl blur-lg transform rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 0.8, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-tr from-sky-400/20 to-cyan-400/20 rounded-full blur-lg"
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <Header />
      
      <motion.main 
        className="flex-grow pt-16 relative z-10 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.2,
          ease: "easeOut"
        }}
        style={{ opacity }}
      >
        <motion.div
          className=" flex flex-col"
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            ease: "easeOut"
          }}
        >
          {children}
        </motion.div>
      </motion.main>
      
      <Des />

      <Footer />

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform-gpu z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-white z-40 backdrop-blur-sm"
        whileHover={{ 
          scale: 1.1,
          rotate: 180,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 300 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>



    </motion.div>
  );
};

export default Layout;