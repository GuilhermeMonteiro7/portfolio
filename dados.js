// ============================================================
//  EDITE AQUI — todo o conteúdo do portfólio fica neste arquivo.
//  A página (index.html) lê estes dados e monta tudo sozinha.
// ============================================================

const PERFIL = {
  nome: "Guilherme Monteiro",
  cargo: "Estagiário em Análise de Dados",
  empresa: "Expert Ocupacional",
  area: "Gestão e Tecnologia",
  frase: "Transformo dados operacionais em painéis que a diretoria, as equipes internas e os clientes usam para decidir.",
  resumo:
    "Ao longo do estágio, construí e reestruturei dashboards em Power BI para cinco frentes da empresa — de painéis de gestão interna a produtos apresentados diretamente aos clientes —, além de documentar e governar bases herdadas que antes dependiam de uma única pessoa.",
  linkedin: "", // ex.: "https://www.linkedin.com/in/seu-perfil"
  email: "",    // ex.: "guilherme@empresa.com.br"
  ferramentas: ["Power BI", "DAX", "Power Query", "Python", "Excel", "Data Storytelling", "UX/UI de dashboards", "Governança de dados"],
};

// Números do topo (animados ao aparecer na tela).
const DESTAQUES = [
  { valor: 7, rotulo: "dashboards Power BI", nota: "6 entregues · 1 em andamento" },
  { valor: 3, rotulo: "entregas a clientes", nota: "NR-01, Conciliação e e-Social" },
  { valor: 269971, rotulo: "linhas governadas", nota: "base de Procurement documentada" },
  { valor: 5, rotulo: "áreas apoiadas", nota: "da operação à diretoria" },
];

// Categorias usadas no filtro.
const CATEGORIAS = {
  interno: "Gestão interna",
  cliente: "Entrega a clientes",
  governanca: "Governança de dados",
};

