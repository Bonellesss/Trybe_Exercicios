"use strict";
class tv {
    constructor(b, s, r, c) {
        this.turnOn = () => {
            console.log(`Marca da Tv: ${this._brand}`);
            console.log(`Tamanho da Tv: ${this._size}"`);
            console.log(`Resolução da Tv: ${this._resolution}p`);
            console.log(`Conexões da Tv: ${this._connections}`);
        };
        this._brand = b;
        this._size = s;
        this._resolution = r;
        this._connections = c;
        this._connectedTo = null;
    }
    get connectedTo() {
        return this._connectedTo;
    }
    set connectedTo(connection) {
        if (this._connections.includes(connection)) {
            this._connectedTo = connection;
        }
        else {
            console.log('Sorry, connection unavailable!');
        }
    }
}
const tv1 = new tv('Semp', 32, 1080, ['HDMI', 'internet', 'vga']);
tv1.turnOn();
console.log(tv1.connectedTo);
tv1.connectedTo = 'bluetooth';
tv1.connectedTo = 'HDMI';
console.log(`A tv está conectada via: ${tv1.connectedTo}`);
