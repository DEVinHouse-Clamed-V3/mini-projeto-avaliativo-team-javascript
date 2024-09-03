function loadMedicine() {
  fetch("../data/medicine.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na resposta da rede");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Dados carregados:", data);
      renderMedicine(data.availableMedicine);
    })
    .catch((error) =>
      console.error("Erro ao carregar os dados no arquivo JSON", error)
    );
}

function renderMedicine(medicines) {
  let productContainer = document.getElementById("medicineList");
  productContainer.innerHTML = "";
  medicines.forEach((item) => {
    let medicineDiv = document.createElement("div");
    medicineDiv.className = "medicine-div";
    medicineDiv.innerHTML = `
  <div class="medicine-grid">
  <div class="card">
  <h3> ${item.nome}</h3>
  <h6> ${item.marca}</h6>
  <img src="${item.image}" alt="${item.nome}">
  <div class="med-description">
  <p> ${item.indicacao}. </p>
  <p> ${item.descricao} </p>
  </div>
  <p class="price" ><i class="fa-solid fa-tag"></i> R$: ${item.preco.toFixed(
    2
  )} </p>
  <p class ="discount"><i class="fa-regular fa-money-bill-1"></i> Preço com desconto: R$${item.preco_com_desconto.toFixed(
    2
  )}</p>
  <button class="buy-btn"><i class="fa-solid fa-cart-plus"></i> Adicionar ao carrinho</button>
  <button class="buy-btn"><i class="fa-solid fa-dollar-sign"></i> Comprar</button>
  </div>
  </div>
  `;
    productContainer.appendChild(medicineDiv);
  });
}
