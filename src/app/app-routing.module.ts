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
import { SubjectComponent } from './subject/subject.component';
import { HotColdObsComponent } from './hot-cold-obs/hot-cold-obs.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { JoinCreationComponent } from './join-creation/join-creation.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

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
  { path: 'subject', component: SubjectComponent },
  { path: 'cold-hot-observables', component: HotColdObsComponent },
  { path: 'error-handling', component: ErrorHandlingComponent },
  { path: 'join-creation', component: JoinCreationComponent },
  { path: 'scheduler', component: SchedulerComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
