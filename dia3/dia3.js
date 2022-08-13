function start(){
    var stack = prompt("Quer seguir para Front-End [digite 1] ou para Back-End [digite 2]?");

    if (stack == 1){
        prompt("Quer aprender React [1] ou Vue[2]?");
    } else if (stack == 2){
        prompt("Quer aprender C#[1] ou Java[2]?");
    } else {
        alert("Opção inexistente!");
    }

    var seguir = prompt("Prefere seguir se especializando na área escolhida [1] ou seguir se desenvolvendo para se tornar Fullstack[2]?");

    if (seguir == 1){
        alert("Boa sorte nessa sa escolha! Siga nesse caminho e você terá muito sucesso!");
    } else if (seguir == 2){
        alert("Será uma tarefa dificil, mas você tem potencial. Parabéns pela escolha!");
    } else {
        alert("Opção inexistente!");
    }

    var cont = 1;

    while (cont == 1){
        var resp = prompt("Tem mais alguma tecnologia que você gostaria de aprender? sim ou não?")

        if (resp === 'sim'){
            prompt("Qual?");
            cont = 1;
        } else {
            alert("Entendo. Boa sorte no caminho do aprendizado!");
            cont = 0;
        }
    }

}