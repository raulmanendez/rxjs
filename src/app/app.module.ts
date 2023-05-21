import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { OperatorsComponent } from './operators/operators.component';
import { BufferComponent } from './buffer/buffer.component';
import { TakeComponent } from './take/take.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    OperatorsComponent,
    BufferComponent,
    TakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
