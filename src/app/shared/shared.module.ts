import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarModule } from './components/progress-bar/progress-bar.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProgressBarModule],
  exports: [ProgressBarModule],
})
export class SharedModule {}
