'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  HelpCircle, 
  RotateCcw, 
  Home, 
  CheckCircle, 
  GraduationCap, 
  Users,
  Layers,
  Sparkles
} from 'lucide-react';
import { SlideWrapper } from '../presentation/SlideWrapper';

interface Slide13EncerramentoProps {
  onRestart: () => void;
  onGoHome: () => void;
  onOpenOverview: () => void;
}

const INTEGRANTES = [
  'José',
  'Leonam',
  'Vinicius',
  'Aline',
  'Maisa'
];

export function Slide13Encerramento({ onRestart, onGoHome, onOpenOverview }: Slide13EncerramentoProps) {
  return (
    <SlideWrapper
      category="Encerramento & Perguntas"
      slideNumber={13}
      totalSlides={13}
      title="Obrigado pela atenção!"
      subtitle="Espaço aberto para comentários, considerações do professor e perguntas da turma"
    >
      <div className="flex flex-col items-center justify-between h-full max-w-4xl mx-auto my-auto text-center space-y-6">
        {/* Q&A Callout Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-sm sm:text-base font-bold shadow-sm"
        >
          <HelpCircle className="w-5 h-5 text-blue-700" />
          <span>Alguma pergunta ou feedback?</span>
        </motion.div>

        {/* Team Members Display */}
        <div className="w-full bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <Users className="w-4 h-4 text-orange-600" />
            <span>Equipe de Apresentação</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {INTEGRANTES.map((nome, index) => (
              <motion.div
                key={nome}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-300 hover:bg-orange-50/40 transition-colors shadow-xs"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                  {nome[0]}
                </div>
                <span className="text-sm sm:text-base font-bold text-slate-900">{nome}</span>
              </motion.div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500">
            <GraduationCap className="w-4 h-4 text-blue-700" />
            <span>Disciplina de Administração · Estudo de Caso Empresarial · 1º Ano do Ensino Médio</span>
          </div>
        </div>

        {/* Final Interactive Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reiniciar Apresentação (Slide 1)</span>
          </button>

          <button
            onClick={onGoHome}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4 text-slate-600" />
            <span>Voltar à Tela Inicial</span>
          </button>

          <button
            onClick={onOpenOverview}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors cursor-pointer"
          >
            <Layers className="w-4 h-4 text-blue-700" />
            <span>Ver Todos os Slides</span>
          </button>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
