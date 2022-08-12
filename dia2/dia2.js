function start(){
    var nome = document.querySelector("#name").value;
    var idade = document.querySelector("#idade").value;
    var linguagem = document.querySelector("#linguagem").value;
    
    var msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`
    
    alert(msg)
    
    const resp = prompt("Você gosta de estudar " + linguagem + "? Sim [1] ou Não [2]?");
    
    if (resp == 1){
        alert("Muito bom! Continue estudando e você terá muito sucesso");
    } else {
        alert("Ahh que pena... Já tentou aprender outras linguagens?")
    }
}



