import { Component, OnDestroy, OnInit } from '@angular/core';
import { JobServicesService } from '../../Services/Features/job-services.service';
import { DataTransferService } from '../../Services/Features/data-transfer/data-transfer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit{

  constructor(private jobService: JobServicesService, private transferService: DataTransferService){

  }

  public data:any;
  public query:any;
  
  ngOnInit(): void {

    this.getData();

    this.transferService.getSubject().subscribe((query:any) => {
      this.query = query;
      this.getData();
    })

  }

  getData(){
    this.jobService.fetchPost(10,this.query).subscribe((result:any) => {
      this.data=result.results;
    })
  }

}
