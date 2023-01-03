import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonFormComponent } from "./person-form/person-form.component";
import { PersonListComponent} from "./person-list/person-list.component";



const routes: Routes = [
    {path:'list', component: PersonListComponent},
    {path:'create', component: PersonFormComponent},
    {path: '', redirectTo: 'list', pathMatch: 'full'},
  ];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PersonRoutingModule { }
  