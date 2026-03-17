import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import WhatsAppChatbot from "./components/WhatsAppChatbot";
import './index.css';

interface ThemeContextType {
  mode: 'light' | 'dark';
  toggle: () => void;
}

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const theme: ThemeContextType = {
    mode,
    toggle: () => setMode(mode === 'dark' ? 'light' : 'dark'),
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [mode]);

  const pageVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={mode}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`min-h-screen ${mode === 'dark' ? 'dark' : 'light'}`}
      >
        <Navigation theme={theme} />
        <main>
          <Main />
          <Expertise />
          <Timeline />
          <Project />
          <Contact />
        </main>
        <Footer />
        <WhatsAppChatbot />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;