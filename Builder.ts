type CPU = {
  coreNum: number,
  frequency: number,
  manufacturer: 'AMD' | 'Intel'
}

type RAM ={
  volumeMember: number,
  manufacturer: string
}

type HDD = {
  volumeMember: number,
  manufacturer: string
}

type Motherboard = {
  formFactor: 'EATX' | 'Standard-ATX' | 'Micro-ATX' | 'Mini-ITX',
  manufacturer: string,
  soket: string
}


interface Computer {
    constructor();
    constructor(cpu: CPU);
    constructor(cpu: CPU, motherboard: Motherboard);
    constructor(cpu: CPU, motherboard: Motherboard, ram: RAM, hdd: HDD);
    constructor(cpu: CPU, motherboard: Motherboard, hdd: HDD);
}

class ComputerBuilder implements Computer {
  private cpu: CPU;
  private ram: RAM;
  private hdd: HDD;
  private motherboard: Motherboard;

  constructor();
  constructor(cpu: CPU);
  constructor(cpu: CPU, hdd: HDD);
  constructor(cpu: CPU, motherboard: Motherboard, hdd: HDD);
  constructor(cpu: CPU, motherboard: Motherboard, ram: RAM, hdd: HDD) {
    this.cpu = cpu;
    if(motherboard) {
      this.motherboard = motherboard;
    }
    if(ram) {
      this.ram = ram;
    }
    if(hdd) {
      this.hdd = hdd
    }
  }
}

