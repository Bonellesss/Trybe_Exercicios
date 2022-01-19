const wakeUp = () => 'acordando!!'
const coffeTime = () => 'Bora tomar café!!'
const sleepTime = () => 'Partiu dormir!!'
const doingThings = (func) => console.log(func());

doingThings(wakeUp)
doingThings(coffeTime)
doingThings(sleepTime)
