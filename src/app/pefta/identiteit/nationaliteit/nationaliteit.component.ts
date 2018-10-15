import { ChangeDetectionStrategy, EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { Nationaliteit } from './nationaliteit';
import { NationaliteitService } from './nationaliteit.service';


@Component({
  selector: 'app-nationaliteit',
  templateUrl: './nationaliteit.component.html',
  styleUrls: ['./nationaliteit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NationaliteitComponent implements OnInit {

  private _nationaliteit: Nationaliteit;

  constructor(public nationaliteitService: NationaliteitService) { }

  ngOnInit() {
  }

  nationaliteitInput(nationaliteit: string): void{
    console.log(`nationaliteitChanged: ${nationaliteit}`);
    // this.nationaliteitChanged.emit(nationaliteit);
    this.nationaliteitService.nationaliteitInputChanged(nationaliteit);
  }
}
