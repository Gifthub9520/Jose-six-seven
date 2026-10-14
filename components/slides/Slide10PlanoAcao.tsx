'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Wrench, 
  Users2, 
  ShoppingCart, 
  Palette, 
  BarChart3,
  Target,
  Sparkles
} from 'lucide-react';
import { SlideWrapper } from '../presentation/SlideWrapper';

const PLANO_LINHAS = [
  {
    icon: Wrench,
    acao: 'Modernizar equipamentos',
    objetivo: 'Aumentar a produtividade',
    resultado: 'Produzir com mais eficiência e precisão',
    tag: 'Operações',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    icon: Users2,
    acao: 'Integrar os departamentos',
    objetivo: 'Melhorar a comunicação interna',
    resultado: 'Reduzir erros, retrabalho e atrasos de entrega',
    tag: 'Gestão',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    icon: ShoppingCart,
    acao: 'Criar uma loja virtual',
    objetivo: 'Ampliar o alcance de mercado',
    resultado: 'Conquistar novos clientes e vender para todo o país',
    tag: 'Vendas',
    badgeClass: 'bg-orange-50 text-orange-700 border-orange-200',
  },
  {
    icon: Palette,
    acao: 'Investir em novos designs',
    objetivo: 'Acompanhar as tendências de mercado',
    resultado: 'Diferenciar os produtos e elevar o valor percebido',
    tag: 'Design',
    badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  {
    icon: BarChart3,
    acao: 'Monitorar custos e vendas',
    objetivo: 'Melhorar o planejamento financeiro',
    resultado: 'Aumentar a competitividade e garantir a lucratividade',
    tag: 'Finanças',
    badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
  },
];

export function Slide10PlanoAcao() {
  return (
    <SlideWrapper
      category="Plano de Ação Executivo"
      slideNumber={10}
      totalSlides={13}
      title="Da análise à prática"
      subtitle="Matriz de implementação com ações concretas, objetivos diretos e resultados mensuráveis"
    >
      <div className="flex flex-col justify-between h-full space-y-4 my-auto">
        {/* Modern Presentation Table */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs sm:text-sm font-semibold">
                  <th className="py-3.5 px-4 sm:px-6 w-[34%]">Ação Estratégica</th>
                  <th className="py-3.5 px-4 sm:px-6 w-[33%]">Objetivo Principal</th>
                  <th className="py-3.5 px-4 sm:px-6 w-[33%]">Resultado Esperado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {PLANO_LINHAS.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.tr
                      key={item.acao}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.06 }}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      {/* Ação */}
                      <td className="py-3 px-4 sm:px-6 align-middle">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-slate-100 text-slate-800 shrink-0">
                            <Icon className="w-4 h-4 text-orange-600" />
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 block leading-snug">
                              {item.acao}
                            </span>
                            <span className={`inline-block text-[10px] font-semibold uppercase px-1.5 py-0.2 rounded border ${item.badgeClass} mt-0.5`}>
                              {item.tag}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Objetivo */}
                      <td className="py-3 px-4 sm:px-6 align-middle text-slate-700 font-medium">
                        <div className="flex items-center gap-2">
                          <Target className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{item.objetivo}</span>
                        </div>
                      </td>

                      {/* Resultado */}
                      <td className="py-3 px-4 sm:px-6 align-middle text-slate-800">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="font-semibold text-emerald-950">{item.resultado}</span>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Academic Presentation Tip */}
        <div className="bg-slate-100 border border-slate-200/80 p-3 sm:p-3.5 rounded-xl flex items-center justify-between text-xs text-slate-600">
          <span><strong>Metodologia Aplicada:</strong> Alinhamento entre diagnóstico situacional e execução tática de Administração.</span>
          <span className="font-mono text-slate-500 font-semibold hidden md:inline">Ciclo PDCA: Planejar → Executar → Checar → Agir</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
