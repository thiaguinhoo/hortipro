//BOTÃO DE CARRINHO

class Carrinho {
    constructor(cart, navCart, navLinks) {
      this.cart = document.querySelector(cart);
      this.navCart = document.querySelector(navCart);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.navCart.classList.toggle(this.activeClass);
      this.cart.classList.toggle(this.activeClass);
    }
  
    addClickEvent() {
      this.cart.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.cart) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const carrinho = new Carrinho(
    ".cart",
    ".nav-cart",
    ".nav-cart li",
  );
  carrinho.init();

  // FIM DO BOTÃO DE CARRINHO

  //criar carrinho
  let cart = [];
  let total = 0;
  let total_itens = 0;
  let total_itens_carrinho = document.querySelector('.total-itens');
  let total_carrinho = document.querySelector('.total-carrinho');
  
  //criar função para adicionar produtos ao carrinho
  function add_carrinho(id, nome, preco, imagem, quantidade){
    carrinho.push({
      id: id,
      nome: nome,
      preco: preco,
      imagem: imagem,
      quantidade: quantidade
    });
    total_itens = total_itens + quantidade;
    total_itens_carrinho.innerHTML = total_itens;
    total_carrinho.innerHTML = total;
    console.log(carrinho);
  }

  //criar função para remover produtos do carrinho
  function remover_carrinho(id){
    for(let i = 0; i < carrinho.length; i++){
      if(carrinho[i].id == id){
        carrinho.splice(i, 1);
        total_itens = total_itens - 1;
        total_itens_carrinho.innerHTML = total_itens;
        total_carrinho.innerHTML = total;
      }
    }
  }

  //criar função para atualizar quantidade de produtos no carrinho
  function atualizar_carrinho(id, quantidade){
    for(let i = 0; i < carrinho.length; i++){
      if(carrinho[i].id == id){
        carrinho[i].quantidade = quantidade;
        total_itens = total_itens - 1;
        total_itens_carrinho.innerHTML = total_itens;
        total_carrinho.innerHTML = total;
      }
    }
  }

  //criar função para mostrar produtos no carrinho
  function mostrar_carrinho(){
    let carrinho_div = document.querySelector('.carrinho');
    carrinho_div.innerHTML = '';
    for(let i = 0; i < carrinho.length; i++){
      carrinho_div.innerHTML += `
        <div class="carrinho-item">
          <div class="carrinho-imagem">
            <img src="${carrinho[i].imagem}" alt="">
          </div>
          <div class="carrinho-nome">
            ${carrinho[i].nome}
          </div>
          <div class="carrinho-preco">
            R$ ${carrinho[i].preco}
          </div>
          <div class="carrinho-quantidade">
            <button class="btn-menos" onclick="menos(${carrinho[i].id})">-</button>
            <span class="quantidade">${carrinho[i].quantidade}</span>
            <button class="btn-mais" onclick="mais(${carrinho[i].id})">+</button>
          </div>
          <div class="carrinho-remover">
            <button class="btn-remover" onclick="remover_carrinho(${carrinho[i].id})">X</button>
          </div>
        </div>
      `;
    }
  }

  //criar função para calcular o total do carrinho
  function calcular_total(){
    total = 0;
    for(let i = 0; i < carrinho.length; i++){
      total = total + (carrinho[i].preco * carrinho[i].quantidade);
    }
    total_carrinho.innerHTML = total;
  }

  //criar função para limpar carrinho
  function limpar_carrinho(){
    carrinho = [];
    total_itens = 0;
    total_itens_carrinho.innerHTML = total_itens;
    total_carrinho.innerHTML = total;
    mostrar_carrinho();
  }
