<div align="center">
<img  height="150" width="150" alt="GIt" src="https://github.com/Gleika-Almeida/Gleika-Almeida/assets/109559491/481990e1-bb5a-4084-a6a0-1e83e2233c10"/>
</div>
<br>
<br>
<div align="center">
</div>

# Git Guia — Documentação Interativa

Documentação interativa de comandos Git em português, desenvolvida para facilitar o aprendizado, a prática e a consulta durante projetos de software.

O projeto reúne comandos, exemplos práticos, filtros, pesquisa, exercícios interativos, solução de problemas e um fluxo de trabalho semelhante ao utilizado em ambientes profissionais.

### 🔗 [Git Guia](https://gleika-almeida.github.io/lista-Comandos-Git/)


## Objetivo

 É ajudar estudantes e pessoas desenvolvedoras a:

- consultar comandos rapidamente;
- compreender a finalidade de cada comando;
- conhecer fluxos profissionais de versionamento;
- identificar operações potencialmente destrutivas;
- solucionar erros frequentes;
- praticar Git por meio de exercícios;
- desenvolver maior segurança ao trabalhar com repositórios.

## Funcionalidades

- Catálogo de comandos Git;
- pesquisa por título, comando, descrição ou palavra-chave;
- filtros por categoria;
- filtros por nível de conhecimento;
- cartões de consulta rápida;
- botão para copiar comandos;
- exemplos práticos;
- alertas para comandos destrutivos;
- modo claro e escuro;
- preferência de tema salva no navegador;
- fluxo profissional de trabalho com Git;
- guia de erros comuns;
- exercícios interativos;
- acompanhamento do progresso dos exercícios;
- progresso salvo no navegador;
- página 404 personalizada;
- layout responsivo;
- navegação por teclado;
- suporte à redução de movimento;
- estilos específicos para impressão.

## Páginas disponíveis

| Página | Conteúdo |
|---|---|
| Página inicial | Pesquisa, filtros e catálogo de comandos |
| Fluxo profissional | Branches, commits, push, merge e Pull Request |
| Erros comuns | Diagnóstico e solução de problemas frequentes |
| Exercícios | Desafios básicos, intermediários e avançados |
| Página 404 | Página personalizada para endereços inexistentes |
| Referência original | Conteúdo textual que deu origem ao projeto |

## Tecnologias utilizadas

- HTML5 semântico;
- CSS3;
- JavaScript ES6+;
- Web Storage API;
- Git;

O projeto foi desenvolvido com tecnologias nativas da web, sem frameworks ou bibliotecas externas.

## Executando localmente

### 1. Clone o repositório

```bash
git clone https://github.com/Gleika-Almeida/lista-Comandos-Git.git
```

### 2. Entre na pasta do projeto

```bash
cd lista-Comandos-Git
```

### 3. Inicie um servidor local

Utilizando Python 3:

```bash
python3 -m http.server 5500 --directory docs
```

### 4. Acesse no navegador

```text
http://localhost:5500
```

Para encerrar o servidor, pressione:

```text
Ctrl + C
```

## Catálogo de comandos

Os comandos exibidos na página inicial estão armazenados em:

```text
docs/assets/js/commands.js
```

Cada comando é representado por um objeto JavaScript:

```javascript
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
    "status",
    "arquivos",
    "alterações",
    "branch",
  ],
  dangerous: false,
}
```

### Comandos que exigem atenção

Quando uma operação puder apagar alterações ou modificar o histórico, o objeto recebe um alerta:

```javascript
{
  dangerous: true,
  warning:
    "Alterações locais ainda não registradas poderão ser perdidas.",
}
```

Esses comandos são apresentados com uma identificação visual de segurança.

## Categorias disponíveis

```text
configuracao
alteracoes
branches
remotos
historico
desfazer
```

As categorias organizam os comandos de acordo com sua finalidade.

## Níveis de aprendizado

```text
basico
intermediario
avancado
```

Os níveis ajudam a apresentar os comandos de forma progressiva.

## Pesquisa e filtros

A página inicial permite pesquisar utilizando:

