function start(){
    var palpite = document.querySelector("#numero").value;
    var numero = Math.floor(Math.random()*11);

    for (var i = 2; i > 0; i--){
        if (palpite <= 10 && palpite >= 0){
            if (palpite == numero){
                alert("Parabéns! Você Acertou!");
                break;
            } else {
                const msg_errou = `Você errou, mas ainda tem ${(i)} tentativas. Tente novamente.`
                alert(msg_errou)
                palpite = prompt("Digite outro número")
            }
        } else {
            alert("O valor digitado não está entre o intervalo determinado!");
            palpite = prompt("Digite outro número")
            i = i+1;
        }
    }

    if (i <= 0){
        const msg_perdeu = `Que pena, você perdeu. O número era ${numero}`
        alert(msg_perdeu)
    }
}