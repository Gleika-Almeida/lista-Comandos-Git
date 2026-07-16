"use strict"
/*
* Base de dados da documentação interativa.

*Campos utilizados:
*id             Indetificador único do comando
*title          Nome apresentado no cartão
*command        Sintaxe principal
*description    Explicação do comando
*category       Categoria usada pelos filtros
*level          Nível de conhecimento
*example        Exemplo prático
*Keywords       Termos utilizados pela pesquisa
*dangerous      Indica se exige atenção especial
*warning        Alerta opcional.
*/

window.gitCommands = [
  {
    id: "git-version",
    title: "Verificar a versão do Git",
    command: "git --version",
    description:
      "Mostra a versão do Git instalada no computador.",
    category: "configuracao",
    level: "basico",
    example: "git --version",
    keywords: [
      "versão",
      "instalação",
      "verificar",
      "git",
    ],
    dangerous: false,
  },

   {
    id: "config-user-name",
    title: "Configurar o nome do usuário",
    command: 'git config --global user.name "Seu Nome"',
    description:
      "Define o nome que será registrado como autor dos commits.",
    category: "configuracao",
    level: "basico",
    example:
      'git config --global user.name "Gleika Almeida"',
    keywords: [
      "configuração",
      "nome",
      "usuário",
      "autor",
      "global",
    ],
    dangerous: false,
  },

  {
    id: "config-user-email",
    title: "Configurar o e-mail do usuário",
    command:
      'git config --global user.email "seu@email.com"',
    description:
      "Define o e-mail associado aos commits realizados no computador.",
    category: "configuracao",
    level: "basico",
    example:
      'git config --global user.email "gleica.oficial@gmail.com"',
    keywords: [
      "configuração",
      "email",
      "e-mail",
      "usuário",
      "github",
    ],
    dangerous: false,
  },

  {
    id: "config-list",
    title: "Listar as configurações",
    command: "git config --list",
    description:
      "Mostra as configurações do Git disponíveis no ambiente atual.",
    category: "configuracao",
    level: "basico",
    example: "git config --list",
    keywords: [
      "configuração",
      "lista",
      "usuário",
      "email",
      "ambiente",
    ],
    dangerous: false,
  },

 {
    id: "git-init",
    title: "Inicializar um repositório",
    command: "git init",
    description:
      "Cria um novo repositório Git dentro da pasta atual.",
    category: "alteracoes",
    level: "basico",
    example: "git init",
    keywords: [
      "iniciar",
      "inicializar",
      "repositório",
      "projeto",
      "pasta",
    ],
    dangerous: false,
  }, 

  {
    id: "git-status",
    title: "Verificar o estado do repositório",
    command: "git status",
    description:
      "Mostra arquivos modificados, preparados, não rastreados e o estado da branch.",
    category: "alteracoes",
    level: "basico",
    example: "git status",
    keywords: [
      "estado",
      "status",
      "arquivos",
      "alterações",
      "branch",
    ],
    dangerous: false,
  },

  {
    id: "git-add-file",
    title: "Adicionar um arquivo",
    command: "git add <nome-do-arquivo>",
    description:
      "Adiciona um arquivo específico à área de preparação.",
    category: "alteracoes",
    level: "basico",
    example: "git add README.md",
    keywords: [
      "adicionar",
      "arquivo",
      "staging",
      "preparação",
      "mudança",
    ],
    dangerous: false,
  },

  {
    id: "git-add-all",
    title: "Adicionar todas as alterações",
    command: "git add .",
    description:
      "Adiciona à área de preparação todas as alterações da pasta atual.",
    category: "alteracoes",
    level: "basico",
    example: "git add .",
    keywords: [
      "adicionar",
      "todos",
      "arquivos",
      "staging",
      "preparação",
    ],
    dangerous: false,
  },

  {
    id: "git-commit",
    title: "Criar um commit",
    command: 'git commit -m "mensagem"',
    description:
      "Registra na linha do tempo do projeto as alterações que estão preparadas.",
    category: "alteracoes",
    level: "basico",
    example:
      'git commit -m "feat: adiciona campo de pesquisa"',
    keywords: [
      "commit",
      "registrar",
      "mensagem",
      "histórico",
      "alterações",
    ],
    dangerous: false,
  },

  {
    id: "git-commit-amend",
    title: "Alterar o último commit",
    command: 'git commit --amend -m "nova mensagem"',
    description:
      "Substitui o commit mais recente, permitindo corrigir sua mensagem ou incluir arquivos esquecidos.",
    category: "alteracoes",
    level: "intermediario",
    example:
      'git commit --amend -m "docs: atualiza exemplos do guia"',
    keywords: [
      "commit",
      "amend",
      "corrigir",
      "mensagem",
      "último",
    ],
    dangerous: true,
    warning:
      "Evite alterar um commit que já foi compartilhado com outras pessoas.",
  },

   {
    id: "git-stash-push",
    title: "Guardar alterações temporariamente",
    command: 'git stash push -m "descrição"',
    description:
      "Guarda alterações ainda não concluídas para permitir a troca de contexto ou branch.",
    category: "alteracoes",
    level: "intermediario",
    example:
      'git stash push -m "formulário em desenvolvimento"',
    keywords: [
      "stash",
      "guardar",
      "temporário",
      "alterações",
      "branch",
    ],
    dangerous: false,
  },

   {
    id: "git-branch-list",
    title: "Listar branches",
    command: "git branch",
    description:
      "Mostra as branches locais e indica qual está ativa.",
    category: "branches",
    level: "basico",
    example: "git branch",
    keywords: [
      "branch",
      "branches",
      "listar",
      "ramificação",
      "local",
    ],
    dangerous: false,
  },

  {
    id: "git-switch-create",
    title: "Criar e acessar uma branch",
    command: "git switch -c <nome-da-branch>",
    description:
      "Cria uma nova branch e muda imediatamente para ela.",
    category: "branches",
    level: "basico",
    example:
      "git switch -c feature/documentacao-interativa",
    keywords: [
      "branch",
      "criar",
      "switch",
      "feature",
      "ramificação",
    ],
    dangerous: false,
  },

{
    id: "git-switch",
    title: "Trocar de branch",
    command: "git switch <nome-da-branch>",
    description:
      "Muda da branch atual para outra branch existente.",
    category: "branches",
    level: "basico",
    example: "git switch main",
    keywords: [
      "branch",
      "trocar",
      "switch",
      "mudar",
      "main",
    ],
    dangerous: false,
  },

  {
    id: "git-merge",
    title: "Integrar uma branch",
    command: "git merge <nome-da-branch>",
    description:
      "Integra os commits de outra branch à branch atual.",
    category: "branches",
    level: "intermediario",
    example:
      "git merge feature/documentacao-interativa",
    keywords: [
      "branch",
      "merge",
      "integrar",
      "mesclar",
      "commits",
    ],
    dangerous: false,
  },

  {
    id: "git-branch-delete",
    title: "Excluir uma branch integrada",
    command: "git branch -d <nome-da-branch>",
    description:
      "Exclui uma branch local que já foi integrada com segurança.",
    category: "branches",
    level: "intermediario",
    example:
      "git branch -d feature/documentacao-interativa",
    keywords: [
      "branch",
      "excluir",
      "deletar",
      "remover",
      "integrada",
    ],
    dangerous: false,
  },

  {
    id: "git-branch-force-delete",
    title: "Forçar a exclusão de uma branch",
    command: "git branch -D <nome-da-branch>",
    description:
      "Exclui uma branch local mesmo que ela possua commits ainda não integrados.",
    category: "branches",
    level: "avancado",
    example: "git branch -D feature/teste",
    keywords: [
      "branch",
      "forçar",
      "excluir",
      "deletar",
      "perder",
    ],
    dangerous: true,
    warning:
      "Commits exclusivos da branch poderão deixar de ser facilmente acessíveis.",
  },

  {
    id: "git-clone",
    title: "Clonar um repositório",
    command: "git clone <url-do-repositorio>",
    description:
      "Cria uma cópia local de um repositório remoto.",
    category: "remotos",
    level: "basico",
    example:
      "git clone https://github.com/usuario/projeto.git",
    keywords: [
      "clone",
      "clonar",
      "baixar",
      "github",
      "repositório",
    ],
    dangerous: false,
  },

  {
    id: "git-remote-list",
    title: "Listar repositórios remotos",
    command: "git remote -v",
    description:
      "Mostra os nomes e endereços dos repositórios remotos configurados.",
    category: "remotos",
    level: "basico",
    example: "git remote -v",
    keywords: [
      "remote",
      "remoto",
      "origin",
      "url",
      "github",
    ],
    dangerous: false,
  },

  {
    id: "git-remote-add",
    title: "Adicionar um repositório remoto",
    command: "git remote add origin <url>",
    description:
      "Conecta o repositório local a um repositório remoto chamado origin.",
    category: "remotos",
    level: "basico",
    example:
      "git remote add origin https://github.com/usuario/projeto.git",
    keywords: [
      "remote",
      "origin",
      "adicionar",
      "github",
      "conectar",
    ],
    dangerous: false,
  },

 {
    id: "git-fetch",
    title: "Buscar referências remotas",
    command: "git fetch",
    description:
      "Baixa informações do repositório remoto sem integrar automaticamente as alterações.",
    category: "remotos",
    level: "intermediario",
    example: "git fetch origin",
    keywords: [
      "fetch",
      "buscar",
      "remoto",
      "atualizar",
      "referências",
    ],
    dangerous: false,
  }, 

  {
    id: "git-pull",
    title: "Receber e integrar alterações",
    command: "git pull",
    description:
      "Busca alterações do repositório remoto e as integra à branch atual.",
    category: "remotos",
    level: "basico",
    example: "git pull origin main",
    keywords: [
      "pull",
      "baixar",
      "receber",
      "atualizar",
      "remoto",
    ],
    dangerous: false,
  },

  {
    id: "git-push-upstream",
    title: "Enviar uma nova branch",
    command: "git push -u origin <nome-da-branch>",
    description:
      "Envia a branch local ao repositório remoto e configura seu rastreamento.",
    category: "remotos",
    level: "basico",
    example:
      "git push -u origin feature/documentacao-interativa",
    keywords: [
      "push",
      "enviar",
      "branch",
      "origin",
      "upstream",
    ],
    dangerous: false,
  },

  {
    id: "git-log-graph",
    title: "Visualizar o histórico resumido",
    command: "git log --oneline --graph --all",
    description:
      "Mostra o histórico de commits de forma resumida e com representação das branches.",
    category: "historico",
    level: "intermediario",
    example: "git log --oneline --graph --all",
    keywords: [
      "log",
      "histórico",
      "commits",
      "gráfico",
      "branches",
    ],
    dangerous: false,
  },

  {
    id: "git-diff",
    title: "Comparar alterações",
    command: "git diff",
    description:
      "Mostra as diferenças entre os arquivos modificados e a última versão registrada.",
    category: "historico",
    level: "basico",
    example: "git diff",
    keywords: [
      "diff",
      "diferença",
      "comparar",
      "alterações",
      "arquivo",
    ],
    dangerous: false,
  },

  {
    id: "git-show",
    title: "Examinar um commit",
    command: "git show <hash-do-commit>",
    description:
      "Exibe informações e alterações relacionadas a um commit específico.",
    category: "historico",
    level: "intermediario",
    example: "git show a1b2c3d",
    keywords: [
      "show",
      "commit",
      "hash",
      "detalhes",
      "histórico",
    ],
    dangerous: false,
  },

  {
    id: "git-restore",
    title: "Descartar alterações de um arquivo",
    command: "git restore <nome-do-arquivo>",
    description:
      "Restaura um arquivo para sua última versão registrada.",
    category: "desfazer",
    level: "intermediario",
    example: "git restore index.html",
    keywords: [
      "restore",
      "restaurar",
      "desfazer",
      "arquivo",
      "alterações",
    ],
    dangerous: true,
    warning:
      "Alterações locais ainda não registradas nesse arquivo serão descartadas.",
  },

   {
    id: "git-restore-staged",
    title: "Retirar um arquivo da preparação",
    command: "git restore --staged <nome-do-arquivo>",
    description:
      "Remove o arquivo da área de preparação sem apagar suas alterações locais.",
    category: "desfazer",
    level: "intermediario",
    example: "git restore --staged README.md",
    keywords: [
      "restore",
      "staged",
      "preparação",
      "desfazer",
      "arquivo",
    ],
    dangerous: false,
  },

   {
    id: "git-revert",
    title: "Reverter um commit com segurança",
    command: "git revert <hash-do-commit>",
    description:
      "Cria um novo commit que desfaz as alterações introduzidas por outro commit.",
    category: "desfazer",
    level: "intermediario",
    example: "git revert a1b2c3d",
    keywords: [
      "revert",
      "reverter",
      "desfazer",
      "commit",
      "seguro",
    ],
    dangerous: false,
  },

  {
    id: "git-reset-hard",
    title: "Redefinir completamente o repositório",
    command: "git reset --hard HEAD~1",
    description:
      "Move a branch para o commit anterior e descarta alterações do índice e do diretório de trabalho.",
    category: "desfazer",
    level: "avancado",
    example: "git reset --hard HEAD~1",
    keywords: [
      "reset",
      "hard",
      "desfazer",
      "apagar",
      "commit",
    ],
    dangerous: true,
    warning:
      "Este comando pode apagar alterações locais. Confirme o estado do repositório antes de executá-lo.",
  },

  {
    id: "git-reflog",
    title: "Consultar o histórico de referências",
    command: "git reflog",
    description:
      "Mostra movimentações recentes do HEAD e pode ajudar a localizar commits perdidos.",
    category: "desfazer",
    level: "avancado",
    example: "git reflog",
    keywords: [
      "reflog",
      "recuperar",
      "commit",
      "head",
      "histórico",
    ],
    dangerous: false,
  },
];