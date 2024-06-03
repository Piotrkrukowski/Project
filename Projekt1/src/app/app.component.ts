import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobServicesService } from './Services/Features/job-services.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
