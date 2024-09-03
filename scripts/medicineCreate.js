import jsonMedicine from '../data/medicine.json' with {type: "json"}
// salvar info do formulário dentro do JSON
// JSON.stringify(jsonFile) transforma em string

document
  .getElementById("form-medicine")
  .addEventListener("submit", function (event) {
    event.preventDefault(); //Prevents the form from submitting the traditional way

    // Capture form information
    const name = document.getElementById("nome").value;
    const dosagem = document.getElementById("dosagem").value;
    const lab = document.getElementById("lab").value;
    const indicacao = document.getElementById("indicacao").value;
    const descricao = document.getElementById("descricao").value;
    const preco = parseFloat(document.getElementById("preco").value);

    //Create the medicine object
    const newMedicine = {
      image: "../assets/medicine_box.png", //default image
      nome: name,
      dosagem: dosagem, //default dosagem
      marca: lab,
      indicacao: indicacao, //default indication
      descricao: descricao, //default description
      preco: parseFloat(preco).toFixed(2), //str to int, and 2 decimal cases
      preco_com_desconto: (preco * 0.9).toFixed(2), //Add 10% discount
    };
    
    jsonMedicine.availableMedicine.push(newMedicine)

    console.log(JSON.stringify(jsonMedicine, null, 2))

    alert("Medicamento adicionado!");
  });


