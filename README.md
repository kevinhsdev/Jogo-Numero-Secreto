<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&customColorList=6,11,20&height=200&section=header&text=Jogo%20do%20N%C3%BAmero%20Secreto&fontSize=40&fontColor=fff&animation=twinkling&fontAlignY=35&desc=JavaScript%20%7C%20HTML%20%7C%20CSS&descAlignY=55&descSize=18" />
</p>
<p align="center">
  <img src="https://skillicons.dev/icons?i=vscode,javascript,html,css" />
    
  ![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow)
</p>

---
 
## 📖 Sobre o projeto
 
Jogo de adivinhação em JavaScript puro, desenvolvido como exercício de lógica e fundamentos da linguagem. O programa gera um número aleatório dentro de um intervalo configurável, e o jogador tenta acertá-lo por meio de dicas interativas. O projeto também conta com uma interface visual em HTML/CSS com tema escuro e identidade própria.
 
---
 
## ✨ Funcionalidades
 
| Funcionalidade | Descrição |
|---|---|
| 🎲 Número aleatório | Gerado com `Math.random()` dentro do intervalo definido |
| 💬 Dicas interativas | Informa se o número secreto é maior ou menor que o chute |
| 🔢 Contador de tentativas | Registra quantas tentativas o jogador usou |
| 🏆 Mensagem de vitória | Exibe o número secreto e o total de tentativas ao acertar |
| ⚙️ Dificuldade configurável | Basta alterar `numeroMaximo` no código para ajustar o desafio |
 
---
 
## 🖥️ Demonstração
 
```
> Boas vindas ao jogo do numero secreto!
> Digite um numero entre 1 e 5000: 2500
> O numero secreto é menor que 2500!
> Digite um numero entre 1 e 5000: 1000
> O numero secreto é maior que 1000!
> Digite um numero entre 1 e 5000: 1742
> Isso ai! Você descobriu o numero secreto, 1742! E acertou em 3 tentativas!
```
 
---
 
## 📁 Estrutura do projeto
 
```
jogo-numero-secreto/
├── index.html       # Interface visual do jogo
├── style.css        # Estilização com tema dark
├── app.js           # Lógica do jogo em JavaScript
└── img/
    ├── robot.png    # Imagem do robô
    ├── trophy.png   # Ícone de troféu
    ├── code.png     # Imagem decorativa de código
    └── Ruido.png    # Textura de fundo do card
```
 
---
 
## 🚀 Como executar
 
```bash
# Clone o repositório
git clone https://github.com/kevinhsdev/jogo-numero-secreto
 
# Acesse a pasta do projeto
cd jogo-numero-secreto
 
# Abra o arquivo no navegador
# Basta abrir o index.html diretamente ou usar a extensão Live Server no VS Code
```
 
---
 
## 🔮 Melhorias futuras
 
- [ ] Substituir `alert()` e `prompt()` por interface DOM completa
- [ ] Adicionar modo de dificuldade com seleção de intervalo
- [ ] Implementar histórico de tentativas na tela
- [ ] Adicionar botão de reiniciar sem recarregar a página
- [ ] Tornar o layout responsivo para mobile
---
 
## 👨‍💻 Autor
 
<p align="left">
  
   [![GitHub](https://img.shields.io/badge/kevinhsdev-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kevinhsdev)
 
</p>

---
 
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&customColorList=6,11,20&height=120&section=footer&text=Let's%20Code!&fontSize=28&fontColor=fff&animation=twinkling&fontAlignY=65" />
</p>
