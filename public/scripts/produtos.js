const produtos = [
  {
    imagem:
      "https://conteudo.imguol.com.br/c/entretenimento/24/2020/09/15/banana-1600197261350_v2_4x3.jpg",
    nome: "Banana",
    preco: "R$ 6,00",
    estoque: 12,
    quantidade: 0,
    id: 0,
  },
  {
    imagem:
      "https://conteudo.imguol.com.br/c/entretenimento/24/2020/09/15/banana-1600197261350_v2_4x3.jpg",
    nome: "Pera",
    preco: "R$ 10,00",
    estoque: 10,
    quantidade: 0,
    id: 1,
  },
  {
    imagem:
      "https://conteudo.imguol.com.br/c/entretenimento/24/2020/09/15/banana-1600197261350_v2_4x3.jpg",
    nome: "Uva",
    preco: "R$ 10,00",
    estoque: 10,
    quantidade: 0,
    id: 2,
  },
  {
    imagem:
      "https://conteudo.imguol.com.br/c/entretenimento/24/2020/09/15/banana-1600197261350_v2_4x3.jpg",
    nome: "Laranja",
    preco: "R$ 10,00",
    estoque: 10,
    quantidade: 0,
    id: 3,
  },
  {
    imagem:
      "https://conteudo.imguol.com.br/c/entretenimento/24/2020/09/15/banana-1600197261350_v2_4x3.jpg",
    nome: "Chocolate",
    preco: "R$ 10,00",
    estoque: 10,
    quantidade: 0,
    id: 4,
  },
  {
    imagem:
      "https://conteudo.imguol.com.br/c/entretenimento/24/2020/09/15/banana-1600197261350_v2_4x3.jpg",
    nome: "Morango",
    preco: "R$ 10,00",
    estoque: 10,
    quantidade: 0,
    id: 5,
  },
];

//ADD PRODUTOS

adicionarProdutoHorta = () => {
  var containerProdutos = document.getElementById("horta-produtos");
  produtos.map((val) => {
    containerProdutos.innerHTML +=
      `
        <div class="lista_produtos-produto">
          <img src="` +
      val.imagem +
      `" alt="` +
      val.imagem +
      `" class="lista_produtos-imagem">
          <h3>` +
      val.nome +
      `</h3>
          <div class="lista_produtos-produto-info">
            <div>
              <p>` +
      val.preco +
      `</p>
              <p>Estoque: ` +
      val.estoque +
      `</p>
            </div>
          </div>
          <button type="button" class="lista_produtos-produto-button" key="` +
      val.id +
      `">Adicionar ao Carrinho</button>
        </div>
    `;
  });
};

adicionarProdutoMercearia = () => {
  var containerProdutos = document.getElementById("mercearia-produtos");
  produtos.map((val) => {
    containerProdutos.innerHTML +=
      `
        <div class="lista_produtos-produto">
          <img src="` +
      val.imagem +
      `" alt="` +
      val.imagem +
      `" class="lista_produtos-imagem">
          <h3>` +
      val.nome +
      `</h3>
          <div class="lista_produtos-produto-info">
            <div>
              <p>` +
      val.preco +
      `</p>
              <p>Estoque: ` +
      val.estoque +
      `</p>
            </div>
          </div>
          <button type="button" class="lista_produtos-produto-button" key="` +
      val.id +
      `">Adicionar ao Carrinho</button>
        </div>
    `;
  });
};

// adicionarProdutoHorta();
// adicionarProdutoMercearia();

// FUNCIONALIDADES DO CARRINHO //

atualizarCarrinho = () => {
  var containerCarrinho = document.getElementById("produtos-carrinho");
  containerCarrinho.innerHTML = "";
  produtos.map((val) => {
    if (val.quantidade > 0) {
      containerCarrinho.innerHTML +=
        `
        <div class="nav-cart-item">
          <img src="` +
        val.imagem +
        `" alt="` +
        val.imagem +
        `" class="nav-cart-item-imagem">
          <h3>"` +
        val.nome +
        `</h3>
        <div class="item-quantidade">
          <button class="item-menos">-</button>
          <div class="item-quantidade">` +
        val.quantidade +
        `</div>
          <button class="item-mais">+</button>
          </div>
        </div>
      `;
    }
  });
};

let links = document.querySelectorAll(".lista_produtos-produto-button");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let key = this.getAttribute("key");
    produtos[key].quantidade++;
    atualizarCarrinho();
  });
}
