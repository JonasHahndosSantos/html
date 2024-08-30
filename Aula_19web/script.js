//alert('oi')
const titulo = document.getElementById('titulo')
titulo.style.color ='green'
titulo.style.border = '2px solid'
titulo.style.backgroundColor ='lightgrey'
// innerhtml poder criar outro html em uma linha
//innerText muda o texto
titulo.innerHTML ='conhecendo <br> o <br> DOM'
titulo.style.textAlign ='center'

const paragrafos = document.getElementsByTagName('p')
paragrafos[0].style.color = 'pink'
paragrafos[1].style.color = 'blue'
for(let i =0; i<paragrafos.length; i++){
    paragrafos[i].style.fontSize = '24px'
}

for (const  p of paragrafos) {
    p.style.backgroundColor='lightgreen'
    
}
const classes = document.getElementsByClassName('negrito')
for (const c of classes) {
    c.style.fontWeight = '400'
    c.style.fontStyle = 'italic'
    c.style.color = 'red'
}
const p = document.querySelector('p')
const elementos = document.querySelectorAll('div p, h1')
elementos[1].style.fontSize = '36px'

function alterar(){
const img = document.querySelector('img')
if(img.src.includes('js_1.jpeg')){
   img.src = 'js_2.jpeg' 
}else{
    img.src = 'js_1.jpeg'
}
}


const li = document.createElement('li')
li.innerText = 'Elemento 1'
const li2 = document.createElement('li')
li2.innerText = 'Elemento 2'

const pai = document.getElementById('pai')
pai.appendChild(li)
pai.appendChild(li2)

//titulo.remove() removo algo
//p.remove()

const h2 = document.querySelector('h2')
//adicionando a classe verde no elemento h2 
h2.classList.add('verde')
//add um evento de click no h2
h2.addEventListener('click', toggleClasse)
h2.addEventListener('mouseover', function(){
    alert('oi')
})
h2.style.textAlign ='center'
//remobvendo a classe negrito do primeiro paragrafo
paragrafos[0].classList.remove('negrito')

function toggleClasse(){
    h2.classList.toggle('verde')
}
