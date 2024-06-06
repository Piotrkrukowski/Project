import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobBlockComponent } from './Components/job-block/job-block.component';
import { JobCategoryComponent } from './Components/job-category/job-category.component';
import { JobDetailsComponent } from './Components/job-details/job-details.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { JobListComponent } from './Components/job-list/job-list.component';
import { JobLocationComponent } from './Components/job-location/job-location.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JobBlockComponent,JobCategoryComponent,
  JobDetailsComponent,NavbarComponent,SidebarComponent,JobListComponent,
  JobLocationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projekt';
}
