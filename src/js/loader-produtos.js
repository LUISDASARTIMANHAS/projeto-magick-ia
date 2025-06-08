import { renderAWa, renderButton, renderH2, renderPicture, renderSpan } from "./renders.js";
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
      // limpa tudo que estiver na ul
      ulProdutos.innerHTML = "";

      for (let i = 0; i < data.length; i++) {
        const personagem = data[i];
        const nome = personagem.nome;
        const preco = personagem.preco;
        const categ = personagem.categoria;

        // criando elementos
        renderProdutos(ulProdutos, i, nome, preco, categ);
      }
      console.log(
        `%c [SISTEMA]: Todos os produtos foram carregados!`,
        "color: #00cc00"
      );
      window.onloadProdutos();
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
      renderSpan(divInformacoes, "categoria", `Categoria: ${categ}`);
      renderSpan(divInformacoes, "preco", `R$: ${preco}`);
      renderAWa(divInformacoes, "btn-comprar","+5527995744791",`Olá, quero comprar a carta ${nome}`, "Comprar");

      // juntando os 2 em uma div
      renderPicture(liProduto, srcSet, `Carta ${nome}`);
      liProduto.appendChild(divInformacoes);

      // juntando a div em uma lista de divs
      ulProdutos.appendChild(liProduto);
      console.log(
        `%c [SISTEMA]: Carregando Produto: ${nome}`,
        "color: #00ccff"
      );
    }
  } catch (error) {
    alert("ERRO FATAL! REPORTE AO ADMINISTRADOR DO SITE. \n Error:" + error);
  }
});
