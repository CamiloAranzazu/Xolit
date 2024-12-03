import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from '../movies/movies.component';
import { ConverterComponent } from '../converter/converter.component';
import { HomeComponent } from './home.component';

const defaultRedirect = '/movies';

const routes: Routes = [
  { path: '', redirectTo: defaultRedirect, pathMatch: 'full' },
  { path: '', component: HomeComponent,
      children: [
        { path: 'movies', component: MoviesComponent },
        { path: 'converter', component: ConverterComponent }
      ] 
  },
  { path: '**', redirectTo: defaultRedirect, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
