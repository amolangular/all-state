import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarInsuranceRoutingModule } from './car-insurance-routing.module';
import { CarInsuranceComponent } from './car-insurance.component';
import { VehicleSearchComponent } from './vehicle-search/vehicle-search.component';
import { VehcileNameComponent } from './vehcile-name/vehcile-name.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { YearSelectionComponent } from './year-selection/year-selection.component';


@NgModule({
  declarations: [
    CarInsuranceComponent,
    VehicleSearchComponent,
    VehcileNameComponent,
    CarDetailsComponent,
    YearSelectionComponent
  ],
  imports: [
    CommonModule,
    CarInsuranceRoutingModule
  ]
})
export class CarInsuranceModule { }
