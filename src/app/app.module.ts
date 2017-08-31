import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { GraphsService } from './graphs.service';

const ROUTES = [
  {
    path: '',
    component: GraphComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES) 
  ],
  providers: [GraphsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
