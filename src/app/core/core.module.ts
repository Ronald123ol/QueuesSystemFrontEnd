import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../components/material/material/material.module';
import { StatusPipePipe } from './pipes/status/status-pipe.pipe';
import { PregnantPipe } from './pipes/pregnant/pregnant.pipe';
import { DatePipe } from './pipes/date/date.pipe';




const PIPES = [
  StatusPipePipe,
  PregnantPipe,
  DatePipe
];

@NgModule({
  declarations: [
    NavbarComponent,
    ...PIPES,
 
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
 
  ],
  
  exports:[
    NavbarComponent,
    MaterialModule,
    ...PIPES
  ]
})
export class CoreModule { }
