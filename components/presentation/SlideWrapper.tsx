'use client';

import React from 'react';
import { motion } from 'motion/react';

interface SlideWrapperProps {
  category: string;
  slideNumber: number;
  totalSlides: number;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function SlideWrapper({
  category,
  slideNumber,
  totalSlides,
  title,
  subtitle,
  children,
}: SlideWrapperProps) {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12 bg-slate-50 text-slate-800 overflow-y-auto lg:overflow-hidden select-none">
      {/* Slide Top Header Bar */}
      <div className="w-full flex-shrink-0 mb-4 sm:mb-6">
        <div className="flex items-center justify-between border-b border-slate-200/90 pb-3 sm:pb-4 gap-4">
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-orange-600">
            <span className="w-2.5 h-2.5 rounded-sm bg-orange-600 inline-block" />
            <span>{category}</span>
            <span className="text-slate-400 font-normal">|</span>
            <span className="text-slate-500 font-medium normal-case tracking-normal hidden sm:inline">
              Empresa ABC Calçados S.A. · Administração
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 tabular-nums">
            <span className="text-slate-900 font-bold text-sm">{String(slideNumber).padStart(2, '0')}</span>
            <span>/</span>
            <span>{String(totalSlides).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Slide Titles */}
        <div className="mt-3 sm:mt-4">
          <motion.h2 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal mt-1 max-w-4xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* Main Slide Interactive/Visual Content */}
      <div className="w-full flex-1 flex flex-col justify-center min-h-0 relative pb-16 lg:pb-12">
        {children}
      </div>

      {/* Subtle Slide Baseline Brand footer */}
      <div className="hidden lg:flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-200/60 pt-2 absolute bottom-2 left-10 right-10 pointer-events-none">
        <span>Estudo de Caso Acadêmico — ABC Calçados S.A.</span>
        <span>Apresentação de Slides · 1º Ano Ensino Médio</span>
      </div>
    </div>
  );
}
