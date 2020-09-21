import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { KeyupComponent } from './keyup/keyup.component';
import { EnterKeyComponent } from './enter-key/enter-key.component';
import { HeroBirthday1Component } from './hero-birthday1/hero-birthday1.component';


@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    KeyupComponent,
    EnterKeyComponent,
    HeroBirthday1Component,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
