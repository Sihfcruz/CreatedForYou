class Produto {
  constructor(nome, preco, categoria, descricao, imagem) {
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
    this.descricao = descricao;
    this.imagem = imagem;
  }

  formatarPreco() {
    return `R$ ${this.preco.toFixed(2).replace('.', ',')}`;
  }
}

const catalogo = [
  new Produto(
    "Caneca Personalizada",
    30.0,
    "Caneca",
    "Cerâmica branca (325 ml) com a sua foto favorita e o seu nome do outro lado. Simples, prática e ideal para o dia a dia.",
    "images/caneca.jpg"
  ),
  new Produto(
    "Caneca Personalizada",
    35.0,
    "Caneca",
    "Caneca branca (325 ml) com a sua foto favorita e o seu nome do outro lado. Simples, prática e ideal para o dia a dia.",
    "images/caneca_Iot.jpg"
  ),
  new Produto(
    "Almofada Personalizada",
    40.0,
    "Almofada",
    "Almofada (40x40 cm) com a foto que deseja.",
    "images/almofada_personalizada.png"
  ),
  new Produto(
    "Garrafa Personalizada",
    70.0,
    "Garrafa",
    "Garrafa personalizada com a foto do Marlon.",
    "images/garrafaMarlon.jpg"
  ),
  new Produto(
    "EcoBag Personalizada",
    25.0,
    "EcoBag",
    "EcoBag de tecido personalizada com arte, frase ou imagem. Uma opção útil para o dia a dia.",
    "images/ecobagMarlon.jpg"
  ),
  new Produto(
    "Garrafa com Foto",
    75.0,
    "Garrafa",
    "Garrafa personalizada com foto, ótima para presentear alguém com uma lembrança diferente.",
    "images/garrafa.png"
  ),
  new Produto(
    "Almofada Clássica",
    40.0,
    "Almofada",
    "Almofada branca pronta para receber uma personalização especial com foto ou mensagem.",
    "images/almofada.jpg"
  )
];

const containerCatalogo = document.querySelector('#catalogo');

function criarCardProduto(produto) {
  const col = document.createElement('div');
  col.className = 'col-12 col-md-6 col-lg-4';

  const card = document.createElement('article');
  card.className = 'card h-100 border-0 shadow-sm';

  card.innerHTML = `
    <div class="product-image">
      <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
      <span class="badge product-badge">${produto.categoria}</span>
    </div>

    <div class="card-body d-flex flex-column p-4">
      <h5 class="card-title fw-bold mb-2">${produto.nome}</h5>

      <p class="card-text text-secondary small flex-grow-1">
        ${produto.descricao}
      </p>

      <div class="d-flex justify-content-between align-items-center mt-3">
        <span class="product-price">${produto.formatarPreco()}</span>

        <button class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalProduto"
                data-nome="${produto.nome}"
                data-categoria="${produto.categoria}"
                data-preco="${produto.formatarPreco()}"
                data-descricao="${produto.descricao}">
          Ver detalhes
        </button>
      </div>
    </div>
  `;

  col.appendChild(card);
  return col;
}

function renderizarCatalogo() {
  if (!containerCatalogo) return;

  containerCatalogo.innerHTML = '';
  catalogo.forEach((produto) => {
    containerCatalogo.appendChild(criarCardProduto(produto));
  });
}

document.addEventListener('show.bs.modal', (event) => {
  const btn = event.relatedTarget;
  if (!btn) return;

  document.getElementById('modalNome').textContent = btn.getAttribute('data-nome');
  document.getElementById('modalCategoria').textContent = btn.getAttribute('data-categoria');
  document.getElementById('modalPreco').textContent = btn.getAttribute('data-preco');
  document.getElementById('modalDescricao').textContent = btn.getAttribute('data-descricao');
});

document.querySelectorAll('.object-option').forEach((botao) => {
  botao.addEventListener('click', () => {
    document.querySelectorAll('.object-option').forEach((item) => {
      item.classList.remove('selected');
    });

    botao.classList.add('selected');
  });
});

renderizarCatalogo();
