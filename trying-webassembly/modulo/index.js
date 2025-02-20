import init, { texto } from "./pkg/modulo.js";

async function executar() {
  await init();

  const addTechBtn = document.getElementById("addTechBtn");
  const form = document.getElementById("devForm");
  const developers = [];
  let inputRows = 0;

  addTechBtn.addEventListener("click", function (ev) {
    const h2 = document.getElementById("h2");
    h2.innerText = texto();

    const stackInputs = document.getElementById("stackInputs");

    const newRow = document.createElement("li");
    const rowIndex = inputRows;
    inputRows++;
    newRow.id = "inputRow-" + rowIndex;
    newRow.className = "inputRow";

    const techNameLabel = createLabel("Nome: ", "techName-" + rowIndex);
    const techNameInput = createInput("techName-" + rowIndex, null, "techName");

    const expLabel = createLabel("Experiência: ");
    const id1 = "expRadio-" + rowIndex + ".1";
    const expRadio1 = createInput(
      id1,
      "0-2 anos",
      "techExp-" + rowIndex,
      "radio"
    );
    const expLabel1 = createLabel("0-2 anos", id1);
    const id2 = "expRadio-" + rowIndex + ".2";
    const expRadio2 = createInput(
      id2,
      "3-4 anos",
      "techExp-" + rowIndex,
      "radio"
    );
    const expLabel2 = createLabel("3-4 anos", id2);
    const id3 = "expRadio-" + rowIndex + ".3";
    const expRadio3 = createInput(
      id3,
      "5+ anos",
      "techExp-" + rowIndex,
      "radio"
    );
    const expLabel3 = createLabel("5+ anos", id3);

    const removeRowBtn = document.createElement("button");
    removeRowBtn.type = "button";
    removeRowBtn.innerText = "Remover";
    removeRowBtn.addEventListener("click", function () {
      stackInputs.removeChild(newRow);
    });

    newRow.append(
      techNameLabel,
      techNameInput,
      expLabel,
      expRadio1,
      expLabel1,
      expRadio2,
      expLabel2,
      expRadio3,
      expLabel3,
      removeRowBtn
    );

    stackInputs.appendChild(newRow);
  });

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();

    const fullnameInput = document.getElementById("fullname");
    const inputRows = document.querySelectorAll(".inputRow");

    let technologies = [];
    inputRows.forEach(function (row) {
      // #rowId input[name="techName"]
      const techName = document.querySelector(
        "#" + row.id + ' input[name="techName"]'
      ).value;
      const techExp = document.querySelector(
        "#" + row.id + ' input[type="radio"]:checked'
      ).value;
      technologies.push({ name: techName, exp: techExp });
    });

    const newDev = {
      fullname: fullnameInput.value,
      technologies: technologies,
    };
    developers.push(newDev);
    alert("Dev cadastrado com sucesso!");

    fullnameInput.value = "";
    inputRows.forEach(function (row) {
      row.remove();
    });

    console.log(developers);
  });
}

function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}

function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

executar();

// Buffers e Views

// buffers com 256
const bufferMemoria = new ArrayBuffer(256);

// Views
const fullView = new Uint8Array(bufferMemoria);

// Outros exemplos de views que especificam o deslocamento inicial e o número de elementos
const viewPrimeiraMetade = new Uint8Array(bufferMemoria, 0, 128) // começa na posição 0 e avança 128 posições, parando na 128
const viewTerceiroQuarto = new Uint8Array(bufferMemoria, 128, 64) // começa no 128 e avança 64 posições, parando na posição 192, ou seja de 128 ate 192 pe o 3/4
const resto = new Uint8Array(bufferMemoria, 192) // aqui indico apenas o inicio d deslocamento

console.log(bufferMemoria.byteLength) // 256