import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTreeModule} from '@angular/material/tree';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
