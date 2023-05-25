import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BufferComponent } from './buffer/buffer.component';
import { BasicsComponent } from './basics/basics.component';
import { OperatorsComponent } from './operators/operators.component';
import { TakeComponent } from './take/take.component';
import { SkipComponent } from './skip/skip.component';
import { DistinctComponent } from './distinct/distinct.component';
import { FilteringComponent } from './filtering/filtering.component';
import { TransformComponent } from './transform/transform.component';
import { CreationComponent } from './creation/creation.component';
import { HigherOrderComponent } from './higher-order/higher-order.component';

const routes: Routes = [
  { path: 'operator', component: OperatorsComponent },
  { path: 'basic', component: BasicsComponent },
  { path: 'buffer', component: BufferComponent },
  { path: 'take', component: TakeComponent },
  { path: 'skip', component: SkipComponent },
  { path: 'distinct', component: DistinctComponent },
  { path: 'filtering', component: FilteringComponent },
  { path: 'transform', component: TransformComponent },
  { path: 'creation', component: CreationComponent },
  { path: 'higher-order', component: HigherOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
