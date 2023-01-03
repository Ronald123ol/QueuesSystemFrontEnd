import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children:[
    {path: '', component: InicioComponent},
    { 
      path: 'person',
    loadChildren: () =>
      import('./person/person.module').then((m) => m.PersonModule),
    },
    { 
      path: 'queue',
    loadChildren: () =>
      import('./queue/queue.module').then((m) => m.QueueModule),
    },
    { 
      path: 'queueperson',
    loadChildren: () =>
      import('./queueperson/queueperson.module').then((m) => m.QueuepersonModule),
    }

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
