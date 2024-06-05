import { Component, OnInit } from '@angular/core';
import { JobServicesService } from '../../Services/Features/job-services.service';
@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit{

  constructor(private jobService: JobServicesService){

  }

  public data:any;
  
  ngOnInit(): void {
    this.jobService.fetchPost().subscribe((result:any)=>{
      console.log(result);
      this.data=result.results;
      
      for(var i = 0 ; i < this.data.length ; i++){
        const div = document.createElement("div");
        div.className = "Job-Details-Component-Main";
        div.innerHTML+="{{this.data[i].title}}";
        const b1 = document.getElementById("body");
      }
    })
  }
}