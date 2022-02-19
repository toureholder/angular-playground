import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule, StoreModule.forRoot({}, {})],
  bootstrap: [AppComponent],
})
export class AppModule {}
