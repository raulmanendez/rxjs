import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { OperatorsComponent } from './operators/operators.component';
import { BufferComponent } from './buffer/buffer.component';
import { TakeComponent } from './take/take.component';
import { SkipComponent } from './skip/skip.component';
import { DistinctComponent } from './distinct/distinct.component';
import { FilteringComponent } from './filtering/filtering.component';
import { TransformComponent } from './transform/transform.component';
import { CreationComponent } from './creation/creation.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    OperatorsComponent,
    BufferComponent,
    TakeComponent,
    SkipComponent,
    DistinctComponent,
    FilteringComponent,
    TransformComponent,
    CreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
