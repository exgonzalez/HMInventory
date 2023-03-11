import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataComponent } from './components/data/data.component';
import { InventoryComponent } from './components/inventory/inventory.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'data', component:DataComponent},
  {path:'inventory', component:InventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
