'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, AlertTriangle, ArrowUpRight, ArrowDownRight, Info } from 'lucide-react';
import { SlideWrapper } from '../presentation/SlideWrapper';

const OPORTUNIDADES = [
  {
    titulo: 'Vendas por meio de lojas virtuais',
    descricao: 'Criação de um e-commerce próprio para vender diretamente ao consumidor (D2C), aumentando margens e atingindo todo o país.'
  },
  {
    titulo: 'Divulgação nas redes sociais',
    descricao: 'Produção de conteúdo dinâmico (Instagram/TikTok) mostrando os bastidores do calçado, o design e o conforto.'
  },
  {
    titulo: 'Criação de modelos inovadores',
    descricao: 'Desenvolvimento de calçados urbanos modernos inspirados no estilo contemporâneo que os jovens consumidores valorizam.'
  },
  {
    titulo: 'Uso de materiais sustentáveis',
    descricao: 'Adoção de tecidos reciclados, solados de borracha reutilizada e couro ecológico como diferencial de responsabilidade.'
  },
  {
    titulo: 'Parcerias com influenciadores e lojas',
    descricao: 'Alianças comerciais com formadores de opinião de moda e presença em boutiques multimarcas seletas.'
  }
];

const AMEACAS = [
  {
    titulo: 'Concorrentes com preços mais baixos',
    descricao: 'Fábricas de produção massificada que praticam guerra de preços com produtos de menor custo unitário.'
  },
  {
    titulo: 'Marcas internacionais consolidadas',
    descricao: 'Grandes multinacionais esportivas com orçamentos astronômicos de publicidade e forte fidelidade de marca.'
  },
  {
    titulo: 'Oscilações econômicas do país',
    descricao: 'Períodos de inflação e retração de renda que fazem famílias adiarem a compra de calçados não essenciais.'
  },
  {
    titulo: 'Mudanças rápidas nas tendências de moda',
    descricao: 'Ciclos velozes de consumo que podem deixar estoques de coleções desatualizados em poucos meses.'
  },
  {
    titulo: 'Aumento nos custos de matérias-primas',
    descricao: 'Encarecimento do couro legítimo, solados de borracha, colas especiais e embalagens de transporte.'
  }
];

export function Slide7OportunidadesAmeacas() {
  return (
    <SlideWrapper
      category="Análise Externa (SWOT)"
      slideNumber={7}
      totalSlides={13}
      title="Oportunidades e ameaças do mercado"
      subtitle="Mapeamento dos cenários externos que estão além do controle direto da ABC Calçados"
    >
      <div className="flex flex-col justify-between h-full space-y-4 my-auto">
        {/* Conceptual Distinction Banner */}
        <div className="bg-blue-50 border border-blue-200 text-blue-950 p-3 sm:p-3.5 rounded-xl flex items-start sm:items-center gap-3 text-xs sm:text-sm">
          <Info className="w-5 h-5 text-blue-700 shrink-0 mt-0.5 sm:mt-0" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 w-full">
            <span>
              <strong className="text-blue-900 font-bold">Oportunidades:</strong> Fatores externos favoráveis que abrem novos caminhos de expansão.
            </span>
            <span className="hidden sm:inline text-blue-300">|</span>
            <span>
              <strong className="text-rose-900 font-bold">Ameaças:</strong> Fatores externos desfavoráveis com potencial de gerar prejuízos.
            </span>
          </div>
        </div>

        {/* 2 Balanced Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {/* Oportunidades Column (Azul Safira / Teal Suave) */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-5 border border-blue-200/90 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-blue-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">Oportunidades</h3>
                    <p className="text-xs text-blue-700 font-medium">Cenários favoráveis para crescer</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-900">
                  5 Oportunidades
                </span>
              </div>

              <div className="space-y-2.5">
                {OPORTUNIDADES.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <ArrowUpRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {item.titulo}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                        {item.descricao}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3.5 pt-2.5 border-t border-blue-100 text-[11px] text-blue-950 font-medium">
              Aproveitar a credibilidade de 20 anos para acelerar a entrada no e-commerce direto.
            </div>
          </motion.div>

          {/* Ameaças Column (Carmim / Coral Discreto) */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="bg-white rounded-2xl p-5 border border-rose-200/90 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-rose-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-rose-50 text-rose-700 border border-rose-200">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">Ameaças</h3>
                    <p className="text-xs text-rose-700 font-medium">Riscos do mercado a monitorar</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-900">
                  5 Riscos
                </span>
              </div>

              <div className="space-y-2.5">
                {AMEACAS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <ArrowDownRight className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {item.titulo}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                        {item.descricao}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3.5 pt-2.5 border-t border-rose-100 text-[11px] text-rose-950 font-medium">
              Criar blindagem contra a guerra de preços apostando em design autoral e fidelidade.
            </div>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  );
}
