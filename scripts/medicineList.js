function loadMedicine() {
  fetch('../data/medicine.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na resposta da rede');
      }
      return response.json();
    })
    .then(data => {
      console.log('Dados carregados:', data);
      renderMedicine(data.availableMedicine);
    })
    .catch(error => console.error('Erro ao carregar os dados no arquivo JSON', error));
}

function renderMedicine(medicines) {
  let productContainer = document.getElementById("medicineList");
  productContainer.innerHTML = "";
  medicines.forEach(item => {
    let medicineDiv = document.createElement("div");
    medicineDiv.innerHTML = `
  <div class="medicine-grid">
  <div class="card">
  <p> ${item.nome}</p>
  <p> ${item.marca}</p>
  <img src="${item.image}" alt="${item.nome}" style="width: 100px; height: auto;">
  <p> ${item.indicacao} </p>
  <p> ${item.descricao} </p>
  <p> R$: ${item.preco.toFixed(2)} </p>
  <p>Preço com desconto: R$${item.preco_com_desconto.toFixed(2)}</p>
  </div>
  </div>
  `;
    productContainer.appendChild(medicineDiv);
  });
}