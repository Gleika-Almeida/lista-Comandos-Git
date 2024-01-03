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
  - [Instalando no Linux](#instalando-no-linux)
    - [Debian/Ubuntu](#debianubuntu)
    - [Este PPA fornece a versão mais recente estável do Git no Ubuntu.](#este-ppa-fornece-a-versão-mais-recente-estável-do-git-no-ubuntu)
    - [Fedora](#fedora)
  - [Instalando no Mac](#instalando-no-mac)
    - [MacPorts](#macports)
    - [Homebrew](#homebrew)
- [Configuração](#configuração)
    - [Nome e e-mail](#nome-e-e-mail)
    - [Editor](#editor)
- [Verificar a versão do git](#verificar-a-versão-do-git)
- [Testando Suas Configurações](#testando-suas-configurações)
- [Versionando seu  código com Git](#versionando-seu--código-com-git)
- [Clonando um Repositório Existente](#clonando-um-repositório-existente)



<br>
<br>



# Instalação

<br>

## Instalando no Linux

### Debian/Ubuntu
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

# Verificar a versão do git

```
$ git --version
```

# Testando Suas Configurações

```
$ git config --list
```

# Versionando seu  código com Git

Para criar um repositório utilize o comando:
```
$ git init
```

Rastreando todas as alterções com   ` git add .` ou um arquivo em específicou com nome do arquivo.

```
$ git add README.md
```

Vendo a situação dos arquivos no repositório:

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



# Clonando um Repositório Existente

```
$ git clone URL
```





<div align="center">
<img  height="200" width="200" alt="GIt" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHJ0MTlzbGZ4dzg3eDBsdTYxZmdrajlwN2hzdGVrajJsN3pwY3lzZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d7mMsa2P76o5Xn8NAD/giphy.gif"/>
</div>

<h5 align="center">Made with 💜 and Markdown.</h5>
