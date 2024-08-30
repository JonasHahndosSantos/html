const nota1 = document.getElementById('num1')
const nota2 = document.getElementById('num2')
const nota3 = document.getElementById('num3')
const result = document.getElementById('result')
function media(){ 
    if(num1.value <0 || num1.value >1.5 ) {
        alert('notas erras. digite novamente')
}  else if(num2.value < 0 || num2.value >2.5 ){
    alert('notas erras. digite novamente')
}else if(num3.value < 0 || num3.value >6 ){
    alert('notas erras. digite novamente')
}else{
    let soma = Number(num1.value) + Number(num2.value) + Number(num3.value)
        if(soma>=6){
            result.innerText = 'Resultado: Nota ' + soma + '. Aprovado. Parabéns.'
        } else{
            result.innerText = 'Resultado: Nota ' + soma + '. Reprovado. Reforce seus estudos para realização da AF.'
        }
}
    
}
function limpar(){    
    num1.value=''
    num2.value = ''
    num3.value=''
    result.innerText ='Resultado:'
    
    
}
function semFoco(){
    if(num1.value <0 || num1.value >1.5 ) {
        alert('notas erras. digite novamente')
}  else if(num2.value < 0 || num2.value >2.5 ){
    alert('notas erras. digite novamente')
}else if(num3.value < 0 || num3.value >6 ){
    alert('notas erras. digite novamente')
}else{

}
}