// Uma entrada por entrega.
//  - dashboard: link público do Power BI ("" se não houver)
//  - relatorio: PDF dentro de "relatorios/" ("" se ainda não houver)
//  - comparativo: { antes, depois, legenda } para o slider antes/depois (opcional)
const PROJETOS = [
  {
    titulo: "Projetos e Chamados de T.I.",
    area: "Gestão e Tecnologia",
    categoria: "interno",
    status: "Entregue",
    contexto:
      "A área não tinha uma visão consolidada do volume de chamados de suporte nem de como os projetos estavam distribuídos ao longo do ano.",
    fiz: [
      "Painel que quantifica chamados e projetos e compara cada período com o anterior.",
      "Recortes por setor solicitante, status de conclusão e motivador do projeto.",
    ],
    impacto: [
      "Volume de chamados medido e comparado com o período anterior — a tendência de demanda deixou de ser percepção e passou a ser número.",
      "Ficou claro quais setores mais demandam suporte, base para priorizar atendimento e orientar usuários.",
      "Taxa de conclusão dos chamados acompanhada continuamente.",
      "Planejamento anual de projetos visível por motivador, apoiando a priorização da carteira.",
    ],
    tags: ["Power BI", "DAX", "Comparativo de períodos"],
    dashboard: "https://app.powerbi.com/view?r=eyJrIjoiZmY1OGVjZDQtYjg5OS00NmY1LTlhN2MtMWZmNzcxNjcwN2I4IiwidCI6IjQ1ZWMxZTFmLWJiNWMtNDMyYi05NmQ1LTY3NzIxMGE1MGM3YSJ9&pageName=68cbe44a41988bfc2e97",
    relatorio: "",
  },
  {
    titulo: "Fatos Ocorridos — Risco de Churn",
    area: "Relacionamento e Diretoria",
    categoria: "interno",
    status: "Entregue",
    contexto:
      "Ocorrências com clientes ficavam dispersas, o que dificultava enxergar padrões e agir antes de um cancelamento.",
    fiz: [
      "Dashboard que centraliza os fatos ocorridos e evidencia os problemas recorrentes por cliente.",
    ],
    impacto: [
      "Diretoria e Relacionamento passaram a identificar os problemas que geram risco de churn com base em dados.",
      "Permite agir de forma preventiva na retenção, priorizando os clientes com mais ocorrências.",
    ],
    tags: ["Power BI", "Retenção", "Visão executiva"],
    dashboard: "https://app.powerbi.com/view?r=eyJrIjoiYTFiNjY1N2MtYTFiNC00NmQ1LWE2NDctYTZhZTVhNDcwNWRkIiwidCI6IjQ1ZWMxZTFmLWJiNWMtNDMyYi05NmQ1LTY3NzIxMGE1MGM3YSJ9",
    relatorio: "",
  },
  {
    titulo: "Pesquisa NR-01 — Riscos Psicossociais",
    area: "Produto · Clientes",
    categoria: "cliente",
    status: "Entregue",
    contexto:
      "A pesquisa de riscos psicossociais (NR-01) é um produto vendido pela empresa. O resultado precisava chegar ao cliente de forma clara e apresentável.",
    fiz: [
      "Painel interativo com o desempenho da empresa cliente no questionário, volumetria de respostas e médias por pergunta.",
      "Apresento o painel ao cliente em reunião, conduzindo a leitura dos resultados.",
    ],
    impacto: [
      "O resultado da pesquisa virou uma entrega visual e interativa, agregando valor ao produto vendido.",
      "O cliente explora os próprios dados durante a reunião, o que torna a conversa sobre o plano de ação mais objetiva.",
      "Desenvolvi também a comunicação com cliente: tradução de dados técnicos para a linguagem do negócio.",
    ],
    tags: ["Power BI", "Apresentação a clientes", "NR-01"],
    dashboard: "https://app.powerbi.com/view?r=eyJrIjoiODU2NWNmNjgtYjcxYi00NzI2LTljNTUtZTVhMTU2NDE3NTNlIiwidCI6IjQ1ZWMxZTFmLWJiNWMtNDMyYi05NmQ1LTY3NzIxMGE1MGM3YSJ9&pageName=ae014d8310100537051c",
    relatorio: "",
  },
  {
    titulo: "Conciliação de Afastados — Rebrand",
    area: "Produto · Clientes",
    categoria: "cliente",
    status: "Entregue · Set/2026",
    contexto:
      "O B.I. de Conciliação é entregue ao cliente, mas tinha um visual datado e o recebimento das informações de entrada não era padronizado.",
    fiz: [
      "Alinhamento técnico sobre arquitetura de dados e diretrizes internas; mapeamento dos requisitos do processo.",
      "Planilha Padrão parametrizada e com proteção de dados para o time que se comunica com o INSS.",
      "Redesign completo do dashboard, com foco em legibilidade e data storytelling.",
    ],
    impacto: [
      "Entrada de dados padronizada e protegida: mais segurança, integridade e eficiência na rotina com o INSS.",
      "Interface mais legível e moderna, elevando o valor percebido da entrega ao cliente.",
      "Novo padrão visual validado e elogiado pela equipe.",
    ],
    tags: ["Power BI", "UX/UI", "Excel", "Data Storytelling"],
    dashboard: "https://app.powerbi.com/view?r=eyJrIjoiYmFhMDNiMDMtMjNjNy00NzFmLTg1YzItYzdmMzlmMjg4YjYxIiwidCI6IjQ1ZWMxZTFmLWJiNWMtNDMyYi05NmQ1LTY3NzIxMGE1MGM3YSJ9&pageName=c45532ae6ac1cca33201",
    relatorio: "relatorios/bi-conciliacao.pdf",
    comparativo: {
      antes: "img/conciliacao-antes.webp",
      depois: "img/conciliacao-depois.webp",
      legenda: "Arraste para comparar o layout antes e depois do redesign.",
    },
  },
  {
    titulo: "Custo Médio de Exames — Procurement",
    area: "Gestão e Tecnologia · Compras",
    categoria: "governanca",
    status: "Atualizado · dados até 31/08/2026",
    contexto:
      "B.I. herdado de um ex-colaborador, sem documentação. Ninguém sabia ao certo de onde vinham os dados nem quais regras eram aplicadas.",
    fiz: [
      "Investigação da origem dos dados junto às áreas envolvidas e engenharia reversa do relatório.",
      "Pipeline em Python: exames com valor zero descartados (evita diluir ticket médio e mediana), região e cidade preenchidas automaticamente e novo campo de sequencial da ficha.",
      "Carga incremental (append) preservando todo o histórico, e documentação completa de fontes e regras.",
    ],
    impacto: [
      "Conhecimento que estava em uma só pessoa virou processo documentado e repetível.",
      "Indicadores de custo médio mais fiéis ao custo real, sem distorção por exames não faturados.",
      "Série histórica estendida de maio para agosto/2026 sem perder nenhum registro legado.",
    ],
    numeros: [
      { valor: "253.334", rotulo: "linhas históricas preservadas" },
      { valor: "+16.637", rotulo: "novos registros válidos" },
      { valor: "269.971", rotulo: "linhas na base consolidada" },
    ],
    tags: ["Python", "Power BI", "Documentação", "Engenharia reversa"],
    dashboard: "https://app.powerbi.com/view?r=eyJrIjoiOTI1NmQyODctZmI5OC00MzE4LWE3MWUtNDEwOGNmYjQxMTQyIiwidCI6IjQ1ZWMxZTFmLWJiNWMtNDMyYi05NmQ1LTY3NzIxMGE1MGM3YSJ9",
    relatorio: "relatorios/bi-procurement.pdf",
    comparativo: {
      antes: "img/procurement-antes.webp",
      depois: "img/procurement-depois.webp",
      legenda: "Arraste para comparar: série de jan–mai (antes) e jan–ago (depois da atualização).",
    },
  },
  {
    titulo: "Acompanhamento e-Social",
    area: "Clientes · CEVA",
    categoria: "cliente",
    status: "Entregue",
    contexto:
      "O cliente CEVA precisava acompanhar quantos colaboradores já tinham eventos do e-Social concluídos.",
    fiz: ["Painel de volumetria dos colaboradores com evento e-Social concluído."],
    impacto: [
      "Transparência para o cliente sobre o andamento das obrigações do e-Social.",
      "Acompanhamento do volume concluído sem depender de consultas manuais.",
    ],
    tags: ["Power BI", "e-Social"],
    dashboard: "https://app.powerbi.com/view?r=eyJrIjoiOTJkNDFhNmYtODRlNS00MWRjLTg0NDItMjU3ODA0MDAzMDkzIiwidCI6IjQ1ZWMxZTFmLWJiNWMtNDMyYi05NmQ1LTY3NzIxMGE1MGM3YSJ9&pageName=82a845088178be3bb1ed",
    relatorio: "",
  },
  {
    titulo: "Dashboard de RH — Headcount",
    area: "Recursos Humanos",
    categoria: "interno",
    status: "Em andamento",
    contexto:
      "O RH precisa de uma visão única do quadro de funcionários e, na próxima etapa, do custo por setor.",
    fiz: [
      "Páginas de headcount dos funcionários ativos concluídas.",
      "Próximo passo: páginas de custo por setor, após alinhar a fonte e a forma de coleta desses dados.",
    ],
    impacto: [
      "Headcount ativo disponível em um só lugar.",
      "Quando concluído, permitirá enxergar quanto a empresa investe em cada setor.",
    ],
    tags: ["Power BI", "People Analytics"],
    dashboard: "https://app.powerbi.com/view?r=eyJrIjoiOGJkYzAxODQtNmViMy00ZWIxLTllNTctZTFiMjBlMDQ0NGM3IiwidCI6IjQ1ZWMxZTFmLWJiNWMtNDMyYi05NmQ1LTY3NzIxMGE1MGM3YSJ9&pageName=aaaf145a56401073dd07",
    relatorio: "",
  },
];

// Atividades de apoio (sem dashboard próprio).
const SUPORTE = [
  {
    titulo: "Sustentação de B.I.s geridos pela Smart",
    texto:
      "Ajudei a equipe de Relacionamento a diagnosticar por que o B.I. de Absenteísmo não estava sendo atualizado.",
  },
  {
    titulo: "Suporte técnico de T.I.",
    itens: [
      "Suporte a equipamentos com defeito e registro de mau uso.",
      "Identificação do defeito em cada equipamento, agilizando a troca pela equipe de T.I.",
      "Conexão de computadores à rede para acesso às impressoras.",
    ],
  },
];

// Como eu trabalho (etapas mostradas na seção "Método").
const METODO = [
  { titulo: "Entender", texto: "Levantar a demanda, o público e a decisão que o painel precisa apoiar." },
  { titulo: "Tratar", texto: "Investigar a origem dos dados, aplicar regras de negócio e automatizar com Python." },
  { titulo: "Construir", texto: "Modelar, criar medidas em DAX e desenhar um layout que conta a história dos dados." },
  { titulo: "Entregar", texto: "Apresentar a quem decide e documentar para que o trabalho continue sem mim." },
];
