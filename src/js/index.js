window.onloadedPersonagensEBotoes = function onloadedPersonagensEBotoes() {
  try {
    const listaBotoes = document.querySelectorAll(".botao");
    const listaPersonagens = document.querySelectorAll(".personagem");

    console.log(listaBotoes);

    listaBotoes.forEach((botao, i) => {
      botao.addEventListener("click", () => {
        removerBotaoSelecao();
        selecionarBotao(botao);

        removerSelecaoPersonagem();
        selecionarPersonagem(i);
      });
    });

    function removerBotaoSelecao() {
      const botaoSelecionado = document.querySelector(".botao.selecionado");
      if (botaoSelecionado) {
        botaoSelecionado.classList.remove("selecionado");
      }
    }

    function selecionarBotao(botao) {
      botao.classList.add("selecionado");
    }

    function removerSelecaoPersonagem() {
      const personSelecionado = document.querySelector(
        ".personagem.selecionado"
      );
      if (personSelecionado) {
        personSelecionado.classList.remove("selecionado");
      }
    }

    function selecionarPersonagem(indice) {
      const personagem = listaPersonagens[indice];
      personagem.classList.add("selecionado");
    }
  } catch (error) {
    alert("ERRO FATAL! REPORTE AO ADMINISTRADOR DO SITE. \n Error:" + error);
  }
};
