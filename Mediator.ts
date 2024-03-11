
interface Mediator {
  notify(sender: object, event: string, value: number): void;
}

class ConcreteMediator implements Mediator {
  private engine: Engine;
  private dashboard: Dashboard;

  constructor(engine: Engine, dashboard: Dashboard) {
      this.engine = engine;
      this.engine.setMediator(this);
      this.dashboard = dashboard;
      this.dashboard.setMediator(this);
  }

  public notify(sender: object, event: string, value: number): void {
      if (event === 'changeTemp') {
          this.dashboard.setTemperature(value);
          console.log('Была изменена температура');
      }

      if (event === 'changeTurn') {
          this.dashboard.setTurn(value);
          console.log("Были изменены обороты двигателя")
      }

      if (event === 'changeMaxSpeed') {
        this.engine.senMaxSpeed(value);
        console.log('Была изменена макс скорость');
    }
  }
}

class ComponentCar {
  protected mediator: Mediator;

  constructor(mediator?: Mediator) {
      this.mediator = mediator!;
  }

  public setMediator(mediator: Mediator): void {
      this.mediator = mediator;
  }
}

class Engine extends ComponentCar {
  private temperature: number;
  private turn: number;
  private maxSpeed: number;

  public setTemperature(temperature: number): void {
    this.temperature = temperature
    console.log('Изменение температуры');
    this.mediator.notify(this, 'changeTemp', temperature);
  }

  public setTurn(turn: number): void {
    this.turn = turn;
    console.log('Изменение оборотов двигателя');
    this.mediator.notify(this, 'changeTurn', turn);
  }

  public senMaxSpeed(maxspeed: number) {
    this.maxSpeed = maxspeed;
    console.log('Была изменена макс скорость (в двигателе)');
  }
}

class Dashboard extends ComponentCar {
  private temperature: number;
  private turn: number;
  private maxSpeed: number;

  public setMaxSpeed(maxspeed: number): void {
      console.log('Изменена максимальная скорость');
      this.mediator.notify(this, 'changeMaxSpeed', maxspeed);
  }

  public setTemperature(temperature: number): void {
    this.temperature = temperature;
  }

  public setTurn(turn: number) {
    this.turn = turn;
  }
}

const engine = new Engine();
const dashboard = new Dashboard();
const mediator = new ConcreteMediator(engine, dashboard);

engine.setTemperature(55);
console.log('');
dashboard.setMaxSpeed(80);