var res = document.createElement('p')
var calc = document.querySelector('div#calc')
res.setAttribute('class', 'res')
res.innerHTML = 'Preparando a contagem...'
calc.appendChild(res)

function contar(){

    let entrada = document.querySelectorAll('input')
    let inicio = Number(entrada[0].value)
    let fim = Number(entrada[1].value)
    let passo = Number(entrada[2].value)
    let contagem = " "
    
    if(inicio == 0 || fim == 0 || inicio == fim || inicio.length == 0 || fim.length == 0 || passo == 0 || passo.length == 0){
        
        res.innerHTML ='Impossivel proseguir! Revise os valores e prossiga'
        return 

    }else if(inicio > fim){
        //contagem decrescesnte
        for(inicio; inicio  >= fim; inicio -= passo){

            let proximo = `${inicio} &#128073 `
            let continuacao = contagem
            contagem =`${continuacao} ${proximo}` 
        
        }

    }else{
        //contagem crescesnte
        for(inicio; inicio  <= fim; inicio += passo){

            let proximo = `${inicio} &#128073 `
            let continuacao = contagem
            contagem =`${continuacao} ${proximo}`

        }

    }

    res.innerHTML = `${contagem}&#127937`
    
   
}