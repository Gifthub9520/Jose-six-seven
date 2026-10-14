'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingDown, 
  Swords, 
  Sparkles, 
  ShoppingBag, 
  Compass,
  ArrowRight
} from 'lucide-react';
import { SlideWrapper } from '../presentation/SlideWrapper';

const FATORES_EXTERNOS = [
  {
    titulo: 'Economia',
    subtitulo: 'Flutuações de renda & insumos',
    icon: TrendingDown,
    descricao: 'As oscilações econômicas gerais impactam diretamente os custos de matéria-prima (couro, borracha, solados) e reduzem o poder de compra das famílias para itens de vestuário e calçados.',
    impacto: 'Pressão constante sobre a política de preços e necessidade de rigidez financeira.',
    iconColor: 'text-rose-600 bg-rose-50 border-rose-200',
  },
  {
    titulo: 'Concorrência',
    subtitulo: 'Pressão nacional e global',
    icon: Swords,
    descricao: 'Marcas nacionais e concorrentes internacionais lançam novas coleções em ritmo frenético, disputando consumidores com estratégias agressivas de desconto e grande escala de produção.',
    impacto: 'Risco de perda de fatia de mercado se a empresa não oferecer diferenciais claros.',
    iconColor: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  {
    titulo: 'Tendências de Consumo',
    subtitulo: 'Busca por versatilidade e estilo',
    icon: Sparkles,
    descricao: 'Os hábitos dos consumidores mudam velozmente: há forte preferência por calçados híbridos (conforto casual para trabalho e lazer), design contemporâneo, ergonomia e preço justo.',
    impacto: 'Exige agilidade para atualizar coleções antes que os modelos se tornem obsoletos.',
    iconColor: 'text-blue-600 bg-blue-50 border-blue-200',
  },
  {
    titulo: 'Tecnologia & Mercado',
    subtitulo: 'Revolução digital no varejo',
    icon: ShoppingBag,
    descricao: 'A transformação digital abriu canais diretos via e-commerce, redes sociais e marketplaces, permitindo criar um relacionamento próximo e fidelizar clientes em todo o território nacional.',
    impacto: 'Oportunidade vital para eliminar intermediários e conquistar públicos jovens.',
    iconColor: 'text-orange-600 bg-orange-50 border-orange-200',
  },
];

export function Slide6AmbienteExterno() {
  return (
    <SlideWrapper
      category="Macroambiente & Mercado"
      slideNumber={6}
      totalSlides={13}
      title="O que acontece fora da empresa?"
      subtitle="As 4 grandes forças externas incontroláveis que moldam o mercado calçadista"
    >
      <div className="flex flex-col justify-between h-full space-y-4 my-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {FATORES_EXTERNOS.map((fator, index) => {
            const Icon = fator.icon;
            return (
              <motion.div
                key={fator.titulo}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border ${fator.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 leading-snug">
                          {fator.titulo}
                        </h3>
                        <p className="text-xs text-slate-500">{fator.subtitulo}</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      Externo
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    {fator.descricao}
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/70 p-2.5 rounded-xl text-xs text-slate-700 flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-semibold">Impacto Prático: </strong>
                    {fator.impacto}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Strategic Takeaway footer */}
        <div className="bg-slate-900 text-white px-5 py-3 rounded-xl flex items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-orange-400 shrink-0" />
            <span>
              <strong>Conceito de Gestão:</strong> A empresa não pode controlar o macroambiente, mas pode escolher como se adaptar a ele.
            </span>
          </div>
          <span className="hidden sm:inline text-slate-400 text-xs">
            Fonte de Diagnóstico: Análise PESTEL & Concorrência
          </span>
        </div>
      </div>
    </SlideWrapper>
  );
}
