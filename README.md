<div align="center">
<img  height="150" width="150" alt="GIt" src="https://github.com/Gleika-Almeida/Gleika-Almeida/assets/109559491/481990e1-bb5a-4084-a6a0-1e83e2233c10"/>
</div>

<br>
<br>
<br>

<h1 align="center"> GIT LISTA DE COMANDOS</h1>

<br>

#### Índice
- [Introdução](#introdução)
    - [O que é controle de versão?](#o-que-é-controle-de-versão)
    - [O que é Git ?](#o-que-é-git-)
- [Configuração Inicial](#configuração-inicial)
    - [Instalando Debian/Ubuntu](#instalando-debianubuntu)
    - [Este PPA fornece a versão mais recente estável do Git no Ubuntu.](#este-ppa-fornece-a-versão-mais-recente-estável-do-git-no-ubuntu)
    - [Fedora](#fedora)
  - [Instalando no Mac](#instalando-no-mac)
    - [MacPorts](#macports)
    - [Homebrew](#homebrew)
- [Configuração do Usuário](#configuração-do-usuário)
    - [Nome e e-mail](#nome-e-e-mail)
    - [Editor](#editor)
    - [Verificar a Versão do Git](#verificar-a-versão-do-git)
    - [Testando suas Configurações](#testando-suas-configurações)
- [Inicializando um Repositório](#inicializando-um-repositório)
    - [Inicializando um Novo Repositório](#inicializando-um-novo-repositório)
    - [Clonando Um Repositório Existente](#clonando-um-repositório-existente)
- [Trabalhando Com Alterações](#trabalhando-com-alterações)
    - [Verificando o Status](#verificando-o-status)
    - [Alterações](#alterações)
    - [Criando um Commit](#criando-um-commit)
    - [Enviando as alterções](#enviando-as-alterções)
    - [Recebendo as mudanças](#recebendo-as-mudanças)
    - [Verificando status do arquivo](#verificando-status-do-arquivo)
    - [Visualizando suas aterações](#visualizando-suas-aterações)
    - [Vendo o histórico de Commits](#vendo-o-histórico-de-commits)
    - [Ver algumas estatísticas abreviadas para cada commit](#ver-algumas-estatísticas-abreviadas-para-cada-commit)
    - [Removendo Arquivos](#removendo-arquivos)
    - [Renomeando arquivos](#renomeando-arquivos)
    - [Desfazendo coisas](#desfazendo-coisas)
    - [Desfazendo alterações](#desfazendo-alterações)
    - [Desfazendo mudanças já rastreadas](#desfazendo-mudanças-já-rastreadas)
- [Gerenciando seus repositórios remotos](#gerenciando-seus-repositórios-remotos)
    - [Visualizando seus repositórios remotos](#visualizando-seus-repositórios-remotos)
    - [Adicionar um repositório remoto](#adicionar-um-repositório-remoto)
    - [Remover um repositório remoto](#remover-um-repositório-remoto)
    - [Renomear um repositório remoto](#renomear-um-repositório-remoto)
    - [Exibir informações sobre um repositório remoto](#exibir-informações-sobre-um-repositório-remoto)
    - [Alterar a URL de um repositório remoto](#alterar-a-url-de-um-repositório-remoto)
- [Criando Tags](#criando-tags)
    - [Listando suas Tags](#listando-suas-tags)
    - [Criando uma tag leve](#criando-uma-tag-leve)
    - [Criando uma tag anotada](#criando-uma-tag-anotada)
    - [Envie a tag para o repositório remoto](#envie-a-tag-para-o-repositório-remoto)
    - [ver que criou uma tag para o commit](#ver-que-criou-uma-tag-para-o-commit)
    - [Compartilhando Tags](#compartilhando-tags)
    - [Enviar muitas tags de uma vez](#enviar-muitas-tags-de-uma-vez)
- [Branches](#branches)
    - [Criar um novo branch](#criar-um-novo-branch)
    - [Mudar para o novo branch](#mudar-para-o-novo-branch)
    - [Listar todos os branches no repositório](#listar-todos-os-branches-no-repositório)
    - [Listar todos os branches e destacar o branch atual](#listar-todos-os-branches-e-destacar-o-branch-atual)
    - [Listar branches remotos](#listar-branches-remotos)
    - [Trocando de branch](#trocando-de-branch)
    - [Deletando](#deletando)
    - [Branches que  ainda não mesclou](#branches-que--ainda-não-mesclou)
    - [Sincronizar seu trabalho](#sincronizar-seu-trabalho)
    - [Empurrando](#empurrando)
    - [Enviar para um servidor remoto](#enviar-para-um-servidor-remoto)

<br>
<div align="center">

# Introdução

</div>

### O que é controle de versão?

È um sistema que registra alterações é mantêm um histórico das modificações feitas em um conjunto de arquivos, rastreando quem fez as alterações, quando foram feitas e quais foram as mudanças específicas.

### O que é Git ?

O **Git** é um eficiente sistema de **controle de versão** que se destaca por sua estrutura interna, funcionando como uma máquina do tempo extremamente rápida, além de desempenhar um papel exemplar como um robô de integração competente. Criado em **2005** por ***Linus Torvalds***, o visionário por trás do ***Linux***, o **Git** surgiu como resposta ao descontentamento com o ***BitKeeper***, o então sistema de controle de versão utilizado no desenvolvimento do *kernel do Linux*. Sua versatilidade e eficácia contribuem para a colaboração eficiente e a gestão transparente do desenvolvimento de software em diversas comunidades de **Código aberto.**


<br>

# Configuração Inicial

### Instalando Debian/Ubuntu

```
$ sudo apt-get install git
```

### Este PPA fornece a versão mais recente estável do Git no Ubuntu.
```
$ add-apt-repository  
$ ppa:git-core/ppa  
$ apt update
$ apt install git
```

### Fedora

```
$ yum install git-core
```

## Instalando no Mac

### MacPorts

```
$ sudo port install git
```

### Homebrew

```
$ brew install git
```

# Configuração do Usuário 

### Nome e e-mail
No terminal execute os comandos:

```
$ git config --global user.name "seu.user"
$ git config --global user.email seu.email@gmail.com
```

### Editor
Usando o Visual Studio Code como editor:

```
$ git config --global core.editor "code --wait"
```

Sublime Text como seu editor:
```
$ git config --global core.editor "subl -n -w"
```

### Verificar a Versão do Git

```
$ git --version
```

### Testando suas Configurações

```
$ git config --list
```

# Inicializando um Repositório 

### Inicializando um Novo Repositório 
```
$ git init
```

### Clonando Um Repositório Existente 

```
$ git clone URL_DO_REPOSITORIO
```

# Trabalhando Com Alterações

### Verificando o Status
Veja as alterações pendentes.

``` 
$ git status

```
### Alterações 
Adicione alterações específicas.
``` 
$ git add nome-do-arquivo

``` 
***ou***

Todas ao stage para prepará-las para **commit**.
```
$ git add .
```
### Criando um Commit
Para salvar as alterações no repositório.

```
$ git commit -m "sua mensagem aqui"
```

 ⚠️ É uma boa prática utilizar `-m` indica que você está passando uma mensagem junto com o commit. Essa mensagem deve  descrevendo o que foi realizado.  Forneça seu usuário e senha quando solicitado token ou a chave SSH.



### Enviando as alterções

```
$ git push 
```

### Recebendo as mudanças

sincronizar o repositório local com as mudanças do remoto.

```
$ git pull
```

### Verificando status do arquivo

Lista os arquivos modificados e o conteúdo da área de stage.

```
$ git status
```

### Visualizando suas aterações    

Mostra detalhadamente quais foram.

```
$ git diff
```

👇comparar as alterações que estão no seu stage com o seu último commit.

```
$ git diff --staged
```

### Vendo o histórico de Commits

```
$ git log
```

### Ver algumas estatísticas abreviadas para cada commit

```
$ git log --stat
```

**👇 Algumas opções simples de formatações de retorno para `git log  `.**

| Opções          | Descrição                                                     | 
| :--------        | :------------------------------------------------------------ | 
| -p              | Mostra o patch introduzido com cada commit.                                         |    
| --shortstat     | Exibe apenas a linha informando a alteração, inserção e exclusão do comando --stat. |  
| --name-only     | Mostra a lista de arquivos modificados após as informações de commit.               | 
| --name-status   | Mostra também a lista de arquivos que sofreram modificação com informações adicionadas / modificadas  /excluídas.        | 
| --abbrev-commit | Mostra apenas os primeiros caracteres da soma de verificação SHA-1 em vez de todos os 40. | 
| --relative-date | Exibe a data em um formato relativo (por exemplo, ‘` 2 semanas atrás '’) em vez de usar o formato de data  completo. | 
| --graph         | Exibe um gráfico ASCII do histórico de branches e merges ao lado da saída do log.    |
| --pretty        |Mostra os commits em um formato alternativo. As opções incluem oneline, short, full, fuller e format (onde você especifica seu próprio formato). | 

⚠️ Aperte a tecla **q** para sair dos resultados do ` git log` .

### Removendo Arquivos

```
$ git rm  README.md
```
👇 você pode querer fazer é manter o arquivo no seu diretório de trabalho, mas
removê-lo da sua área de stage.

```
$ git rm --cached README
```

### Renomeando arquivos
O mesmo também pode ser movido para outra pasta.

```
$ git mv
```
### Desfazendo coisas
```
$ git commit --amend
```

### Desfazendo alterações

⚠️ É importante entender que o `git checkout -- <arquivo>` é um comando
***perigoso***. Qualquer modificação que você fez no arquivo se foi.

```
$ git checkout
```

### Desfazendo mudanças já rastreadas

O repositório fica exatamente no estado que estava no último commit.

```
$ git reset --hard
```

# Gerenciando seus repositórios remotos

### Visualizando seus repositórios remotos
`-v` mostra também as URLs associadas a cada repositório.

```
$ git remote
$ git remote -v  
```

### Adicionar um repositório remoto
Este comando adiciona um novo repositório remoto ao seu projeto. Você dá um nome por exemplo origin ao repositório  e especifica a URL onde ele está localizado.

```
$ git remote add <nome_do_repositório> <url_do_repositorio>
```
⚠️ Lembrando que ` <  >` e só para informar o que colocar. Não faz parte do comando!

### Remover um repositório remoto
Remove a associação entre o seu repositório local e um repositório remoto.

```
$ git remote remove <nome_do_repositório>
ou
$ git remote rm <nome_do_repositório>
```

### Renomear um repositório remoto

```
$ git remote rename <nome_atual>   <novo_nome>
```

### Exibir informações sobre um repositório remoto
Fornece informações detalhadas sobre um repositório remoto, incluindo as branches remotas e suas relações com as branches locais.

```
$ git remote show <nome_remoto>
```

### Alterar a URL de um repositório remoto
Permite que você atualize a URL de um repositório remoto.

```
$ git remote set-url <nome_remoto> <nova_url>
```

# Criando Tags

O **Git** usa dois tipos de tags: **Leve** e **Anotada**. As tags são usadas para marcar pontos específicos na história do seu repositório, geralmente para identificar versões estáveis ou lançamentos importantes.

### Listando suas Tags

```
$ git tag
```

###  Criando uma tag leve 

```
$ git tag nome_da_tag <hash_do_commit>
 ```
👇 assim
 ```
$ git tag v1.0.0 2a1b6c3
```
### Criando uma tag anotada

```
$ git tag -a nome_da_tag -m "Mensagem da tag" <hash_do_commit>
```
### Envie a tag para o repositório remoto 
Se você deseja **compartilhar** a tag com outras pessoas, envie-a para o repositório remoto:

```
$ git push origin nome_da_tag
```

### ver que criou uma tag para o commit

```
$ git show nome_da_tag
```

### Compartilhando Tags

Por padrão, o comando **git push** não envia as tags para os servidores remoto. Você terá que
explicitamente enviar as tags para o servidor de compartilhamento **depois** de tê-las criado.

```
 $ git push origin nome_da_tag
 ```

 ###  Enviar muitas tags de uma vez
 
 ```
 $ git push origin --tags
```


# Branches

É a forma que o **git** separa as versões dos projetos.

### Criar um novo branch

 ```
$ git branch <nome_do_branch>
 ```

### Mudar para o novo branch

Isso cria um novo branch e muda para ele.

 ```
$ git switch -c <nome_do_branch>
 ```

### Listar todos os branches no repositório

 ```
$ git branch
 ```

### Listar todos os branches e destacar o branch atual

 ```
$ git branch -v
 ```

### Listar branches remotos

 ```
$ git branch -r
 ```

### Trocando de branch
 ```
$ git checkout  <nome_do_branch>
 ```

### Deletando 

Não é possível remover uma branch enquanto estivermos nela. Vá para outa branch. Delete com a opção `-d` uma branch que possui commits ainda não aplicados.
 ```
$ git branch -d <nome_do_branch>
 ```

⚠️ Para removermos a branch se tivermos feito algum commit, devemos utilizar a opção `-D`.
 ```
$ git branch -D <nome_do_branch>
 ```

### Branches que  ainda não mesclou
 ```
$ git branch --no-merged
 ```

 ### Sincronizar seu trabalho

```
$ git fetch origin
```
 ### Empurrando

```
$ git push <remoto> <branch>
```
### Enviar para um servidor remoto
```
$ git push origin branch_local:remoto
```
<br>
<br>
<div align="center">
<img  height="100" width="100" alt="GIt" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHJ0MTlzbGZ4dzg3eDBsdTYxZmdrajlwN2hzdGVrajJsN3pwY3lzZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d7mMsa2P76o5Xn8NAD/giphy.gif"/>
</div>

<h5 align="center">Made with 💜 and Markdown.</h5>
