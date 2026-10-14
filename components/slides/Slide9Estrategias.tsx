'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Users, 
  Sparkles, 
  Share2, 
  Calculator,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SlideWrapper } from '../presentation/SlideWrapper';

const ESTRATEGIAS = [
  {
    num: '01',
    titulo: 'Modernização da Produção',
    icon: Cpu,
    resumo: 'Automação gradual e inteligente',
    descricao: 'Automatizar etapas repetitivas (corte a laser de tecidos, prensagem e costuras padronizadas) para elevar a produtividade, preservando o toque artesanal no acabamento nobre do calçado.',
    beneficio: 'Mais volume fabril e menor taxa de defeitos sem perder a identidade artesanal.',
    accent: 'border-blue-200 bg-blue-50/50 text-blue-700',
  },
  {
    num: '02',
    titulo: 'Integração Departamental',
    icon: Users,
    resumo: 'Fim dos silos organizacionais',
    descricao: 'Implementar comitês e reuniões semanais unindo Design, Engenharia de Produção e Equipe Comercial, permitindo feedback em tempo real sobre o que vende e viabilidade técnica.',
    beneficio: 'Decisões 50% mais rápidas e alinhamento total de cronogramas e entregas.',
    accent: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
  },
  {
    num: '03',
    titulo: 'Inovação nos Produtos',
    icon: Sparkles,
    resumo: 'Coleções urbanas e confortáveis',
    descricao: 'Desenvolver novas linhas de tênis casuais e calçados urbanos que dialoguem com as tendências contemporâneas de conforto ortopédico, ergonomia e apelo visual moderno.',
    beneficio: 'Diferenciação clara em relação aos calçados tradicionais defasados.',
    accent: 'border-amber-200 bg-amber-50/50 text-amber-700',
  },
  {
    num: '04',
    titulo: 'Marketing Digital & E-commerce',
    icon: Share2,
    resumo: 'Presença ativa e vendas online',
    descricao: 'Lançar a loja virtual própria da ABC Calçados com frete competitivo e criar campanhas de engajamento no Instagram e TikTok, mostrando a excelência e durabilidade dos produtos.',
    beneficio: 'Margens de lucro maiores (sem intermediários) e alcance nacional da marca.',
    accent: 'border-orange-200 bg-orange-50/50 text-orange-700',
  },
  {
    num: '05',
    titulo: 'Controle Rigoroso de Custos',
    icon: Calculator,
    resumo: 'Gestão financeira e fornecedores',
    descricao: 'Mapear o custo unitário por par produzido, reduzir desperdício de retalhos de couro e renegociar contratos de suprimentos em lotes maiores com fornecedores parceiros.',
    beneficio: 'Preços finais mais competitivos no varejo mantendo a lucratividade.',
    accent: 'border-indigo-200 bg-indigo-50/50 text-indigo-700',
  },
];

export function Slide9Estrategias() {
  return (
    <SlideWrapper
      category="Proposta de Melhorias"
      slideNumber={9}
      totalSlides={13}
      title="Como a empresa pode evoluir?"
      subtitle="5 estratégias práticas, realistas e viáveis para reposicionar a ABC Calçados no mercado"
    >
      <div className="flex flex-col justify-between h-full space-y-4 my-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {ESTRATEGIAS.slice(0, 3).map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                      Pilar {item.num}
                    </span>
                    <div className={`p-2 rounded-xl border ${item.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {item.titulo}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-2">
                    {item.resumo}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.descricao}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-start gap-1.5 text-[11px] text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Ganho:</strong> {item.beneficio}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {ESTRATEGIAS.slice(3, 5).map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: (idx + 3) * 0.08 }}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                      Pilar {item.num}
                    </span>
                    <div className={`p-2 rounded-xl border ${item.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {item.titulo}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-2">
                    {item.resumo}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.descricao}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-start gap-1.5 text-[11px] text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Ganho:</strong> {item.beneficio}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideWrapper>
  );
}
