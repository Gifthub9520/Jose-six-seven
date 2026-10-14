'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Users, GraduationCap, Award, Compass, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { SlideWrapper } from '../presentation/SlideWrapper';

const INTEGRANTES = [
  { nome: 'José', papel: 'Diagnóstico Organizacional', inicial: 'J' },
  { nome: 'Leonam', papel: 'Análise de Mercado & SWOT', inicial: 'L' },
  { nome: 'Vinicius', papel: 'Estratégias de Operações', inicial: 'V' },
  { nome: 'Aline', papel: 'Marketing & Canais Digitais', inicial: 'A' },
  { nome: 'Maisa', papel: 'Plano de Ação & Resultados', inicial: 'M' },
];

export function Slide1Grupo() {
  return (
    <SlideWrapper
      category="Apresentação do Grupo"
      slideNumber={1}
      totalSlides={13}
      title="Estudo de Caso: Empresa ABC Calçados S.A."
      subtitle="Equipe responsável pelo diagnóstico empresarial e planejamento estratégico"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch h-full my-auto">
        {/* Left Column: Team Showcase */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-900 border border-blue-100">
                <Users className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Integrantes da Equipe</h3>
                <p className="text-xs text-slate-500">Alunos do 1º Ano do Ensino Médio</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INTEGRANTES.map((membro, index) => (
                <motion.div
                  key={membro.nome}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-orange-50/50 border border-slate-200/70 hover:border-orange-200 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-900 to-slate-900 text-white flex items-center justify-center font-bold text-base shadow-sm">
                    {membro.inicial}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">{membro.nome}</h4>
                    <p className="text-xs text-slate-500 truncate">{membro.papel}</p>
                  </div>
                </motion.div>
              ))}
              
              {/* High School / Discipline Meta Card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 5 * 0.08 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold leading-snug">Administração</h4>
                  <p className="text-xs text-orange-100">Estudo de Caso Prático</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Academic Context Strip */}
          <div className="bg-slate-900 text-white p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-orange-400 font-semibold block mb-1">
                Objetivo da Apresentação
              </span>
              <p className="text-xs sm:text-sm text-slate-300">
                Avaliar a situação competitiva da ABC Calçados S.A. e propor soluções administrativas viáveis.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0 text-xs font-medium text-orange-300 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Compass className="w-3.5 h-3.5" />
              <span>Visão Estratégica</span>
            </div>
          </div>
        </div>

        {/* Right Column: Footwear Craftsmanship Visual */}
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm min-h-[260px] lg:min-h-full flex flex-col justify-end bg-slate-900">
          <Image
            src="/images/craft.jpg"
            alt="Mestre artesão fabricando calçado de couro tradicional"
            fill
            className="object-cover object-center filter brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <div className="relative z-10 p-5 text-white">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-orange-400 mb-1">
              Tradição Calçadista
            </span>
            <h3 className="text-base font-bold text-white leading-tight">
              A Arte do Calçado & a Gestão Moderna
            </h3>
            <p className="text-xs text-slate-300 mt-1 line-clamp-2">
              Unindo o legado de duas décadas de qualidade artesanal aos métodos contemporâneos de administração.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
