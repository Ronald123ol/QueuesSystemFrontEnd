import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueueRoutingModule } from './queue-routing.module';
import { QueueListComponent } from './queue-list/queue-list.component';
import { QueueFormComponent } from './queue-form/queue-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    QueueListComponent,
    QueueFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QueueRoutingModule,
    CoreModule
  ]
})
export class QueueModule { }
