export interface SlideData {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  speakerNotes?: string;
}

export const SLIDES_META: SlideData[] = [
  {
    id: 0,
    slug: 'inicio',
    title: 'ESTUDO DE CASO',
    subtitle: 'Empresa ABC Calçados S.A.',
    category: 'Capa Inicial',
    speakerNotes: 'Abertura da apresentação. Cumprimentar o professor e a turma antes de iniciar o estudo de caso.'
  },
  {
    id: 1,
    slug: 'apresentacao-grupo',
    title: 'Estudo de Caso: Empresa ABC Calçados S.A.',
    subtitle: 'Apresentação da Equipe & Disciplina',
    category: 'Apresentação do Grupo',
    speakerNotes: 'Apresentar cada integrante do grupo e introduzir a disciplina de Administração.'
  },
  {
    id: 2,
    slug: 'conhecendo-a-empresa',
    title: 'Conhecendo a ABC Calçados',
    subtitle: 'Tradição industrial e novos desafios de mercado',
    category: 'Contextualização',
    speakerNotes: 'Explicar a história de 20 anos da empresa, porte médio e como o mercado mudou nos últimos anos.'
  },
  {
    id: 3,
    slug: 'principais-desafios',
    title: 'O que está acontecendo com a empresa?',
    subtitle: 'Fatores críticos que pressionam o modelo atual',
    category: 'Diagnóstico',
    speakerNotes: 'Destacar os 5 gargalos: mudanças no consumidor, concorrência agressiva, margens apertadas e lentidão produtiva.'
  },
  {
    id: 4,
    slug: 'ambiente-interno',
    title: 'Análise do Ambiente Interno',
    subtitle: 'Avaliação dos recursos, cultura e capacidade fabril',
    category: 'Análise Interna',
    speakerNotes: 'Detalhar os 4 pilares: Cultura, Estrutura tradicional em departamentos, Recursos Humanos e Instalações.'
  },
  {
    id: 5,
    slug: 'forcas-e-fraquezas',
    title: 'O que a empresa tem de bom e o que precisa melhorar?',
    subtitle: 'Quadro comparativo dos fatores sob controle da empresa',
    category: 'Diagnóstico Interno',
    speakerNotes: 'Contrastar os pontos fortes consolidados com as fraquezas organizacionais que exigem atenção urgente.'
  },
  {
    id: 6,
    slug: 'ambiente-externo',
    title: 'O que acontece fora da empresa?',
    subtitle: 'Forças de mercado, economia e comportamento de compra',
    category: 'Análise Externa',
    speakerNotes: 'Abordar os fatores incontroláveis externos: cenário econômico, pressão de concorrentes globais e tecnologia digital.'
  },
  {
    id: 7,
    slug: 'oportunidades-e-ameacas',
    title: 'Oportunidades e ameaças do mercado',
    subtitle: 'Diferenciação clara entre tendências favoráveis e riscos externos',
    category: 'Diagnóstico Externo',
    speakerNotes: 'Ressaltar o conceito de oportunidades (como e-commerce e sustentabilidade) e ameaças (produtos importados baratos).'
  },
  {
    id: 8,
    slug: 'matriz-swot',
    title: 'Visão estratégica da ABC Calçados',
    subtitle: 'Matriz SWOT completa em 4 quadrantes integrados',
    category: 'Síntese Estratégica',
    speakerNotes: 'Apresentar a matriz SWOT consolidada, conectando o diagnóstico interno ao ambiente externo.'
  },
  {
    id: 9,
    slug: 'estrategias-melhoria',
    title: 'Como a empresa pode evoluir?',
    subtitle: '5 pilares práticos e realistas para transformar o cenário',
    category: 'Proposta Estratégica',
    speakerNotes: 'Apresentar as 5 soluções propostas: modernização fabril, integração entre equipes, novos produtos, marketing e custos.'
  },
  {
    id: 10,
    slug: 'plano-de-acao',
    title: 'Da análise à prática',
    subtitle: 'Matriz executiva de implementação com metas claras',
    category: 'Plano de Ação',
    speakerNotes: 'Explicar a tabela 5W/Plano: cada ação conectada ao seu objetivo e ao resultado tangível que a empresa irá colher.'
  },
  {
    id: 11,
    slug: 'resultados-esperados',
    title: 'O que pode mudar com essas estratégias?',
    subtitle: 'Projeções de valor e evolução organizacional pretendida',
    category: 'Resultados Esperados',
    speakerNotes: 'Reforçar que são resultados esperados e concluir com a frase de inovar preservando a tradição.'
  },
  {
    id: 12,
    slug: 'conclusao',
    title: 'Conclusão',
    subtitle: 'Síntese executiva do estudo de caso administrativo',
    category: 'Conclusão',
    speakerNotes: 'Fazer o fechamento do raciocínio: a ABC Calçados tem grande potencial se unir sua experiência à inovação moderna.'
  },
  {
    id: 13,
    slug: 'encerramento',
    title: 'Obrigado pela atenção!',
    subtitle: 'Alguma pergunta? Espaço aberto para dúvidas da turma e do professor',
    category: 'Encerramento',
    speakerNotes: 'Agradecer a todos, abrir para perguntas e parabenizar a equipe.'
  }
];
