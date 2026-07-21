<div align="center">
<img  height="150" width="150" alt="GIt" src="https://github.com/Gleika-Almeida/Gleika-Almeida/assets/109559491/481990e1-bb5a-4084-a6a0-1e83e2233c10"/>
</div>
<br>
<br>
<h1 align="center"> GIT GUIA</h1>
<br>
<div align="center">
</div>

### O que é Git ?

O **Git** é um eficiente sistema de **controle de versão** que se destaca por sua estrutura interna, funcionando como uma máquina do tempo extremamente rápida, além de desempenhar um papel exemplar como um robô de integração competente. Criado em **2005** por ***Linus Torvalds***, o visionário por trás do ***Linux***, o **Git** surgiu como resposta ao descontentamento com o ***BitKeeper***, o então sistema de controle de versão utilizado no desenvolvimento do *kernel do Linux*. Sua versatilidade e eficácia contribuem para a colaboração eficiente e a gestão transparente do desenvolvimento de software em diversas comunidades de **Código aberto.**

### O que é controle de versão?

È um sistema que registra alterações é mantêm um histórico das modificações feitas em um conjunto de arquivos, rastreando quem fez as alterações, quando foram feitas e quais foram as mudanças específicas.

<br>

## Configuração Inicial

### Instalando Debian/Ubuntu

```
$ sudo apt-get install git
```

### Este PPA fornece a versão mais recente estável do Git no Ubuntu.
```
$ add-apt-repository ppa:git-core/ppa  
$ apt update; apt install git

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

## Configuração do Usuário 

### Nome e e-mail

No terminal execute os comandos:

```
$ git config --global user.name "seu.user"
$ git config --global user.email seu.email@gmail.com
```

### Editor

Visual Studio Code como editor:

```
$ git config --global core.editor "code --wait"
```

Sublime como seu editor:

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

<br>
<br>

<div align="center">
<img  height="90" width="90" alt="GIt" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHJ0MTlzbGZ4dzg3eDBsdTYxZmdrajlwN2hzdGVrajJsN3pwY3lzZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d7mMsa2P76o5Xn8NAD/giphy.gif"/>
</div>

<h5 align="center">Made with 💜 and Markdown</h5>
