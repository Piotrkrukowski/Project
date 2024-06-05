import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobBlockComponent } from './Components/job-block/job-block.component';
import { JobCategoryComponent } from './Components/job-category/job-category.component';
import { JobDetailsComponent } from './Components/job-details/job-details.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JobBlockComponent,JobCategoryComponent,JobDetailsComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projekt';
}
