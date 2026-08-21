document.addEventListener("DOMContentLoaded", () => {

    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btnAumentar-texto");
    const btnDiminuir = document.getElementById("btnDiminuir-texto");

    let tamanhoAtualFonte = 100;

    // Função de Alto Contraste
    btnContraste.addEventListener("click", () => {
        document.body.classList.toggle("auto-contraste");
        const ativo = document.body.classList.contains("auto-contraste");
        btnContraste.setAttribute("aria-pressed", ativo);
    });

    // Função Aumentar Texto
    btnAumentar.addEventListener("click", () => {
        if (tamanhoAtualFonte < 150) {
            tamanhoAtualFonte += 10;
            document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
        }
    });

    // Função Diminuir Texto
    btnDiminuir.addEventListener("click", () => {
        if (tamanhoAtualFonte > 90) {
            tamanhoAtualFonte -= 10;
            document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
        }
    });

});