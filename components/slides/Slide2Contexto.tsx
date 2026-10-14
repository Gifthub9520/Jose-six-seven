'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Building2, Footprints, RefreshCw, CheckCircle2, TrendingUp } from 'lucide-react';
import { SlideWrapper } from '../presentation/SlideWrapper';

const PILARES = [
  {
    icon: Calendar,
    valor: '+20 Anos',
    rotulo: 'Presença no Mercado',
    descricao: 'Histórico consolidado, reputação de solidez e confiabilidade perante fornecedores e clientes regionais.',
    corIcone: 'text-blue-700',
    bgIcone: 'bg-blue-50 border-blue-100',
  },
  {
    icon: Building2,
    valor: 'Médio Porte',
    rotulo: 'Porte Empresarial',
    descricao: 'Capacidade produtiva relevante, estrutura organizacional formal e equipes especializadas por setor.',
    corIcone: 'text-indigo-700',
    bgIcone: 'bg-indigo-50 border-indigo-100',
  },
  {
    icon: Footprints,
    valor: 'Calçadista',
    rotulo: 'Setor de Atuação',
    descricao: 'Foco na fabricação de calçados de qualidade, unindo técnicas artesanais de montagem e design próprio.',
    corIcone: 'text-amber-700',
    bgIcone: 'bg-amber-50 border-amber-100',
  },
  {
    icon: RefreshCw,
    valor: 'Transição',
    rotulo: 'Adaptação & Inovação',
    descricao: 'Momento decisivo para reestruturar processos, integrar canais e responder à concorrência veloz.',
    corIcone: 'text-orange-600',
    bgIcone: 'bg-orange-50 border-orange-100',
  },
];

export function Slide2Contexto() {
  return (
    <SlideWrapper
      category="Contextualização da Empresa"
      slideNumber={2}
      totalSlides={13}
      title="Conhecendo a ABC Calçados S.A."
      subtitle="Uma indústria de calçados consolidada em um momento de transformação estrutural"
    >
      <div className="flex flex-col justify-between h-full space-y-5 my-auto">
        {/* Narrative Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex p-3 rounded-xl bg-orange-50 border border-orange-200 shrink-0 text-orange-600">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Histórico & Panorama do Negócio
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A <strong className="text-slate-900 font-semibold">Empresa ABC Calçados S.A.</strong> é uma fabricante de calçados de médio porte com mais de duas décadas de trajetória. Reconhecida pela qualidade e cuidado com o design, a organização hoje se depara com um ambiente de negócios altamente competitivo, que exige revisão de métodos e agilidade estratégica.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 4 Key Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILARES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.rotulo}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-orange-300 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl border ${item.bgIcone}`}>
                      <Icon className={`w-5 h-5 ${item.corIcone}`} />
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      Fator {idx + 1}
                    </span>
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    {item.valor}
                  </h4>
                  <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-2">
                    {item.rotulo}
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mt-2 pt-2 border-t border-slate-100">
                  {item.descricao}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Insight Bar */}
        <div className="bg-blue-900 text-white p-4 rounded-xl flex items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
            <span>
              <strong>Ponto de inflexão:</strong> O sucesso do passado não garante a sustentabilidade futura sem modernização contínua.
            </span>
          </div>
          <span className="hidden md:inline font-mono text-blue-200 text-xs shrink-0">
            Fase Atual: Diagnóstico & Replanejamento
          </span>
        </div>
      </div>
    </SlideWrapper>
  );
}
