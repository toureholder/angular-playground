import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './layout/main/main.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './layout/nav/nav.component';

@NgModule({
  declarations: [MainComponent, NavComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule],
  exports: [BrowserModule, HttpClientModule, MainComponent],
})
export class CoreModule {}
