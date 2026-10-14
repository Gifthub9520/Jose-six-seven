'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Globe, 
  DollarSign, 
  Cpu, 
  Timer, 
  AlertTriangle 
} from 'lucide-react';
import { SlideWrapper } from '../presentation/SlideWrapper';

const DESAFIOS = [
  {
    icon: Users,
    titulo: 'Preferências dos Consumidores',
    problema: 'Mudanças de comportamento e estilo',
    detalhes: 'O público busca calçados que combinem estética urbana, ergonomia e custo-benefício, com ciclos de vida de modelos muito mais curtos.',
    tag: 'Mercado',
    colorClass: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  {
    icon: Globe,
    titulo: 'Concorrência Nacional & Global',
    problema: 'Aumento expressivo de competidores',
    detalhes: 'Entrada forte de marcas importadas com produção em larga escala e marcas nacionais ágeis com forte presença em redes sociais.',
    tag: 'Competição',
    colorClass: 'text-rose-600 bg-rose-50 border-rose-200',
  },
  {
    icon: DollarSign,
    titulo: 'Pressão em Preços e Margens',
    problema: 'Dificuldade de repassar custos',
    detalhes: 'Clientes mais sensíveis ao preço exigem promoções constantes, comprimindo o lucro líquido da empresa enquanto matérias-primas encarecem.',
    tag: 'Financeiro',
    colorClass: 'text-red-600 bg-red-50 border-red-200',
  },
  {
    icon: Cpu,
    titulo: 'Modernização de Processos',
    problema: 'Métodos manuais e maquinário defasado',
    detalhes: 'A produção mantém etapas estritamente artesanais em fases que poderiam ser automatizadas para gerar escala e padrão uniforme.',
    tag: 'Operacional',
    colorClass: 'text-indigo-600 bg-indigo-50 border-indigo-200',
  },
  {
    icon: Timer,
    titulo: 'Lentidão nas Respostas',
    problema: 'Demora para adaptar produtos',
    detalhes: 'Comunicação lenta entre os setores de design, fábrica e vendas faz com que a empresa demore a lançar modelos quando uma tendência surge.',
    tag: 'Gestão',
    colorClass: 'text-orange-600 bg-orange-50 border-orange-200',
  },
];

export function Slide3Desafios() {
  return (
    <SlideWrapper
      category="Diagnóstico de Problemas"
      slideNumber={3}
      totalSlides={13}
      title="O que está acontecendo com a empresa?"
      subtitle="Os 5 gargalos críticos identificados que ameaçam a competitividade da ABC Calçados"
    >
      <div className="flex flex-col justify-between h-full space-y-4 my-auto">
        {/* Intro Alert Box */}
        <div className="bg-amber-50 border border-amber-200 text-amber-950 px-4 py-2.5 rounded-xl flex items-center gap-3 text-xs sm:text-sm">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Alerta Diagnóstico:</strong> Os desafios não são isolados; eles formam uma cadeia que afeta faturamento, ritmo de fábrica e relevância de marca.
          </span>
        </div>

        {/* 5 Challenges Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {DESAFIOS.slice(0, 3).map((desafio, index) => {
            const Icon = desafio.icon;
            return (
              <motion.div
                key={desafio.titulo}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg border ${desafio.colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {desafio.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 leading-snug">
                    {desafio.titulo}
                  </h4>
                  <p className="text-xs font-semibold text-orange-600 mt-0.5 mb-2">
                    {desafio.problema}
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2 mt-2">
                  {desafio.detalhes}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {DESAFIOS.slice(3, 5).map((desafio, index) => {
            const Icon = desafio.icon;
            return (
              <motion.div
                key={desafio.titulo}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: (index + 3) * 0.08 }}
                className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg border ${desafio.colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {desafio.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 leading-snug">
                    {desafio.titulo}
                  </h4>
                  <p className="text-xs font-semibold text-orange-600 mt-0.5 mb-2">
                    {desafio.problema}
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2 mt-2">
                  {desafio.detalhes}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideWrapper>
  );
}
