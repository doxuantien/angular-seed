import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { PagesModule } from '@pages/pages.module';
import { SecurityModule } from '@security';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, SecurityModule, AppRoutingModule, PagesModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
