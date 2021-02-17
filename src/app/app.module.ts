import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FormsModule } from '@angular/forms';
import { TetrisCoreModule } from 'ngx-tetris';
import { ListComponent } from './list/list.component';
import { TetrisMechanismComponent } from './tetris-mechanism/tetris-mechanism.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ListComponent,
    TetrisMechanismComponent,
  ],
  imports: [
    BrowserModule,
    TetrisCoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
