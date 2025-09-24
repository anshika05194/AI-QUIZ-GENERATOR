import React from 'react';
import { motion, useInView } from 'framer-motion';

const Footer = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  

  const legalLinks = [
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms of Service', url: '#' },
    { name: 'Cookie Policy', url: '#' },
    { name: 'GDPR', url: '#' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const FloatingParticle = ({ delay = 0, duration = 3 }) => (
    <motion.div
      className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [-20, -40, -20],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    />
  );

  return (
    <motion.footer 
      ref={ref}
      className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-50">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.2) 0%, transparent 50%)
            `
          }}
          animate={{
            background: [
              `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.2) 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 20% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
               radial-gradient(circle at 60% 60%, rgba(120, 200, 255, 0.2) 0%, transparent 50%)`
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <FloatingParticle 
            key={i} 
            delay={i * 0.5} 
            duration={3 + Math.random() * 2} 
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <motion.div 
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="relative w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white font-bold text-xl">AI</span>
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                QuickQuiz
              </h3>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 mb-6 leading-relaxed text-lg max-w-md"
              variants={itemVariants}
            >
              Transform education with AI-powered quiz generation. Create engaging, personalized assessments in seconds.
            </motion.p>

            <motion.div 
              className="flex items-center space-x-2 text-sm text-gray-400"
              variants={itemVariants}
            >
              <motion.div 
                className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span>Powered by Advanced AI • 99.9% Uptime</span>
            </motion.div>
          </motion.div>

          

          {/* Legal Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6 text-white">Legal</h4>
            <div className="space-y-3">
              {legalLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  className="block text-gray-300 hover:text-white transition-all duration-300 relative group"
                  whileHover={{ x: 8, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="relative">
                    {link.name}
                    <motion.div
                      className="absolute -left-2 top-1/2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        

        {/* Copyright */}
        <motion.div 
          className="mt-12 pt-6 border-t border-gray-800/30 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p 
            className="text-gray-400"
            whileHover={{ 
              scale: 1.02,
              color: "#ffffff"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            © 2025 QuickQuiz. All rights reserved. 
            <span className="ml-2 text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              Built with ❤️ for educators worldwide!
            </span>
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;