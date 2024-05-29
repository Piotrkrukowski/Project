import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobServicesService } from './Services/Features/job-services.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JobServicesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projekt12';
}
