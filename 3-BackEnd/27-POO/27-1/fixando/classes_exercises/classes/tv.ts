class tv  {
  private _brand: string;
  private _size: number;
  private _resolution: number;
  private _connections: string[];
  private _connectedTo: string | null;

  constructor(b: string, s: number, r: number, c: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
    this._connectedTo = null
  }

  turnOn = () => {
    console.log(`Marca da Tv: ${this._brand}`)
    console.log(`Tamanho da Tv: ${this._size}"`)
    console.log(`Resolução da Tv: ${this._resolution}p`)
    console.log(`Conexões da Tv: ${this._connections}`)
  }

  get connectedTo () {
    return this._connectedTo as any
  }

  set connectedTo (connection: string) {
    if (this._connections.includes(connection)) {
      this._connectedTo = connection;
    } else {
      console.log('Sorry, connection unavailable!')
    }
  }
}

const tv1 = new tv('Semp', 32, 1080, ['HDMI', 'internet', 'vga']);

tv1.turnOn();
console.log(tv1.connectedTo);
tv1.connectedTo = 'bluetooth';
tv1.connectedTo = 'HDMI';
console.log(`A tv está conectada via: ${tv1.connectedTo}`);
