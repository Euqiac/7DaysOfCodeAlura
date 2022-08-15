function start(){
    // const produto = document.querySelector("#produto").value;
    // const categoria = document.querySelector("#categoria").value;
    let continuar = 1;
    const frutas = [];
    const verduras = [];
    const laticinios = [];
    const congelados = [];
    const doces = [];
    const limpeza = [];
    const carnes = [];
    const arrayCategorias = ['frutas','verduras', 'laticinios', 'congelados', 'doces', 'limpeza', 'carnes']

    while (continuar == 1){
        const produto = prompt("Digite o nome do seu produto:");
        const categoria = prompt("Digite em qual das categorias a seguir, o produto se encaixa: frutas[1], verduras[2], laticinios[3], congelados[4], doces[5], limpeza[6] ou carnes[7]?");

        switch(parseInt(categoria)){
            case 1:
                frutas.push(produto);
                break;
            case 2:
                verduras.push(produto);
                break;
            case 3:
                laticinios.push(produto);
                break;
            case 4:
                congelados.push(produto);
                break;
            case 5:
                doces.push(produto);
                break;
            case 6:
                limpeza.push(produto);
                break;
            case 7:
                carnes.push(produto);
                break;
        }
        
        continuar = prompt("Deseja adicionar mais algum item? sim[1] ou não [2]");
    }    


        const frutasString = "Frutas: " + frutas.join(', ')
        const verdurasString = "Verduras: " + verduras.join(', ')
        const laticiniosString = "Laticinios: " + laticinios.join(', ')
        const congeladosString = "Congelados: " + congelados.join(', ')
        const docesString = "Doces: " + doces.join(', ')
        const limpezaString = "Limpeza: " + limpeza.join(', ')
        const carnesString = "Carnes: " + carnes.join(', ')
        alert(frutasString)
        alert(verdurasString)
        alert(laticiniosString)
        alert(congeladosString)
        alert(docesString)
        alert(limpezaString)
        alert(carnesString)
}