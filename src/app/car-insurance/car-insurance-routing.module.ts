import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarInsuranceComponent } from './car-insurance.component';
import { VehcileNameComponent } from './vehcile-name/vehcile-name.component';
import { YearSelectionComponent } from './year-selection/year-selection.component';

const routes: Routes = [
  { path: 'select-vehicle', component: VehcileNameComponent },
  {path:'select-year',component:YearSelectionComponent},
  { path: '', component:VehcileNameComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarInsuranceRoutingModule { }
