import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { MainComponent } from './layout/main/main.component';
import { NavComponent } from './layout/nav/nav.component';
import { counterReducer } from './state/state.reducers';

@NgModule({
  declarations: [MainComponent, NavComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],
  exports: [BrowserModule, HttpClientModule, MainComponent],
})
export class CoreModule {}
