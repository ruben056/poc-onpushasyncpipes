import { Veld } from '../../../common/model/veld';
import { Blok } from '../../../common/model/blok';

export class Nationaliteit{

  constructor(
    public blok: Blok = Blok.maakZichtbareBlok(),
    public nationaliteit: Veld<string> = Veld.maakLeegZichtbaarVeld<string>(),
    public nietEerBlok: Blok = Blok.maakOnZichtbareBlok() // todo don't like this here each blok should have its own model?
  ){}

  static maakNationaliteit(): Nationaliteit{
    return new Nationaliteit();
  }
}
