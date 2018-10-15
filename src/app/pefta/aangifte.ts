import { Veld } from '../common/model/veld';
import { Blok } from '../common/model/blok';

import { Identiteit } from './identiteit/identiteit';

export class Aangifte{

  constructor(
    public identiteit: Identiteit = Identiteit.maakIdentiteit()
  ){}

  static maakAangifte(): Aangifte{
    return new Aangifte();
  }
}
