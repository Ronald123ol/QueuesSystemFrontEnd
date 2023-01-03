import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueueFormComponent } from './queue-form/queue-form.component';
import { QueueListComponent } from './queue-list/queue-list.component';

const routes: Routes = [
  {path:'list', component: QueueListComponent},
    {path:'create', component: QueueFormComponent},
    {path: '', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueueRoutingModule { }
