import jsonMedicine from '../data/medicine.json' with {type: "json"}
// salvar info do formulário dentro do JSON
// JSON.stringify(jsonFile) transforma em string

document
  .getElementById("form-medicine")
  .addEventListener("submit", function (event) {
    event.preventDefault(); //Prevents the form from submitting the traditional way

    // Capture form information
    const name = document.getElementById("nome").value;
    const lab = document.getElementById("lab").value;
    const price = parseFloat(document.getElementById("preco").value); //Convert string to float

    //Create the medicine object
    const newMedicine = {
      image: "../assets/medicine_box.png", //default image
      nome: name,
      dosagem: "10mg", //default dosagem
      marca: lab,
      indicacao: "Analgésico/Antipirético", //default indication
      descricao: "Ajuda reduzir inflamação", //default description
      preco: parseFloat(price).toFixed(2), //str to int, and 2 decimal cases
      preco_com_desconto: (price * 0.9).toFixed(2), //Add 10% discount
    };
    
    jsonMedicine.availableMedicine.push(newMedicine)

    console.log(JSON.stringify(jsonMedicine, null, 2))

    alert("Medicamento adicionado!");
  });


