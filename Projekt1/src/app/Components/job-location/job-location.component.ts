import { Component, OnInit } from '@angular/core';
import { JobServicesService } from '../../Services/Features/job-services.service';

@Component({
  selector: 'app-job-location',
  standalone: true,
  imports: [],
  templateUrl: './job-location.component.html',
  styleUrl: './job-location.component.css'
})
export class JobLocationComponent implements OnInit {

  constructor(private jobService: JobServicesService){

  }

  public data:any;
  
  ngOnInit(): void {
    this.jobService.fetchLocation().subscribe((result:any)=>{
      this.data=result.locations;
    })
  }
}{

}
