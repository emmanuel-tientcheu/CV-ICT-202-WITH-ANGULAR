import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TimelineModule } from "primeng/timeline";
import { CardModule } from "primeng/card";
import { appComponent } from "./app.component";

@NgModule({
  declarations: [
    appComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    TimelineModule,
    CardModule
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [appComponent]

})
export class AppModule { }
