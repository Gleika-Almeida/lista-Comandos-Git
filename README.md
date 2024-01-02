<div align="center">
<img  height="150" width="150" alt="GIt" src="https://github.com/Gleika-Almeida/Gleika-Almeida/assets/109559491/481990e1-bb5a-4084-a6a0-1e83e2233c10"/>
</div>

<br>
<br>
<br>
<h1 align="center">🚀 Instalando e Configurando o Git no Linux</h1>



### Debian/Ubuntu
```
$ sudo apt-get install git
```
### Este PPA fornece a versão mais recente estável do Git no Ubunto.
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
<br>

# Configurção básica
No terminal execute os camondos:
```
$ git config --global user.name "Programdor"
$ git config --global user.email progrmador@gmail.com
```
⚠️ claro utilize seu nome é e-mail.

### Seu Editor
Usando o Visual Studio Code como editor:

```
$ git config --global core.editor "code --wait"
```

Sublime Text como seu editor:
```
$ git config --global core.editor "subl -n -w"
```

<br>

# Verificar a versão do git
```
$ git --version
```
<br>

# Testando Suas Configurações

```
$ git config --list
```
<br>

# Versionando seu  código com Git  Criando um repositorio

Para criar um repositório utilize o comando:
```
$ git init
```

Rastreando todas as alterções com   ` git add .` ou um arquivo em específicou com nome do arquivo 

```
$ git add README.md
```

Vendo a situação dos arquivos no repositório com  `git status`.

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



## Clonando um Repositório Existente



<div align="center">
<img  height="200" width="200" alt="GIt" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHJ0MTlzbGZ4dzg3eDBsdTYxZmdrajlwN2hzdGVrajJsN3pwY3lzZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d7mMsa2P76o5Xn8NAD/giphy.gif"/>
</div>