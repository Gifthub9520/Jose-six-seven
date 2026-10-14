'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, ArrowRight, Quote } from 'lucide-react';
import Image from 'next/image';
import { SlideWrapper } from '../presentation/SlideWrapper';

export function Slide12Conclusao() {
  return (
    <SlideWrapper
      category="Conclusão Geral"
      slideNumber={12}
      totalSlides={13}
      title="Conclusão"
      subtitle="Síntese executiva do estudo de caso administrativo da ABC Calçados S.A."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-stretch h-full my-auto">
        {/* Left: Analytical Narrative & Grand Quote */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm space-y-3.5">
            <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Síntese do Diagnóstico de Administração</span>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              A <strong className="text-slate-900 font-semibold">ABC Calçados S.A.</strong> possui ativos humanos inestimáveis: mais de duas décadas de experiência, profissionais altamente qualificados e uma cultura que sempre colocou a qualidade do calçado em primeiro lugar.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Entretanto, o mercado contemporâneo exige dinamismo: é indispensável <span className="text-orange-600 font-semibold">modernizar processos fabris repetitivos</span>, romper o isolamento entre departamentos e acompanhar o ritmo ágil de consumo do público digital.
            </p>

            <div className="pt-2 border-t border-slate-100 flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                Com planejamento estratégico, inovação em canais e gestão financeira, a empresa tem todas as condições de liderar sua categoria no setor calçadista.
              </span>
            </div>
          </div>

          {/* Golden Highlight Final Phrase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-5 sm:p-6 rounded-2xl shadow-lg shadow-orange-600/20 relative overflow-hidden"
          >
            <Quote className="w-20 h-20 text-white/10 absolute -top-4 right-2 pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-orange-100 block mb-1">
                Mensagem Central
              </span>
              <p className="text-lg sm:text-xl md:text-2xl font-black tracking-tight leading-snug">
                “O crescimento acontece quando a experiência se une à inovação.”
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: Modern Product Image Showcase */}
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm min-h-[240px] lg:min-h-full flex flex-col justify-end bg-slate-950">
          <Image
            src="/images/sneaker.jpg"
            alt="Protótipo moderno de tênis da ABC Calçados combinando couro artesanal e solado esportivo"
            fill
            className="object-cover object-center filter brightness-95"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          <div className="relative z-10 p-5 text-white">
            <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">
              O Futuro da Empresa
            </span>
            <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
              Design Contemporâneo & Identidade Autoral
            </h4>
            <p className="text-xs text-slate-300 mt-1 line-clamp-2">
              A resposta da ABC Calçados aos novos tempos: calçados com tecnologia, alma artesanal e presença digital.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
