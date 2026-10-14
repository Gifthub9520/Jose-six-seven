'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, BookOpen, ChevronRight, Layers } from 'lucide-react';
import Image from 'next/image';

interface Slide0HomeProps {
  onStart: () => void;
  onExploreSlide: (index: number) => void;
}

export function Slide0Home({ onStart, onExploreSlide }: Slide0HomeProps) {
  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white select-none">
      {/* Background with footwear studio photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Bancada de design e prototipagem de calçados ABC Calçados S.A."
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-75 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic rich overlay for maximum text contrast and sophistication */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/95 via-slate-950/80 to-slate-900/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(15,23,42,0.85)_100%)]" />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 text-center flex flex-col items-center">
        {/* Editorial Pill-Free Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 text-xs md:text-sm font-medium tracking-widest uppercase text-orange-400 mb-6"
        >
          <BookOpen className="w-4 h-4 text-orange-400" />
          <span>Disciplina de Administração</span>
          <span className="text-slate-500" aria-hidden="true">·</span>
          <span>1º Ano do Ensino Médio</span>
          <span className="text-slate-500" aria-hidden="true">·</span>
          <span>Apresentação Escolar</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-none drop-shadow-sm mb-3"
        >
          ESTUDO DE CASO
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-100 mb-6"
        >
          <span>Empresa ABC Calçados S.A.</span>
        </motion.div>

        {/* Short Statement */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-2xl text-slate-200 font-light italic max-w-2xl mx-auto leading-relaxed mb-10"
        >
          “Análise organizacional, desafios e estratégias de mercado.”
        </motion.p>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={onStart}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-bold tracking-wide text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 rounded-2xl shadow-xl shadow-orange-600/30 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <Play className="w-5 h-5 fill-current transition-transform duration-200 group-hover:scale-110" />
            <span>COMEÇAR APRESENTAÇÃO</span>
            <ChevronRight className="w-5 h-5 opacity-75 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onExploreSlide(1)}
            className="inline-flex items-center gap-2 px-6 py-4 text-sm font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-2xl border border-slate-700/80 transition-colors cursor-pointer"
          >
            <Layers className="w-4 h-4 text-orange-400" />
            <span>Ver Índice de Slides</span>
          </button>
        </motion.div>

        {/* Team preview & keyboard hints */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-14 pt-8 border-t border-white/10 w-full max-w-3xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400"
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">Equipe:</span>
            <span>José · Leonam · Vinicius · Aline · Maisa</span>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <kbd className="px-2 py-0.5 bg-white/10 rounded text-[11px] font-mono text-slate-200 border border-white/10">Setas ← →</kbd>
            <span>ou</span>
            <kbd className="px-2 py-0.5 bg-white/10 rounded text-[11px] font-mono text-slate-200 border border-white/10">Espaço</kbd>
            <span>para navegar</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
