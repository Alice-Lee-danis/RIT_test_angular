import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetInformationComponent } from './components/planet-information/planet-information.component';
import { PlanetComponent } from './components/planet/planet.component';

const routes: Routes = [
  {path:"", component:PlanetComponent},
  {path:"planet", component:PlanetInformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
