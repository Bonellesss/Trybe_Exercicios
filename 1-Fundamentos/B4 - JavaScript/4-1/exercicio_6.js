let peças = "QUeEn" 
peças = peças.toLowerCase();

switch (peças) {
    case "king":
        console.log("Um quadradro para todos os lados");
        break;
    case "bishop":
        console.log("diagonal");
        break;
    case "queen":
        console.log("Todos os lados");
        break;
    default:
        console.log("Vai procurar um manual!");
        break;
}