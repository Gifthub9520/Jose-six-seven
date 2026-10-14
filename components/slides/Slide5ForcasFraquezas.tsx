'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, AlertOctagon, CheckCircle, XCircle } from 'lucide-react';
import { SlideWrapper } from '../presentation/SlideWrapper';

const FORCAS = [
  {
    titulo: 'Mais de duas décadas de experiência',
    descricao: 'Histórico consolidado que transmite credibilidade, estabilidade e fidelidade histórica de clientes.'
  },
  {
    titulo: 'Conhecimento técnico dos artesãos',
    descricao: 'Habilidade rara de mestres sapateiros no manuseio nobre do couro, modelagem e costura de precisão.'
  },
  {
    titulo: 'Valorização contínua da qualidade e do design',
    descricao: 'Foco em calçados confortáveis, duráveis e visualmente refinados, sem concessões de matéria-prima.'
  },
  {
    titulo: 'Criatividade e frescor da equipe',
    descricao: 'Designers jovens e motivados a propor coleções autorais e alinhadas ao espírito contemporâneo.'
  },
  {
    titulo: 'Instalações de produção já estabelecidas',
    descricao: 'Parque industrial próprio montado, com infraestrutura pronta para expansões e novos layouts de fluxo.'
  }
];

const FRAQUEZAS = [
  {
    titulo: 'Estrutura organizacional tradicional',
    descricao: 'Hierarquia rígida com silos funcionais que geram barreiras no fluxo de trabalho e projetos.'
  },
  {
    titulo: 'Comunicação limitada entre departamentos',
    descricao: 'Distanciamento entre as equipes de design, fábrica e vendas, provocando retrabalho e desalinhamentos.'
  },
  {
    titulo: 'Dependência de processos artesanais',
    descricao: 'Etapas repetitivas que dependem exclusivamente de trabalho manual, gerando gargalos de capacidade.'
  },
  {
    titulo: 'Necessidade de modernização tecnológica',
    descricao: 'Sistemas de controle e maquinário com defasagem tecnológica frente a competidores industriais de ponta.'
  },
  {
    titulo: 'Possível demora na tomada de decisões',
    descricao: 'Processo decisório centralizado ou burocrático que retarda o lançamento de coleções sazonais.'
  }
];

export function Slide5ForcasFraquezas() {
  return (
    <SlideWrapper
      category="Diagnóstico Interno"
      slideNumber={5}
      totalSlides={13}
      title="O que a empresa tem de bom e o que precisa melhorar?"
      subtitle="Balanço dos fatores internos positivos (Forças) e dos pontos de vulnerabilidade (Fraquezas)"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 h-full my-auto">
        {/* Forças (Verde Esmeralda Discreto) */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-5 sm:p-6 border border-emerald-200/90 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-emerald-100">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Forças da ABC Calçados</h3>
                  <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                    Vantagens Competitivas Internas
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-100/70 text-emerald-900">
                5 Fatores
              </span>
            </div>

            <div className="space-y-3">
              {FORCAS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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

          <div className="mt-4 pt-3 border-t border-emerald-100 text-xs text-emerald-950 bg-emerald-50/50 p-2.5 rounded-xl font-medium">
            <strong>Diretriz Estratégica:</strong> Proteger e valorizar o know-how artesanal e a tradição de qualidade como assinatura da marca.
          </div>
        </motion.div>

        {/* Fraquezas (Laranja / Coral Discreto) */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="bg-white rounded-2xl p-5 sm:p-6 border border-orange-200/90 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-orange-100">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-orange-50 text-orange-700 border border-orange-200">
                  <AlertOctagon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Fraquezas da ABC Calçados</h3>
                  <span className="text-xs font-semibold text-orange-700 uppercase tracking-wider">
                    Gargalos Operacionais & Estruturais
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-orange-100/70 text-orange-950">
                5 Fatores
              </span>
            </div>

            <div className="space-y-3">
              {FRAQUEZAS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
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

          <div className="mt-4 pt-3 border-t border-orange-100 text-xs text-orange-950 bg-orange-50/50 p-2.5 rounded-xl font-medium">
            <strong>Diretriz Estratégica:</strong> Quebrar os silos entre setores e modernizar etapas sem perder a essência da empresa.
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
