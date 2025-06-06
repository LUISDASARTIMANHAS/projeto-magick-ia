window.addEventListener("load", () => {
  try {
    const url = "./src/data/lista-produtos.json";
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
      const ulProdutos = document.getElementById("lista-cartas");
      // const UlpersonagensBotoes = document.getElementById("personagensBotoes");

      for (let i = 0; i < data.length; i++) {
        const personagem = data[i];
        const nome = personagem.nome;
        const preco = personagem.preco;
        const categ = personagem.categoria;

        // criando elementos
        renderProdutos(ulProdutos, i, nome, preco, categ);
        // renderBotoesPersonagem(nome, i, UlpersonagensBotoes);
      }
      window.onloadedPersonagensEBotoes();
    }

    function renderProdutos(ulProdutos, i, nome, preco, categ) {
      const srcSet = `./src/imgs/carta-${nome.toLowerCase()}.png`;
      var liProduto = document.createElement("li");
      var divInformacoes = document.createElement("div");

      // configuracoes da lista de Produtos
      liProduto.setAttribute("class", "carta");
      liProduto.setAttribute("data-categoria", categ);
      liProduto.setAttribute("data-preco", preco);
      // if (i == 0) {
      //   divPersonagem.setAttribute("class", "personagem selecionado");
      // }

      // configuracoes da div informações
      divInformacoes.setAttribute("class", "informacoes");

      // parte do produto
      renderH2(divInformacoes, "nome-personagem", nome);
      renderSpan(divInformacoes,"categoria", `Categoria: ${categ}`);
      renderSpan(divInformacoes,"preco", `R$: ${preco}`);
      renderButton(divInformacoes,"btn-comprar", "Comprar");

      // juntando os 2 em uma div
      renderPicture(liProduto, srcSet, nome);
      liProduto.appendChild(divInformacoes);

      // juntando a div em uma lista de divs
      ulProdutos.appendChild(liProduto);
      console.log(
        `%c [SISTEMA]: Carregando Produto: ${nome}`,
        "color: #00ccff"
      );
    }

    // funcoes basicas de renderização
    function renderButton(element, classe, text) {
      var button = document.createElement("button");
      // configuracoes do span Categoria
      button.setAttribute("class", classe);
      button.textContent = text;
      element.appendChild(button);
    }

    function renderSpan(element, classe, text) {
      var span = document.createElement("span");
      // configuracoes do span Categoria
      span.setAttribute("class", classe);
      span.textContent = text;
      element.appendChild(span);
    }

    function renderH2(element, classe, nome) {
      var h2 = document.createElement("h2");
      // configuracoes do titulo h2
      h2.setAttribute("class", classe);
      h2.textContent = nome;
      element.appendChild(h2);
      return h2;
    }

    function renderIMG(picture, src, nome) {
      var img = document.createElement("img");
      img.setAttribute("src", src);
      img.setAttribute("alt", `Carta ${nome}`);
      picture.appendChild(img);
      return img;
    }

    function renderSource(picture, srcSet, minWidth) {
      // configuracoes de source
      var source = document.createElement("source");
      source.setAttribute("srcset", srcSet);
      source.setAttribute("media", `(min-width: ${minWidth}px)`);
      picture.appendChild(source);
      return source;
    }

    function renderPicture(element, srcSet, nome) {
      var picture = document.createElement("picture");
      renderSource(picture, srcSet, 768);
      renderIMG(picture, srcSet, nome);
      element.appendChild(picture);
      return picture;
    }
  } catch (error) {
    alert("ERRO FATAL! REPORTE AO ADMINISTRADOR DO SITE. \n Error:" + error);
  }
});
