window.addEventListener("load", () => {
  try {
    const url = "./src/data/lista-personagens.json";
    const options = {
      method: "GET",
      mode: "cors",
      headers: {
        "content-type": "application/json;charset=utf-8",
      },
    };

    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.text().then((errorText) => {
            throw new Error(
              "Erro ao carregar personagens no banco de dados: " + errorText
            );
          });
        }
      })
      .then((data) => {
        console.log("DATA RESPONSE: ");
        console.log(data);
        render(data);
      })
      .catch((error) => onError(error));

    function onError(error) {
      console.error(error);
      alert(error);
    }

    function render(data) {
      const divPersonagens = document.getElementById("personagens");
      const UlpersonagensBotoes = document.getElementById("personagensBotoes");

      for (let i = 0; i < data.length; i++) {
        const personagem = data[i];
        const nome = personagem.nome;
        const descricao = personagem.descricao;

        // criando elementos
        renderPersonagem(i, nome, descricao, divPersonagens);
        renderBotoesPersonagem(nome, i, UlpersonagensBotoes);
      }
      window.onloadedPersonagensEBotoes();
    }

    function renderPersonagem(i, nome, descricao, divPersonagens) {
      const srcSet = `./src/imgs/bg-${nome.toLowerCase()}.png`;
      const src = `./src/imgs/bg-${nome.toLowerCase()}-mobile.png`;
      var divPersonagem = document.createElement("div");
      var picture = document.createElement("picture");
      var source = document.createElement("source");
      var img = document.createElement("img");
      var divConteudo = document.createElement("div");
      var tituloPersonagem = document.createElement("h2");
      var descricaoPersonagem = document.createElement("p");

      // configuracoes da lista de divs personagem
      divPersonagem.setAttribute("class", "personagem");
      if (i == 0) {
        divPersonagem.setAttribute("class", "personagem selecionado");
      }

      // configuracoes da div conteudo
      divConteudo.setAttribute("class", "conteudo");

      // configuracoes de source
      source.setAttribute("srcset", srcSet);
      source.setAttribute("media", "(min-width: 768px)");

      // configurações da img personagem pra mobile
      img.setAttribute("class", "imagem");
      img.setAttribute("src", src);
      img.setAttribute("alt", `Personagem ${nome}`);

      // parte da imagem
      picture.appendChild(source);
      picture.appendChild(img);

      // configuracoes do titulo h2
      tituloPersonagem.setAttribute("class", "nome-personagem");
      tituloPersonagem.textContent = nome;

      // configuracoes do p descrição
      descricaoPersonagem.setAttribute("class", "descricao");
      descricaoPersonagem.textContent = descricao;

      // parte do personagem
      divConteudo.appendChild(tituloPersonagem);
      divConteudo.appendChild(descricaoPersonagem);

      // juntando os 2 em uma div
      divPersonagem.appendChild(picture);
      divPersonagem.appendChild(divConteudo);

      // juntando a div em uma lista de divs
      divPersonagens.appendChild(divPersonagem);
      console.log(
        `%c [SISTEMA]: Carregando Personagem: ${nome}`,
        "color: #00ccff"
      );
    }

    function renderBotoesPersonagem(nome, i, UlpersonagensBotoes) {
      const src = `./src/imgs/icone-${nome.toLowerCase()}.png`;
      var liBotoes = document.createElement("li");
      var button = document.createElement("button");
      var img = document.createElement("img");

      // configuracoes do botao
      button.setAttribute("class", `botao ${nome.toLowerCase()}`);
      if (i == 0) {
        button.setAttribute("class", `botao ${nome.toLowerCase()} selecionado`);
      }

      // configuracoes da imagem do botão
      img.setAttribute("src", src);
      img.setAttribute("alt", `Ícone ${nome}`);

      // adicionando a imagem no botão
      button.appendChild(img);

      // juntando os botão em uma li
      liBotoes.appendChild(button);

      // juntando os botoes em uma lista ul de botoes
      UlpersonagensBotoes.appendChild(liBotoes);
      console.log(
        `%c [SISTEMA]: Carregando Botão: ${nome}`,
        "color: #00ccff"
      );
    }

  } catch (error) {
    alert("ERRO FATAL! REPORTE AO ADMINISTRADOR DO SITE. \n Error:" + error);
  }
});
