'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Check } from 'lucide-react';
import { SLIDES_META } from '@/types/presentation';

interface SlideOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onSelectSlide: (slideNumber: number) => void;
}

export function SlideOverviewModal({
  isOpen,
  onClose,
  currentSlide,
  onSelectSlide,
}: SlideOverviewModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-3xl w-full max-w-5xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Índice da Apresentação</h3>
              <p className="text-xs text-slate-500">Selecione qualquer slide para navegar imediatamente</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Grid of Slides */}
          <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {SLIDES_META.map((slide) => {
              const isActive = currentSlide === slide.id;
              return (
                <button
                  key={slide.id}
                  onClick={() => {
                    onSelectSlide(slide.id);
                    onClose();
                  }}
                  className={`relative text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between h-28 group ${
                    isActive
                      ? 'border-orange-500 bg-orange-50/70 shadow-sm ring-2 ring-orange-400/30'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600">
                      {slide.id === 0 ? 'Capa Inicial' : `Slide ${slide.id}`}
                    </span>
                    {isActive && (
                      <span className="p-1 rounded-full bg-orange-500 text-white">
                        <Check className="w-3 h-3" />
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2 leading-snug">
                      {slide.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 mt-1 truncate">
                      {slide.category}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="px-6 py-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs text-slate-500">
            <span>Dica: Use as teclas [1] a [9] ou as setas para atalhos rápidos.</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Fechar Índice
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
