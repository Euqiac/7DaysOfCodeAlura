function start(){
    function soma(x,y) { const result = x+y; return result;}
    function subtração (x,y) {const result = x-y; return result;}
    function multiplicacao (x,y) {const result = x*y; return result;}
    function divisao (x,y) {const result = x/y; return result;}

    var continuar = 1;

    while(continuar == 1){
        const operacao = prompt("Escolha uma operação:\n Soma[1]\n Subtração[2]\n Multiplicação[3]\n Divisão[4]\n");
        const x = parseInt(prompt("Digite o primeiro valor:"))
        const y = parseInt(prompt("Digite o segundo valor:"))

        switch(parseInt(operacao)){
            case 1:
                alert("O resultado da soma é " + soma(x,y));
                break;
            case 2:
                alert("O resultado da subtração é " + subtração(x,y));
                break;
            case 3:
                alert("O resultado da multiplicação é: " + multiplicacao(x,y));
                break;
            case 4:
                if (y == 0){
                    alert("Não é possível fazer divisões por 0!")
                } else {
                    alert("O resultado da divisão é: " + divisao(x,y));
                }
                break;
        }

        continuar = prompt("Deseja continuar? Sim[1] ou não[2]?");
    }

    alert("Até a próxima!")
}