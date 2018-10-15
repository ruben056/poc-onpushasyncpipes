import { Input, Component, OnInit } from '@angular/core';
import { Identiteit } from './identiteit';
import { Nationaliteit } from './nationaliteit/nationaliteit';


@Component({
  selector: 'app-identiteit',
  templateUrl: './identiteit.component.html',
  styleUrls: ['./identiteit.component.css']
})
export class IdentiteitComponent implements OnInit {

  private _identiteit: Identiteit;

  constructor() { }

  ngOnInit() {
  }

}
