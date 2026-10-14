'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Volume2 } from 'lucide-react';
import { SLIDES_META } from '@/types/presentation';

interface SpeakerNotesPanelProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
}

export function SpeakerNotesPanel({
  isOpen,
  onClose,
  currentSlide,
}: SpeakerNotesPanelProps) {
  if (!isOpen) return null;

  const currentMeta = SLIDES_META.find((s) => s.id === currentSlide) || SLIDES_META[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-20 right-4 sm:right-8 z-40 w-full max-w-md bg-slate-900/95 backdrop-blur-md text-white rounded-2xl shadow-2xl border border-slate-700/80 p-4 select-none"
      >
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
            <Volume2 className="w-4 h-4 text-orange-400" />
            <span>Guia de Fala do Aluno · Slide {currentSlide}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
          {currentMeta.speakerNotes}
        </p>

        <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
          <span>Dica do Professor: Fale pausadamente olhando para a turma.</span>
          <span className="text-orange-400 font-semibold">{currentMeta.category}</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
