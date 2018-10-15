export class Veld<T> {

  constructor(public waarde: T = undefined, public zichtbaar = false){
  }

  static maakLeegOnzichtbaarVeld<T>():Veld<T>{
    return new Veld<T>();
  }

  static maakLeegZichtbaarVeld<T>():Veld<T>{
    return new Veld<T>(undefined, true);
  }

  static maakOnZichtbaarVeld<T>(value: T):Veld<T>{
    return new Veld<T>(value);
  }

  static maakZichtbaarVeld<T>(value: T):Veld<T>{
    return new Veld<T>(value, true);
  }
}
