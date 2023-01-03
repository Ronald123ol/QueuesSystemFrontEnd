import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../../material/material/material.module';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard.component';




@NgModule({
  declarations: [
    InicioComponent,
    DashboardComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    CoreModule,
    RouterModule
  ]
})
export class DashboardModule { }
