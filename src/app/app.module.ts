import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TokenMainComponent } from './token-main/token-main.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule,  RouterModule.forRoot([
      { path: '', component: TokenMainComponent },
      
    ]) ],
  
  
  declarations: [ AppComponent, TopBarComponent, TokenMainComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
