window.onloadProdutos = function onloadProdutos() {
  try {
    window.filtrar = function filtrar() {
      const categoriaSelecionada = document.getElementById("categoria").value;
      const categoriaSelecionadaFormatada = categoriaSelecionada.toLowerCase();
      const precoMax = document.getElementById("preco").value;
      const precoMaxFormatado = parseFloat(precoMax);
      const listaProdutos = document.querySelectorAll(".carta");

      listaProdutos.forEach((produto) => {
        const categoriaProduto = produto.dataset.categoria.toLowerCase();
        const precoProduto = parseFloat(produto.dataset.preco);

        // filtros
        let mostrarProduto = true;

        mostrarProduto = validarCategoria(
          categoriaSelecionadaFormatada,
          categoriaProduto,
          mostrarProduto
        );

        mostrarProduto = validarPreco(
          precoMaxFormatado,
          precoProduto,
          mostrarProduto
        );
        toggleMostrarProduto(mostrarProduto, produto);
      });
    };

    function validarPreco(precoMaxFormatado, precoProduto,mostrarProduto) {
      const temFiltroPreco = precoMaxFormatado !== "";
      const produtoNaoBateComFiltroPrecoMax = precoProduto > precoMaxFormatado;
      if (temFiltroPreco && produtoNaoBateComFiltroPrecoMax) {
        mostrarProduto = false;
      }
      return mostrarProduto;
    }

    function validarCategoria(categoriaSelecionadaFormatada, categoriaProduto,mostrarProduto) {
      const temFiltroCategoria = categoriaSelecionadaFormatada !== "";
      const produtoNaoBateComFiltroCategoria =
        categoriaProduto !== categoriaSelecionadaFormatada;
      // verifica se a categoria selecionada tem filtro e se o produto não bate com o filtro da categoria
      // ou seja categoria selecionada for epica e o produto comum vamos ignorar ele ou esconder
      if (temFiltroCategoria && produtoNaoBateComFiltroCategoria) {
        mostrarProduto = false;
      }
      return mostrarProduto;
    }

    function toggleMostrarProduto(mostrarProduto, produto) {
      const classeProduto = produto.classList;
      // verifica se mostrar e verdadeiro e então mostra
      if (mostrarProduto) {
        classeProduto.add("mostrar");
        classeProduto.remove("esconder");
      } else {
        classeProduto.remove("mostrar");
        classeProduto.add("esconder");
      }
    }
    console.log(
      `%c [SISTEMA]: Todas as Funções foram carregadas!`,
      "color: #00cc00"
    );
  } catch (error) {
    alert("ERRO FATAL! REPORTE AO ADMINISTRADOR DO SITE. \n Error:" + error);
  }
};
