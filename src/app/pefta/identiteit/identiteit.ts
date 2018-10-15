import { Veld } from '../../common/model/veld';
import { Blok } from '../../common/model/blok';

import { Nationaliteit } from './nationaliteit/nationaliteit';

export class Identiteit{

  constructor(
    public blok: Blok = Blok.maakZichtbareBlok(),
    public nationaliteit: Nationaliteit = Nationaliteit.maakNationaliteit(),
    public nietEerBlok: Blok = Blok.maakOnZichtbareBlok()
  ){}

  static maakIdentiteit(): Identiteit{
    return new Identiteit();
  }
}
