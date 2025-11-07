document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.getElementById("cursor");
  const linha = document.getElementById("linha");
  const terminal = document.getElementById("terminal");
  const themeIcon = document.getElementById("theme-icon");

  const linhasTexto = [
    "Inicializando...",
    "...",
    "Executando Logica.exe...",
    "Inicializando BancoDeDados.exe...",
    "Executando AmbiComp.exe...",
    "Executando FrontEnd.exe",
    "Inicializando User/GABRIEL COELHO.exe",
    "//------------------------------------------------------------//",
    "∘₊⟡──────────────────────────────────────────────────────────✧₊∘"
  ];

  let piscadas = 0;
  const intervaloPiscar = setInterval(() => {
    piscadas++;
    if (piscadas >= 3) {
      clearInterval(intervaloPiscar);
      cursor.classList.add("stop", "hidden");
      linha.remove();
      mostrarLinhas();
    }
  }, 1000);

  function mostrarLinhas() {
    let i = 0;
    const escrever = setInterval(() => {
      if (i < linhasTexto.length) {
        terminal.innerHTML += `<div class="linha">> ${linhasTexto[i++]}</div>`;
      } else {
        clearInterval(escrever);
      }
    }, 500);
  }

  // Alternância de tema
  document.getElementById("toggle-theme").addEventListener("click", () => {
    const isHacker = document.body.classList.toggle("Hacker-mode");
    themeIcon.src = isHacker ? "imagens/ModoEscuro.png" : "imagens/ModoClaro.png";
  });

  // Alternância o tamanho do "mini site" Creye
  document.getElementById("Creye-card").addEventListener("click", () => {
    const isCircle = document.body.classList.toggle("Circle-Creye-mode");
  });

  // Alternância o tamanho do "mini site" GeekBlossom
  document.getElementById("GeekBlossom-card").addEventListener("click", () => {
    const isCircle = document.body.classList.toggle("Circle-GeekBlossom-mode");
  });

});



