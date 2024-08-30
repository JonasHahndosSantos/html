function ola(){
    alert('ola!')
}

function olaNome(nome){
    alert('ola ${ nome}')
}
//olaNome(jonas)

function olaNomeIdade (nome, idade){
    alert(`Ola ${nome}, voce tem ${idade} anos`)
}
//olaNomeIdade(jonas, 20)

function saudacao(){
    const nome = document.getElementById('nome')
    if(nome.value == ''){
        alert('preencha seu nome')
        nome.focus()
    }else{
        alert (`ola ${nome.value}`)
    }
    
}

const mouse = document.getElementById('mouse')

function mouseCima(){
    mouse.innerText = 'mouse vivo'
    mouse.style.color = 'green'
}
function mouseFora(){
    mouse.innerText = 'mouse morto.'
    mouse.style.color = 'red'
}
function textoMudou(){
    alert('texto mudou')
}
function emFoco(){
    const nome = document.getElementById('nome')
    nome.style.fontSize = '1.2rem'
}
function semFoco(){
    const nome = document.getElementById('nome')
    nome.style.fontSize = '1rem'
}