
const form = document.getElementById("formCadastro");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const quantidade = Number(document.getElementById("quantidade").value);
    const preco = Number(document.getElementById("preco").value);

    const msgErro = document.getElementById("msgErro");

    if (!nome || quantidade <= 0 || preco <= 0) {
      msgErro.textContent = "Preencha todos os campos corretamente!";
      return;
    }

    const sementes = JSON.parse(localStorage.getItem("sementes")) || [];

    sementes.push({ nome, quantidade, preco });
    localStorage.setItem("sementes", JSON.stringify(sementes));

    form.reset();
    msgErro.textContent = "Semente cadastrada com sucesso!";
    msgErro.style.color = "green";
  });
}



const tabela = document.getElementById("tabelaSementes");

if (tabela) {
  const sementes = JSON.parse(localStorage.getItem("sementes")) || [];

  sementes.forEach(s => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${s.nome}</td>
      <td>${s.quantidade}</td>
      <td>R$ ${s.preco.toFixed(2)}</td>
    `;
    tabela.appendChild(linha);
  });
}
