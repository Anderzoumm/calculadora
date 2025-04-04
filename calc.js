let x1 = document.getElementById('x1');
let x2 = document.getElementById('x2');
let opracao = document.getElementById('opr');
let botao = document.getElementById('botao');
let resultado = document.getElementById('resp');
botao.addEventListener('click', calculo);

function calculo() {
    let valor1 = parseFloat(x1.value) || 0; // Garante que valores inválidos sejam tratados como 0
    let valor2 = parseFloat(x2.value) || 0; // o parsefloat converte a str em numero.
        if (opracao.value === "Soma") { // Verifica a operação selecionada
        res = valor1 + valor2; // Soma os valores
        }
        else if (opracao.value === "Subtração") {
            res = valor1 - valor2;
        }
        else if (opracao.value === "Multiplicação") { 
            res = valor1 * valor2;
        }
        else if (opracao.value === "Divisão") {
            res = valor1 / valor2;
        }
            resultado.textContent = res; // Atualiza o elemento na interface com o resultado
}
