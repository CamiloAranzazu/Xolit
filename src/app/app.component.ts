import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { JobsViewComponent } from './shared/components/jobs-view/jobs-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JobsViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FrontendXolit';
}
