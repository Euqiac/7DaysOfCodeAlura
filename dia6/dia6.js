function start(){ 
    let continuar = 1;
    const frutas = [];
    const verduras = [];
    const laticinios = [];
    const congelados = [];
    const doces = [];
    const limpeza = [];
    const carnes = [];

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

        let finalizar = prompt("Deseja continuar? sim[1] ou não[2]");
        if (parseInt(finalizar) == 2){
            continuar = 2;
            break;
        }

        let acao = prompt("Deseja adicionar[1] ou excluir[2] itens? Selecione 1 ou 2");
        if (parseInt(acao) == 1){
            continuar = 1;
            continue;
        }

        while (parseInt(acao) == 2){

            const frutasString = "Frutas: " + frutas.join(', ');
            const verdurasString = "Verduras: " + verduras.join(', ');
            const laticiniosString = "Laticinios: " + laticinios.join(', ');
            const congeladosString = "Congelados: " + congelados.join(', ');
            const docesString = "Doces: " + doces.join(', ');
            const limpezaString = "Limpeza: " + limpeza.join(', ');
            const carnesString = "Carnes: " + carnes.join(', ');
    
            var lista = frutasString + "\n" + verdurasString + "\n" + laticiniosString + "\n" + congeladosString + "\n" + docesString + "\n" + limpezaString + "\n" + carnesString;

            const excCategoria = prompt("Selecione qual a categoria: frutas[1], verduras[2], laticinios[3], congelados[4], doces[5], limpeza[6] ou carnes[7]:\n" + lista );

            var vazia = false;
            var excluido = false;

                switch (parseInt(excCategoria)){
                    case 1:
                        if(frutas.length == 0){
                            alert("Categoria vazia!");
                            break;
                        }else{
                            const excProduto = prompt(frutasString + "\n Digite o produto que deseja excluir: ");
                            var indice = frutas.indexOf(excProduto);
                            frutas.splice(indice,1);
                            excluido = true;
                        }
                        break;
                    case 2:
                        if(verduras.length == 0){
                            alert("Categoria vazia!");
                            break;
                        }else{
                            const excProduto = prompt(verdurasString + "\n Digite o produto que deseja excluir: ");
                            var indice = verduras.indexOf(excProduto);
                            verduras.splice(indice,1);
                            excluido = true;
                        }
                        break;
                    case 3:
                        if(laticinios.length == 0){
                            alert("Categoria vazia!");
                            break;
                        }else{
                            const excProduto = prompt(laticiniosString + "\n Digite o produto que deseja excluir: ");
                            var indice = laticinios.indexOf(excProduto);
                            laticinios.splice(indice,1);
                            excluido = true;
                        }
                        break;
                    case 4:
                        if(congelados.length == 0){
                            alert("Categoria vazia!");
                            break;
                        }else{
                            const excProduto = prompt(congeladosString + "\n Digite o produto que deseja excluir: ");
                            var indice = congelados.indexOf(excProduto);
                            congelados.splice(indice,1);
                            excluido = true;
                        }
                        break;
                    case 5:
                        if(doces.length == 0){
                            alert("Categoria vazia!");
                            break;
                        }else{
                            const excProduto = prompt(docesString + "\n Digite o produto que deseja excluir: ");
                            var indice = doces.indexOf(excProduto);
                            doces.splice(indice,1);
                            excluido = true;
                        }
                        break;
                    case 6:
                        if(limpeza.length == 0){
                            alert("Categoria vazia!");
                            break;
                        }else{
                            const excProduto = prompt(limpezaString + "\n Digite o produto que deseja excluir: ");
                            var indice = limpeza.indexOf(excProduto);
                            limpeza.splice(indice,1);
                            excluido = true;
                        }
                        break;
                    case 7:
                        if(carnes.length == 0){
                            alert("Categoria vazia!");
                            break;
                        }else{
                            const excProduto = prompt(carnesString + "\n Digite o produto que deseja excluir: ");
                            var indice = carnes.indexOf(excProduto);
                            carnes.splice(indice,1);
                            excluido = true;
                        }
                        break;
            }

            if(excluido == true){
                alert("O produto foi excluido!")
            }

            acao = prompt("Deseja excluir mais algum item? sim[1] ou não[2]?");
            if (parseInt(acao) == 1){
                acao = 2;
            } else if (parseInt(acao) == 2){
                acao = 1;
            }
        }

        continuar = prompt("Deseja continuar? sim[1] ou não[2]?")
    }    


        const frutasString = "Frutas: " + frutas.join(', ');
        const verdurasString = "Verduras: " + verduras.join(', ');
        const laticiniosString = "Laticinios: " + laticinios.join(', ');
        const congeladosString = "Congelados: " + congelados.join(', ');
        const docesString = "Doces: " + doces.join(', ');
        const limpezaString = "Limpeza: " + limpeza.join(', ');
        const carnesString = "Carnes: " + carnes.join(', ');

        alert("----Lista Final----\n" + frutasString + "\n" + verdurasString + "\n" + laticiniosString + "\n" + congeladosString + "\n" + docesString + "\n" + limpezaString + "\n" + carnesString)

}