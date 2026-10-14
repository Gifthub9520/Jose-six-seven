'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  MessagesSquare, 
  Trophy, 
  Globe2, 
  PieChart, 
  Compass, 
  Quote,
  Clock 
} from 'lucide-react';
import { SlideWrapper } from '../presentation/SlideWrapper';

const BENEFICIOS = [
  {
    icon: Zap,
    titulo: 'Maior Eficiência Produtiva',
    detalhes: 'Redução do tempo de ciclo de corte e montagem com menor desperdício de insumos.',
    cor: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  {
    icon: MessagesSquare,
    titulo: 'Melhor Comunicação Interna',
    detalhes: 'Fim do isolamento departamental entre design, fábrica e setor comercial.',
    cor: 'text-blue-600 bg-blue-50 border-blue-200',
  },
  {
    icon: Trophy,
    titulo: 'Produtos Mais Competitivos',
    detalhes: 'Modelos alinhados com o público moderno, unindo design de ponta e conforto real.',
    cor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    icon: Globe2,
    titulo: 'Presença no Mercado Digital',
    detalhes: 'Canal de e-commerce ativo e relacionamento com consumidores em âmbito nacional.',
    cor: 'text-orange-600 bg-orange-50 border-orange-200',
  },
  {
    icon: PieChart,
    titulo: 'Melhor Controle de Custos',
    detalhes: 'Precificação precisa, planejamento financeiro seguro e margens protegidas.',
    cor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
  },
  {
    icon: Compass,
    titulo: 'Capacidade de Adaptação Ágil',
    detalhes: 'Rapidez para reagir às mudanças rápidas de comportamento do mercado consumidor.',
    cor: 'text-rose-600 bg-rose-50 border-rose-200',
  },
];

export function Slide11Resultados() {
  return (
    <SlideWrapper
      category="Projeções & Impacto"
      slideNumber={11}
      totalSlides={13}
      title="O que pode mudar com essas estratégias?"
      subtitle="Projeções dos benefícios pretendidos após a execução do plano de melhorias"
    >
      <div className="flex flex-col justify-between h-full space-y-4 my-auto">
        {/* Caveat Banner: Resultados Esperados (não alcançados ainda) */}
        <div className="bg-amber-50/90 border border-amber-200/90 text-amber-950 px-4 py-2 rounded-xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Nota Metodológica:</strong> Estes são <em>resultados esperados</em> (cenário projetado com a aplicação das medidas), e não conquistas já consolidadas.
            </span>
          </div>
          <span className="font-semibold text-amber-800 uppercase text-[10px] hidden sm:inline">
            Visão Prospectiva
          </span>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {BENEFICIOS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.titulo}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-sm flex items-start gap-3 hover:border-slate-300 transition-all"
              >
                <div className={`p-2 rounded-lg border ${item.cor} shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {item.titulo}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.detalhes}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Big Climax Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="relative bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-5 sm:p-6 rounded-2xl border border-blue-900 shadow-md text-center overflow-hidden"
        >
          <Quote className="w-16 h-16 text-white/5 absolute -top-2 left-4 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white leading-relaxed">
              “Inovar sem perder a qualidade e a experiência que construíram a empresa.”
            </p>
            <span className="text-xs text-orange-400 font-semibold uppercase tracking-wider block mt-1.5">
              Diretriz Central de Transformação da ABC Calçados S.A.
            </span>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
