import { Injectable } from '@angular/core';
import { NationaliteitService } from './nationaliteit/nationaliteit.service';
import { Nationaliteit } from './nationaliteit/nationaliteit';
import { Identiteit } from './identiteit';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IdentiteitService {

  private identiteitSubject = new Subject<Identiteit>();

  geevalueerdeIdentiteit$: Observable<Identiteit>;

  constructor(nationaliteitService: NationaliteitService) {
      this.geevalueerdeIdentiteit$ = nationaliteitService.evaluatedNationaliteit$.pipe(
        map(this.mapNaarIdentiteit),
        map(this.evaluateIdentiteit))
  }

  private mapNaarIdentiteit(nationaliteit: Nationaliteit): Identiteit{
    // Ideally you combineLatest of adres and nationaliteit and then create identitieit for that...
    // for noz just nationaliteit...
    const identiteit = Identiteit.maakIdentiteit();
    return {
      ...identiteit,
      nationaliteit: nationaliteit
    }
  }

  private evaluateIdentiteit(identiteit: Identiteit): Identiteit{
    // evalueer identiteit spcifieke zaken ... geen zaken van nationaliteit of adres!!
    console.log('identiteit geevalueerd');
    return identiteit;
  }
}
