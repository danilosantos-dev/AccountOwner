import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';

import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerCreateComponent } from './owner-create/owner-create.component';
import { OwnerUpdateComponent } from './owner-update/owner-update.component';

const routes: Routes = [
  {path: 'list', component: OwnerListComponent},
  {path: 'details/:id', component: OwnerDetailsComponent},
  {path: 'create', component: OwnerCreateComponent},
  {path: 'update/:id', component: OwnerUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
