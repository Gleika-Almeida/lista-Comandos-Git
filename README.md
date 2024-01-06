<div align="center">
<img  height="150" width="150" alt="GIt" src="https://github.com/Gleika-Almeida/Gleika-Almeida/assets/109559491/481990e1-bb5a-4084-a6a0-1e83e2233c10"/>
</div>

<br>
<br>
<br>

<h1 align="center"> GIT LISTA DE COMANDOS</h1>

<br>

#### Índice
- [Instalação](#instalação)
    - [Instalando Debian/Ubuntu](#instalando-debianubuntu)
    - [Este PPA fornece a versão mais recente estável do Git no Ubuntu.](#este-ppa-fornece-a-versão-mais-recente-estável-do-git-no-ubuntu)
    - [Fedora](#fedora)
  - [Instalando no Mac](#instalando-no-mac)
    - [MacPorts](#macports)
    - [Homebrew](#homebrew)
- [Configuração](#configuração)
    - [Nome e e-mail](#nome-e-e-mail)
    - [Editor](#editor)
    - [Verificar a versão do git](#verificar-a-versão-do-git)
    - [Testando suas configurações](#testando-suas-configurações)
- [Versionando seu  código](#versionando-seu--código)
    - [Recebendo as mudanças](#recebendo-as-mudanças)
    - [Clonando um repositório existente](#clonando-um-repositório-existente)
    - [Visualizando suas aterações dentro e fora do stage](#visualizando-suas-aterações-dentro-e-fora-do-stage)
    - [comparar as alterações que estão no seu stage com o seu último commit](#comparar-as-alterações-que-estão-no-seu-stage-com-o-seu-último-commit)
    - [Vendo o histórico de Commits](#vendo-o-histórico-de-commits)
    - [Ver algumas estatísticas abreviadas para cada commit](#ver-algumas-estatísticas-abreviadas-para-cada-commit)
    - [Removendo Arquivos ` `](#removendo-arquivos--)
    - [Renomeando arquivos](#renomeando-arquivos)
    - [Desfazendo coisas](#desfazendo-coisas)
    - [Desfazendo alterações](#desfazendo-alterações)

<br>
<br>

# Instalação

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

# Configuração 

### Nome e e-mail
No terminal execute os comandos:

```
$ git config --global user.name "Programdor"
$ git config --global user.email progrmador@gmail.com
```
⚠️ utilize seu nome é e-mail.

### Editor
Usando o Visual Studio Code como editor:

```
$ git config --global core.editor "code --wait"
```

Sublime Text como seu editor:
```
$ git config --global core.editor "subl -n -w"
```

### Verificar a versão do git

```
$ git --version
```

### Testando suas configurações

```
$ git config --list
```

# Versionando seu  código

Para criar um repositório utilize o comando.
```
$ git init
```

Rastreando todas as alterções com   ` git add .` ou um arquivo em específicou com nome do arquivo.

```
$ git add README.md
```

Vendo a situação dos arquivos no repositório.

```
$ git status
```

É uma boa prática enviar uma mensagem utilizando `-m` com as
alterações que foram feitas.

```
$ git commit -m "first commit"
```

Enviando as alterções para repositório remoto.

```
$ git push 

```

⚠️ Forneça seu usuário e senha do GitHub quando solicitado ou token ou a chave SSH.

### Recebendo as mudanças

```
$ git pull
```


### Clonando um repositório existente

```
$ git clone URL
```

### Visualizando suas aterações dentro e fora do stage

```
$ git diff
```

###  comparar as alterações que estão no seu stage com o seu último commit

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
**👇🏾 Algumas opções simples de formatações de retorno para `git log  `.**

| Opções          | Descrição                                                     | 
| --------        | :------------------------------------------------------------ | 
| -p              | Mostra o patch introduzido com cada commit.                                         |    
| --shortstat     | Exibe apenas a linha informando a alteração, inserção e exclusão do comando --stat. |  
| --name-only     | Mostra a lista de arquivos modificados após as informações de commit.               | 
| --name-status   | Mostra também a lista de arquivos que sofreram modificação com informações adicionadas / modificadas  /excluídas.        | 
| --abbrev-commit | Mostra apenas os primeiros caracteres da soma de verificação SHA-1 em vez de todos os 40. | 
| --relative-date | Exibe a data em um formato relativo (por exemplo, ‘` 2 semanas atrás '’) em vez de usar o formato de data  completo. | 
| --graph         | Exibe um gráfico ASCII do histórico de branches e merges ao lado da saída do log.    |
| --pretty        |Mostra os commits em um formato alternativo. As opções incluem oneline, short, full, fuller e format (onde você especifica seu próprio formato). | 

⚠️ Aperte a tecla **q** para sair dos resultados do ` git log` .

### Removendo Arquivos ` ` 

```
$ git rm 
ou
$ git rm  README.md
```
👇🏾 você pode querer fazer é manter o arquivo no seu diretório de trabalho, mas
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
É importante entender que o `git checkout -- <arquivo>` é um a comando
perigoso. Qualquer modificação que você fez no arquivo se foi.
```
$ git checkout
```









<div align="center">
<img  height="200" width="200" alt="GIt" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHJ0MTlzbGZ4dzg3eDBsdTYxZmdrajlwN2hzdGVrajJsN3pwY3lzZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d7mMsa2P76o5Xn8NAD/giphy.gif"/>
</div>

<h5 align="center">Made with 💜 and Markdown.</h5>
