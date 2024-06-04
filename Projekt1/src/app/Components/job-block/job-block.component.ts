import { Component, OnInit } from '@angular/core';
import { JobServicesService } from '../../Services/Features/job-services.service';
@Component({
  selector: 'app-job-block',
  standalone: true,
  imports: [],
  templateUrl: './job-block.component.html',
  styleUrl: './job-block.component.css'
})
export class JobBlockComponent implements OnInit {

  constructor(private jobService: JobServicesService){

  }

  public data:any;
  
  ngOnInit(): void {
    this.jobService.fetchPost().subscribe((result:any)=>{
      this.data=result.results;
    })
  }
}
