let imHere = document.getElementById("elementoOndeVoceEsta")
let parent = imHere.parentNode
let firstGrandson = imHere.firstChild
let brother = document.createElement('section')
let child = document.createElement('section')
let granChild = document.createElement('section')

parent.style.color = 'red'

brother.innerHTML = '<p>fff</p>'
parent.appendChild(brother)

child.innerHTML = '<p>ssf</p>'
imHere.appendChild(child)

granChild.innerHTML = '<p>sdfdfdsfsds</p>'
firstGrandson.appendChild(granChild)

console.log(firstGrandson);
console.log(document.getElementById("primeiroFilhoDoFilho").innerText);

let childrens = document.querySelectorAll('#paiDoPai')
for (let index = childrens.firsrtElementChild; index !== null;index = childrens.nextElementSibling) {
    
    childrens.removeChild(index)
    

}