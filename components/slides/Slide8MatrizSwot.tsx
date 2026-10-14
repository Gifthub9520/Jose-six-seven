'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  AlertOctagon, 
  Lightbulb, 
  AlertTriangle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SlideWrapper } from '../presentation/SlideWrapper';

export function Slide8MatrizSwot() {
  return (
    <SlideWrapper
      category="Matriz SWOT / FOFA"
      slideNumber={8}
      totalSlides={13}
      title="Visão estratégica da ABC Calçados"
      subtitle="Síntese diagnóstica completa combinando ambiente interno e cenário externo"
    >
      <div className="flex flex-col justify-between h-full space-y-4 my-auto">
        {/* Visual 2x2 Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 flex-1">
          {/* Quadrante 1: FORÇAS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-2xl p-5 border-2 border-emerald-100 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-emerald-300 transition-colors"
          >
            <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-bl-xl uppercase tracking-wider">
              Interno · Positivo
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3 pb-2 border-b border-emerald-50">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                    <span>FORÇAS</span>
                    <span className="text-xs font-normal text-emerald-700">(Strengths)</span>
                  </h3>
                  <p className="text-xs text-slate-500">Vantagens consolidadas</p>
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <span><strong>Experiência:</strong> Mais de 20 anos de tradição e reputação industrial.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <span><strong>Qualidade:</strong> Excelência técnica e acabamento artesanal refinado.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <span><strong>Design & Criação:</strong> Valorização estética e equipe criativa engajada.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <span><strong>Mestres Artesãos:</strong> Know-how prático acumulado de fabricação.</span>
                </li>
              </ul>
            </div>

            <div className="mt-3 pt-2 text-[11px] font-semibold text-emerald-800 bg-emerald-50/60 p-2 rounded-lg">
              Alavanca: Usar a tradição de qualidade para justificar o valor da marca.
            </div>
          </motion.div>

          {/* Quadrante 2: FRAQUEZAS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="bg-white rounded-2xl p-5 border-2 border-orange-100 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-orange-300 transition-colors"
          >
            <div className="absolute top-0 right-0 px-3 py-1 bg-orange-100 text-orange-900 text-[10px] font-bold rounded-bl-xl uppercase tracking-wider">
              Interno · Negativo
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3 pb-2 border-b border-orange-50">
                <div className="p-2 rounded-xl bg-orange-50 text-orange-700 border border-orange-200">
                  <AlertOctagon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                    <span>FRAQUEZAS</span>
                    <span className="text-xs font-normal text-orange-700">(Weaknesses)</span>
                  </h3>
                  <p className="text-xs text-slate-500">Gargalos a superar</p>
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5 shrink-0" />
                  <span><strong>Estrutura Tradicional:</strong> Setores isolados sem fluxo contínuo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5 shrink-0" />
                  <span><strong>Comunicação Entre Setores:</strong> Ruídos entre design, fábrica e vendas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5 shrink-0" />
                  <span><strong>Processos Parcialmente Manuais:</strong> Limitações no ganho de escala.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1.5 shrink-0" />
                  <span><strong>Tomada de Decisão:</strong> Respostas lentas às oscilações do mercado.</span>
                </li>
              </ul>
            </div>

            <div className="mt-3 pt-2 text-[11px] font-semibold text-orange-900 bg-orange-50/60 p-2 rounded-lg">
              Correção: Automatizar gargalos e instituir reuniões semanais de integração.
            </div>
          </motion.div>

          {/* Quadrante 3: OPORTUNIDADES */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.16 }}
            className="bg-white rounded-2xl p-5 border-2 border-blue-100 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-blue-300 transition-colors"
          >
            <div className="absolute top-0 right-0 px-3 py-1 bg-blue-100 text-blue-900 text-[10px] font-bold rounded-bl-xl uppercase tracking-wider">
              Externo · Favorável
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3 pb-2 border-b border-blue-50">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                    <span>OPORTUNIDADES</span>
                    <span className="text-xs font-normal text-blue-700">(Opportunities)</span>
                  </h3>
                  <p className="text-xs text-slate-500">Caminhos de crescimento</p>
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span><strong>Comércio Eletrônico:</strong> Loja virtual própria direta ao consumidor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span><strong>Marketing Digital:</strong> Fortalecimento em redes e parcerias com criadores.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span><strong>Inovação em Modelos:</strong> Calçados híbridos focados em conforto e estilo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span><strong>Sustentabilidade:</strong> Utilização de insumos reciclados e ecológicos.</span>
                </li>
              </ul>
            </div>

            <div className="mt-3 pt-2 text-[11px] font-semibold text-blue-900 bg-blue-50/60 p-2 rounded-lg">
              Expansão: Lançar e-commerce e nova linha sustentável para capturar margem.
            </div>
          </motion.div>

          {/* Quadrante 4: AMEAÇAS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.24 }}
            className="bg-white rounded-2xl p-5 border-2 border-rose-100 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-rose-300 transition-colors"
          >
            <div className="absolute top-0 right-0 px-3 py-1 bg-rose-100 text-rose-900 text-[10px] font-bold rounded-bl-xl uppercase tracking-wider">
              Externo · Risco
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3 pb-2 border-b border-rose-50">
                <div className="p-2 rounded-xl bg-rose-50 text-rose-700 border border-rose-200">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                    <span>AMEAÇAS</span>
                    <span className="text-xs font-normal text-rose-700">(Threats)</span>
                  </h3>
                  <p className="text-xs text-slate-500">Perigos a mitigar</p>
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                  <span><strong>Concorrência Agressiva:</strong> Marcas massificadas e importados baratos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                  <span><strong>Oscilações Econômicas:</strong> Queda de poder de compra e crédito restrito.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                  <span><strong>Pressão Sobre Preços:</strong> Dificuldade para repassar alta de insumos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                  <span><strong>Tendências Efêmeras:</strong> Risco de obsolescência rápida de coleções.</span>
                </li>
              </ul>
            </div>

            <div className="mt-3 pt-2 text-[11px] font-semibold text-rose-950 bg-rose-50/60 p-2 rounded-lg">
              Mitigação: Diferenciação pela qualidade e controle fino do estoque de fábrica.
            </div>
          </motion.div>
        </div>

        {/* Synthesis statement */}
        <div className="bg-slate-900 text-white px-5 py-2.5 rounded-xl flex items-center justify-between text-xs">
          <span><strong>Conclusão da Matriz:</strong> As Forças da ABC Calçados são ideais para capturar as Oportunidades digitais, desde que as Fraquezas internas sejam saneadas.</span>
          <span className="hidden sm:inline text-orange-400 font-bold shrink-0">Estratégia Integrada</span>
        </div>
      </div>
    </SlideWrapper>
  );
}
