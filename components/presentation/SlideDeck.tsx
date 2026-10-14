'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Slide0Home } from '../slides/Slide0Home';
import { Slide1Grupo } from '../slides/Slide1Grupo';
import { Slide2Contexto } from '../slides/Slide2Contexto';
import { Slide3Desafios } from '../slides/Slide3Desafios';
import { Slide4AmbienteInterno } from '../slides/Slide4AmbienteInterno';
import { Slide5ForcasFraquezas } from '../slides/Slide5ForcasFraquezas';
import { Slide6AmbienteExterno } from '../slides/Slide6AmbienteExterno';
import { Slide7OportunidadesAmeacas } from '../slides/Slide7OportunidadesAmeacas';
import { Slide8MatrizSwot } from '../slides/Slide8MatrizSwot';
import { Slide9Estrategias } from '../slides/Slide9Estrategias';
import { Slide10PlanoAcao } from '../slides/Slide10PlanoAcao';
import { Slide11Resultados } from '../slides/Slide11Resultados';
import { Slide12Conclusao } from '../slides/Slide12Conclusao';
import { Slide13Encerramento } from '../slides/Slide13Encerramento';
import { SlideControls } from './SlideControls';
import { SlideOverviewModal } from './SlideOverviewModal';
import { SpeakerNotesPanel } from './SpeakerNotesPanel';

const TOTAL_SLIDES = 13;

export function SlideDeck() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState<boolean>(false);
  const [showNotes, setShowNotes] = useState<boolean>(false);

  // Reference for touch gestures
  const touchStartXRef = useRef<number | null>(null);

  // Check fullscreen state changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
    } catch {
      // Gracefully ignore if browser blocks fullscreen
    }
  }, []);

  const goToSlide = useCallback((newSlide: number) => {
    setDirection(newSlide > currentSlide ? 1 : -1);
    setCurrentSlide(Math.max(0, Math.min(newSlide, TOTAL_SLIDES)));
  }, [currentSlide]);

  const handleNext = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 1) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    } else if (currentSlide === 1) {
      setDirection(-1);
      setCurrentSlide(0);
    }
  }, [currentSlide]);

  const handleStartPresentation = useCallback(async () => {
    // Attempt fullscreen per requirement: "utilizando a API Fullscreen do navegador quando disponível"
    try {
      if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    } catch {
      // Browser permissions or user gesture fallback
    }
    setDirection(1);
    setCurrentSlide(1);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If modal is open, let Escape close it
      if (isOverviewOpen) {
        if (e.key === 'Escape') {
          setIsOverviewOpen(false);
          return;
        }
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentSlide === 0) {
          handleStartPresentation();
        } else {
          handleNext();
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(TOTAL_SLIDES);
      } else if (e.key === 'f' || e.key === 'F') {
        // Toggle fullscreen shortcut
        toggleFullscreen();
      } else if (e.key === 'o' || e.key === 'O') {
        setIsOverviewOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, handleNext, handlePrev, goToSlide, handleStartPresentation, isOverviewOpen, toggleFullscreen]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    const threshold = 50; // min swipe distance

    if (diff > threshold) {
      // Swiped left -> Next
      if (currentSlide === 0) {
        handleStartPresentation();
      } else {
        handleNext();
      }
    } else if (diff < -threshold) {
      // Swiped right -> Prev
      handlePrev();
    }
    touchStartXRef.current = null;
  };

  const slideVariants = {
    initial: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 30 : -30,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
        ease: 'easeOut' as const,
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -30 : 30,
      transition: {
        duration: 0.2,
        ease: 'easeIn' as const,
      },
    }),
  };

  return (
    <div 
      className="relative w-screen h-screen overflow-hidden bg-slate-900 select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide Rendering Canvas with AnimatePresence */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full h-full"
        >
          {currentSlide === 0 && (
            <Slide0Home 
              onStart={handleStartPresentation} 
              onExploreSlide={(index) => goToSlide(index)} 
            />
          )}
          {currentSlide === 1 && <Slide1Grupo />}
          {currentSlide === 2 && <Slide2Contexto />}
          {currentSlide === 3 && <Slide3Desafios />}
          {currentSlide === 4 && <Slide4AmbienteInterno />}
          {currentSlide === 5 && <Slide5ForcasFraquezas />}
          {currentSlide === 6 && <Slide6AmbienteExterno />}
          {currentSlide === 7 && <Slide7OportunidadesAmeacas />}
          {currentSlide === 8 && <Slide8MatrizSwot />}
          {currentSlide === 9 && <Slide9Estrategias />}
          {currentSlide === 10 && <Slide10PlanoAcao />}
          {currentSlide === 11 && <Slide11Resultados />}
          {currentSlide === 12 && <Slide12Conclusao />}
          {currentSlide === 13 && (
            <Slide13Encerramento 
              onRestart={() => goToSlide(1)} 
              onGoHome={() => goToSlide(0)}
              onOpenOverview={() => setIsOverviewOpen(true)}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Floating Presentation Controls */}
      <SlideControls
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onPrev={handlePrev}
        onNext={handleNext}
        onGoTo={goToSlide}
        onToggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
        onToggleOverview={() => setIsOverviewOpen((prev) => !prev)}
        onToggleNotes={() => setShowNotes((prev) => !prev)}
        showNotes={showNotes}
        onGoHome={() => goToSlide(0)}
      />

      {/* Overview Modal */}
      <SlideOverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        currentSlide={currentSlide}
        onSelectSlide={goToSlide}
      />

      {/* Speaker Notes Drawer */}
      <SpeakerNotesPanel
        isOpen={showNotes && currentSlide > 0}
        onClose={() => setShowNotes(false)}
        currentSlide={currentSlide}
      />
    </div>
  );
}
