import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueuepersonRoutingModule } from './queueperson-routing.module';
import { QueuepersonListComponent } from './queueperson-list/queueperson-list.component';
import { QueuepersonFormComponent } from './queueperson-form/queueperson-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    QueuepersonListComponent,
    QueuepersonFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QueuepersonRoutingModule,
    CoreModule
  ]
})
export class QueuepersonModule { }
