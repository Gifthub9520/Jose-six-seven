'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  GitFork, 
  Users2, 
  Factory, 
  Check, 
  AlertCircle 
} from 'lucide-react';
import { SlideWrapper } from '../presentation/SlideWrapper';

const PILARES_INTERNOS = [
  {
    titulo: 'Cultura Organizacional',
    icon: Sparkles,
    descricao: 'Valorização enraizada da qualidade do produto, cuidado estético com o design e orgulho do trabalho artesanal bem feito.',
    positivo: 'Compromisso com acabamento superior e espírito criativo aberto a novas ideias.',
    melhoria: 'Precisa transformar a abertura conceitual em inovação prática no ritmo do mercado.',
    iconColor: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  {
    titulo: 'Estrutura Organizacional',
    icon: GitFork,
    descricao: 'Modelo departamental tradicional, com divisões isoladas entre áreas de Design, Fábrica e Vendas.',
    positivo: 'Definição clara de papéis e responsabilidades técnicas em cada setor.',
    melhoria: 'Gera "silos", prejudica a comunicação direta e torna as aprovações e decisões mais lentas.',
    iconColor: 'text-blue-600 bg-blue-50 border-blue-200',
  },
  {
    titulo: 'Recursos Humanos',
    icon: Users2,
    descricao: 'Composição mista que une mestres artesãos com grande bagagem prática e jovens profissionais em design e marketing.',
    positivo: 'Excelente combinação entre know-how clássico e visão moderna de tendências.',
    melhoria: 'Necessidade de maior alinhamento e capacitação contínua em ferramentas digitais.',
    iconColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    titulo: 'Ativos Físicos & Tecnologia',
    icon: Factory,
    descricao: 'Instalações fabris consolidadas com maquinário funcional, porém operando com processos manuais repetitivos.',
    positivo: 'Infraestrutura própria e estabelecida, com capacidade fabril ativa e experiente.',
    melhoria: 'Gargalos manuais em etapas-chave limitam a escalabilidade e aumentam custos unitários.',
    iconColor: 'text-orange-600 bg-orange-50 border-orange-200',
  },
];

export function Slide4AmbienteInterno() {
  return (
    <SlideWrapper
      category="Análise Organizacional"
      slideNumber={4}
      totalSlides={13}
      title="Análise do Ambiente Interno"
      subtitle="Diagnóstico detalhado dos quatro pilares sob gestão direta da ABC Calçados"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 h-full my-auto">
        {PILARES_INTERNOS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.titulo}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all"
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5 pb-2.5 border-b border-slate-100">
                  <div className={`p-2.5 rounded-xl border ${item.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {item.titulo}
                    </h3>
                    <span className="text-[11px] font-medium text-slate-500">
                      Pilar Interno 0{idx + 1}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {item.descricao}
                </p>
              </div>

              {/* Positivo vs Melhorar */}
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-start gap-2 bg-emerald-50/70 p-2 rounded-lg border border-emerald-100">
                  <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="text-emerald-900">
                    <strong className="font-semibold text-emerald-950">Ponto Positivo: </strong>
                    {item.positivo}
                  </span>
                </div>

                <div className="flex items-start gap-2 bg-amber-50/70 p-2 rounded-lg border border-amber-100">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <span className="text-amber-900">
                    <strong className="font-semibold text-amber-950">A Melhorar: </strong>
                    {item.melhoria}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SlideWrapper>
  );
}