- nome do comando;
- finalidade;
- descrição;
- exemplo;
- categoria;
- nível;
- palavras-chave relacionadas.

Também é possível combinar o campo de pesquisa com os filtros de categoria e nível.

## Exercícios interativos

A página de exercícios possui desafios organizados em três níveis:

### Básico

- inicialização de repositórios;
- área de preparação;
- primeiro commit;
- criação de branches;
- clonagem de projetos.

### Intermediário

- preparação seletiva de arquivos;
- uso do stash;
- integração de branches;
- organização de commits.

### Avançado

- resolução de conflitos;
- reversão de commits;
- recuperação com reflog;
- proteção do histórico compartilhado.

O progresso é armazenado no navegador utilizando `localStorage`.

## Fluxo profissional

O guia apresenta uma sequência de trabalho próxima à utilizada em projetos reais:

```bash
git switch main
git pull origin main
git switch -c feature/nova-funcionalidade
```

Depois das alterações:

```bash
git status
git diff
git add caminho/do/arquivo
git diff --staged
git commit -m "feat: adiciona nova funcionalidade"
git push -u origin feature/nova-funcionalidade
```

O fluxo também aborda:

- nomenclatura de branches;
- commits semânticos;
- revisão de alterações;
- Pull Requests;
- integração com a branch principal;
- remoção de branches concluídas.

## Erros comuns

O guia de solução de problemas apresenta situações como:

- `fatal: not a git repository`;
- `nothing added to commit`;
- `src refspec main does not match any`;
- `remote origin already exists`;
- push rejeitado;
- conflito de merge;
- alterações impedindo a troca de branch;
- estado de `detached HEAD`;
- arquivos adicionados por engano;
- mensagens incorretas em commits;
- arquivos sensíveis enviados ao repositório;
- recuperação de commits com `git reflog`.

Cada situação contém:

- mensagem de erro;
- explicação da causa;
- comandos de diagnóstico;
- solução recomendada;
- alertas de segurança.

## Tema claro e escuro

O projeto utiliza variáveis CSS para controlar os temas.

A preferência escolhida é armazenada no navegador:

```text
git-guide-theme
```

Quando não existe uma preferência salva, a aplicação utiliza o tema configurado no sistema operacional.

## Acessibilidade

O projeto inclui:

- HTML semântico;
- hierarquia organizada de títulos;
- link para pular ao conteúdo principal;
- foco visível para navegação por teclado;
- atributos ARIA em controles interativos;
- mensagens dinâmicas com `aria-live`;
- botões acessíveis por teclado;
- contraste entre texto e fundo;
- suporte a `prefers-reduced-motion`;
- design responsivo;
- conteúdo adaptável à ampliação da página.

## Responsividade

A interface foi desenvolvida para funcionar em:

- celulares;
- tablets;
- notebooks;
- monitores maiores.

Os filtros possuem rolagem horizontal controlada em telas pequenas, enquanto os cartões e conteúdos são reorganizados em uma única coluna.

## Página 404

O projeto possui uma página personalizada para endereços inexistentes:

```text
docs/404.html
```

Sua estilização está separada em:

```text
docs/assets/css/404.css
```

A página oferece:

- mensagem de erro personalizada;
- terminal ilustrativo;
- botão para voltar ao início;
- acesso ao catálogo de comandos;
- tema claro e escuro;
- layout responsivo.

## Segurança

Alguns comandos Git podem apagar alterações locais ou modificar o histórico.

Antes de executar operações como:

```bash
git reset --hard
git clean -fd
git branch -D
git push --force
```

verifique o estado do repositório:

```bash
git status
```

Também é recomendável consultar o histórico:

```bash
git log --oneline --graph --all
git reflog
```

Em branches compartilhadas, prefira operações que preservem o histórico, como:

```bash
git revert <hash-do-commit>
```

## Licença

Este projeto está disponível sob a licença MIT.

Consulte o arquivo [LICENSE](./LICENSE) para obter mais informações.

## Autoria

Desenvolvido por [Gleika](https://github.com/Gleika-Almeida).

Projeto educacional criado para apoiar o aprendizado.