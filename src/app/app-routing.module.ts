import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'all', component: ListComponent, data: { currentRoute: 'all' } },
  {
    path: 'region',
    component: SearchComponent,
    data: { currentRoute: 'region' },
  },
  { path: 'name', component: SearchComponent, data: { currentRoute: 'name' } },
  { path: '**', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
