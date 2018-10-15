export class Blok {

  constructor(public zichtbaar = false){
  }

  static maakOnZichtbareBlok(): Blok{
    return new Blok();
  }

  static maakZichtbareBlok(): Blok{
    return new Blok(false);
  }
}
