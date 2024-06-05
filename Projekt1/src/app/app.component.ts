import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobServicesService } from './Services/Features/job-services.service';
import { JobDetailsComponent } from './Components/job-details/job-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JobDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Projek12';

  constructor(private jobService: JobServicesService){

  }

  ngOnInit(): void {
    this.jobService.fetchPost().subscribe((result:any)=>{
      console.log(result);
    })
  }
}
