import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeftaComponent } from './pefta/pefta.component';
import { IdentiteitComponent } from './pefta/identiteit/identiteit.component';
import { GezinComponent } from './pefta/gezin/gezin.component';
import { AdresComponent } from './pefta/identiteit/adres/adres.component';
import { NationaliteitComponent } from './pefta/identiteit/nationaliteit/nationaliteit.component';

@NgModule({
  declarations: [
    AppComponent,
    PeftaComponent,
    IdentiteitComponent,
    GezinComponent,
    AdresComponent,
    NationaliteitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
