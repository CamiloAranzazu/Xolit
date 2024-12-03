import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MoviesService } from '../../core/services/modules/movies.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MatIconModule, ReactiveFormsModule ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

  formSearch: FormGroup;
  movies: any[] = [];

  private _snackBar = inject(MatSnackBar);
  
  constructor(
    public moviesService: MoviesService,
    private fb: FormBuilder
  ) {
    this.formSearch = this.fb.group({
      search: ['', [Validators.required]]
    });
  }

  minPalabrasValidator(): boolean {
    const palabras = this.search.trim().split(/\s+/);
    if (palabras.length >= 3) {
      return true;
    }
    return false; 
  }

  get search() {
    return this.formSearch.get('search')?.value;
  }


  onInput() {
    if(this.minPalabrasValidator() === true) {
      this.onSearch();
    }
  }

  onSearch() {
    if (this.search.trim()) {
      this.moviesService.searchMovies(this.search).subscribe({
        next: (data) => {
          if (data.Response === 'True') {
            this.movies = data.Search;
            this.openSnackBar('Busqueda correctamente', 'x');
          } else {
            this.movies = [];
            this.openSnackBar('Data no encontrada', 'x');
          }
        },
        error: (error) => {
          this.openSnackBar('Error intentelo mas tarde', 'x');
        }
      });
    } else {
      this.openSnackBar('Minimo 3 palabras', 'x');
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
