import { Component, OnInit } from '@angular/core';
import { Aangifte} from './aangifte';
import { NationaliteitService } from './identiteit/nationaliteit/nationaliteit.service';
import { Nationaliteit } from './identiteit/nationaliteit/nationaliteit';

@Component({
  selector: 'app-pefta',
  templateUrl: './pefta.component.html',
  styleUrls: ['./pefta.component.css']
})
export class PeftaComponent implements OnInit {

  aangifte: Aangifte;

  constructor(private nationaliteitService: NationaliteitService) {
      this.onReceiveSuggestieOfBewaardFormulier();
  }

  private onReceiveSuggestieOfBewaardFormulier(){
    this.nationaliteitService.nationaliteitChanged(Nationaliteit.maakNationaliteit())
  }

  ngOnInit() {
    this.aangifte = Aangifte.maakAangifte();
  }

}
