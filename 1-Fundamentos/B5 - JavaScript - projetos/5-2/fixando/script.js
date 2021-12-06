let imHere = document.getElementById("elementoOndeVoceEsta")
let parent = imHere.parentNode
let firstGrandson = document.getElementById("elementoOndeVoceEsta").firstChild
let brother = document.createElement('section')
let child = document.createElement('section')

parent.style.color = 'red'

parent.appendChild(brother)

child.innerHTML = <p>ssf</p>
imHere.appendChild(child)

console.log(firstGrandson);
console.log(document.getElementById("primeiroFilhoDoFilho").innerText);
