
    const num1 = document.getElementById('num1')
    const num2 = document.getElementById('num2')
    const result = document.getElementById('result')
function somar(){    
    let soma = Number(num1.value) + Number(num2.value)
    result.innerText = 'Resultado: ' + soma
    
    
}
function subitrair(){    
    let subitrair = Number(num1.value) - Number(num2.value)
    result.innerText = 'Resultado: ' + subitrair
    
    
}
function multiplicar(){    
    let multiplicar = Number(num1.value) * Number(num2.value)
    result.innerText = 'Resultado: ' + multiplicar
    
    
}

function dividir(){    
    
    if(Number(num2.value) ===0 || Number(num1.value ===0)){
        alert('Erro!! divisao por zero')
    } else{
        let dividir = Number(num1.value) / Number(num2.value)
        result.innerText = 'Resultado: ' + dividir.toFixed(2)
}
    
    
}
function limpar(){    
    num1.value=''
    num2.value = ''
    result.innerText ='Resultado:'
    
    
}
