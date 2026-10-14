'use client';

import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize, 
  Minimize, 
  Layers, 
  FileText, 
  RotateCcw,
  Home
} from 'lucide-react';

interface SlideControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
  onToggleOverview: () => void;
  onToggleNotes: () => void;
  showNotes: boolean;
  onGoHome: () => void;
}

export function SlideControls({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onToggleFullscreen,
  isFullscreen,
  onToggleOverview,
  onToggleNotes,
  showNotes,
  onGoHome,
}: SlideControlsProps) {
  // If on initial cover slide (slide 0), render a subtle minimal floating bar or home indicator
  if (currentSlide === 0) {
    return null;
  }

  const progressPercent = (currentSlide / totalSlides) * 100;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center select-none pointer-events-auto">
      {/* Floating Control Capsule */}
      <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-2xl bg-slate-900/92 backdrop-blur-md text-white shadow-xl border border-white/10 text-xs font-medium">
        {/* Go to Cover */}
        <button
          onClick={onGoHome}
          title="Voltar à tela inicial (Capa)"
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <Home className="w-4 h-4" />
        </button>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          disabled={currentSlide <= 1}
          title="Slide anterior (Seta para a esquerda [←])"
          className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Slide Counter / Jump button */}
        <button
          onClick={onToggleOverview}
          title="Ver índice de slides (Grade)"
          className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-slate-100 flex items-center gap-1.5 font-mono text-xs tabular-nums transition-colors cursor-pointer"
        >
          <span className="font-bold text-orange-400">{currentSlide}</span>
          <span className="text-slate-400">/</span>
          <span>{totalSlides}</span>
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={currentSlide >= totalSlides}
          title="Próximo slide (Seta para a direita [→] ou Espaço)"
          className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="h-4 w-[1px] bg-white/20 mx-1 hidden sm:block" />

        {/* Overview Drawer Toggle */}
        <button
          onClick={onToggleOverview}
          title="Ver todos os slides"
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer hidden sm:block"
        >
          <Layers className="w-4 h-4" />
        </button>

        {/* Speaker Notes Toggle */}
        <button
          onClick={onToggleNotes}
          title="Dicas de fala para o orador"
          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
            showNotes 
              ? 'bg-orange-500 text-white' 
              : 'text-slate-400 hover:text-white hover:bg-white/10'
          }`}
        >
          <FileText className="w-4 h-4" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          title={isFullscreen ? 'Sair da tela cheia (Esc)' : 'Modo tela cheia (F)'}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          {isFullscreen ? (
            <Minimize className="w-4 h-4 text-orange-400" />
          ) : (
            <Maximize className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Subtle Progress Bar */}
      <div className="w-40 sm:w-56 h-1 bg-slate-800/80 rounded-full mt-1.5 overflow-hidden border border-white/10 shadow-xs">
        <div 
          className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
