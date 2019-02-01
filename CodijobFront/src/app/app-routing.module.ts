import { NgModule } from '@angular/core';
import {SkillMostrarComponent} from './skill/screens/skill-mostrar/skill-mostrar.component';
import {RouterModule, Routes} from '@angular/router';
const routes:Routes = [
  {
    path:'mantenimientos/skill',
    component: SkillMostrarComponent,
  }
]
 
@NgModule({
  exports:[RouterModule],
  imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
