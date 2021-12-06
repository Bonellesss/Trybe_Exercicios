let imHere = document.getElementById("elementoOndeVoceEsta")
let parent = imHere.parentNode
let firstGrandson = document.getElementById("elementoOndeVoceEsta").firstChild



parent.style.color = 'red'

console.log(firstGrandson);
console.log(document.getElementById("primeiroFilhoDoFilho").innerText);