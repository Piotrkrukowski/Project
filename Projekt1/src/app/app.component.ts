import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobCategoryComponent } from './Components/job-category/job-category.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JobCategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Projek12';
}
