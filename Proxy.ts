interface ProxyInterface {
  fly(): void;
  run(): void;
  jump(): void;
}

class MyItem implements ProxyInterface {
  fly(): void {
      console.log("Этот объект летает!");
  }

  run(): void {
      console.log("Этот объект бежит");
  }
  
  jump(): void {
    console.log("Этот объект прыгает");
}

}

class MyProxy implements ProxyInterface {
  private item: ProxyInterface | null = null;

  public fly(): void {
      if (this.item == null) {
          this.item = new MyItem();
      }
      this.item.fly();
  }

  public run(): void {
      if (this.item == null) {
          this.item = new MyItem();
      }
      this.item.run();
  }

  public jump(): void {
    if (this.item == null) {
        this.item = new MyItem();
    }
    this.item.jump();
}
}

const proxy = new MyProxy();
proxy.fly();
proxy.run();
proxy.jump();