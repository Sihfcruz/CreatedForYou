

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
    30.00,
    "Caneca",
    "Cerâmica branca (325 ml) com a sua foto favorita e o seu nome do outro lado. Simples, prática e ideal para o dia a dia.",
    "images/caneca.jpg"
  ),
  new Produto(
    "Caneca Personalizada",
    35.00,
    "Caneca",
    "Caneca  branca (325 ml) com a sua foto favorita e o seu nome do outro lado. Simples, prática e ideal para o dia a dia.",
    "images/caneca_Iot.jpg"
  ),
  new Produto(
    "Almofada Personalizada",
    40.00,
    "Almofada",
    "Almofada (40x40 cm) com a foto que deseja ",
    "images/alfomofada_personalizada.png"
  )
];

const containerCatalogo = document.querySelector('#catalogo');

function criarCardProduto(produto) {
  const col = document.createElement('div');
  col.className = 'col-12 col-md-6 col-lg-4';

  const card = document.createElement('article');
  card.className = 'card h-100';

  card.innerHTML = `
    <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}" style="height: 220px; object-fit: cover;">
    <div class="card-body">
      <h5 class="card-title fw-bold">${produto.nome}</h5>
      <p class="card-text text-muted">${produto.categoria}</p>
      <p class="card-text fs-5 fw-bold text-success">${produto.formatarPreco()}</p>
    </div>
    <div class="card-footer bg-transparent border-top-0 pb-3">
      <button class="btn btn-info w-100"
              data-bs-toggle="modal"
              data-bs-target="#modalProduto"
              data-nome="${produto.nome}"
              data-categoria="${produto.categoria}"
              data-preco="${produto.formatarPreco()}"
              data-descricao="${produto.descricao}">
        Ver detalhes
      </button>
    </div>
  `;

  col.appendChild(card);
  return col;
}

function renderizarCatalogo() {
  containerCatalogo.innerHTML = '';
  catalogo.forEach(produto => {
    containerCatalogo.appendChild(criarCardProduto(produto));
  });
}

renderizarCatalogo();

document.addEventListener('show.bs.modal', (event) => {
  const btn = event.relatedTarget;
  if (!btn) return;

  document.getElementById('modalNome').textContent = btn.getAttribute('data-nome');
  document.getElementById('modalCategoria').textContent = btn.getAttribute('data-categoria');
  document.getElementById('modalPreco').textContent = btn.getAttribute('data-preco');
  document.getElementById('modalDescricao').textContent = btn.getAttribute('data-descricao');
});
