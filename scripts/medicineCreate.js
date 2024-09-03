import availableMedicine from '../data/medicine.json' with {type: "json"}

document
  .getElementById("form-medicine")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("nome").value;
    const dosagem = document.getElementById("dosagem").value;
    const lab = document.getElementById("lab").value;
    const indicacao = document.getElementById("indicacao").value;
    const descricao = document.getElementById("descricao").value;
    const preco = parseFloat(document.getElementById("preco").value);

    //Create the medicine object
    const newMedicine = {
      image: "../assets/medicine_box.png",
      nome: name,
      dosagem: dosagem,
      marca: lab,
      indicacao: indicacao,
      descricao: descricao,
      preco: parseFloat(preco).toFixed(2),
      preco_com_desconto: (preco * 0.9).toFixed(2)
    };

    jsonMedicine.availableMedicine.push(newMedicine)

    console.log(JSON.stringify(availableMedicine, null, 2))

    alert("Medicamento adicionado!");
  });


