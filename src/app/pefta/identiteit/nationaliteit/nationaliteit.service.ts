import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, merge } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Nationaliteit } from './nationaliteit';
// import { Veld } from '../../../common/model/veld';

@Injectable({
  providedIn: 'root'
})
export class NationaliteitService {

  // private nationaliteitSubject = new Subject<Nationaliteit>();
  private nationaliteitInputSubject = new BehaviorSubject<string>('');

  // nationaliteit$: Observable<Nationaliteit>
  evaluatedNationaliteit$: Observable<Nationaliteit>;

  constructor() {

    // this.nationaliteitSubject.pipe(tap((nat)=>{
    //   console.log('natsubject:',JSON.stringify(nat));
    // }));
    // this.nationaliteitInputSubject.pipe(tap((nat)=>{
    //   console.log('natinputsubject:',JSON.stringify(nat));
    // }));
    // this.nationaliteit$ = merge(
    //     this.nationaliteitInputSubject.pipe(map(this.mapToNationaliteit)),
    //     this.nationaliteitSubject.pipe(tap((nat)=>console.log('what:',JSON.stringify(nat)))));
    // this.evaluatedNationaliteit$ = this.nationaliteit$.pipe(map(this.evaluate));
    //todo subscribe to suggestion service etc...

    this.evaluatedNationaliteit$ = this.nationaliteitInputSubject.pipe(
      map(this.mapToNationaliteit), map(this.evaluate));

    this.nationaliteitInputChanged('sadf');
  }

  nationaliteitChanged(nationaliteit: Nationaliteit): void{
    // this.nationaliteitSubject.next(nationaliteit);
  }

  nationaliteitInputChanged(nationaliteitInput: string): void{
    this.nationaliteitInputSubject.next(nationaliteitInput);
  }

  private mapToNationaliteit(input: string){
    const nationaliteit = Nationaliteit.maakNationaliteit();
    return {
      ...nationaliteit,
      nationaliteit: {
        ...nationaliteit.nationaliteit,
        waarde: input
      }
    };
  }

  private evaluate(nationaliteit: Nationaliteit): Nationaliteit{
    return {
      ...nationaliteit,
      nietEerBlok: {
        ...nationaliteit.nietEerBlok,
        zichtbaar: !!nationaliteit.nationaliteit.waarde && nationaliteit.nationaliteit.waarde.length % 2 === 0
      }
    };
  }
}
