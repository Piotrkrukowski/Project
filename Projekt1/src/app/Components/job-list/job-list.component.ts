import { Component, OnInit } from '@angular/core';
import { JobServicesService } from '../../Services/Features/job-services.service';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit {

  constructor(private jobService: JobServicesService){

  }

  public data:any;
  
  ngOnInit(): void {
    this.jobService.fetchPost().subscribe((result:any)=>{
      this.data=result.results;
    })
  }
}
