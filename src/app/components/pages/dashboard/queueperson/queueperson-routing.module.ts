import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueuepersonFormComponent } from './queueperson-form/queueperson-form.component';
import { QueuepersonListComponent } from './queueperson-list/queueperson-list.component';


const routes: Routes = [
  {path:'list', component: QueuepersonListComponent},
  {path:'create', component: QueuepersonFormComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueuepersonRoutingModule { }
