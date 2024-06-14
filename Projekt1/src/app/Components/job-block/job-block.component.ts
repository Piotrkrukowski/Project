import { Component, OnInit } from '@angular/core';
import { JobServicesService } from '../../Services/Features/job-services.service';
import { DataTransferService } from '../../Services/Features/data-transfer/data-transfer.service';
import { interval } from 'rxjs';
@Component({
  selector: 'app-job-block',
  standalone: true,
  imports: [],
  templateUrl: './job-block.component.html',
  styleUrl: './job-block.component.css'
})
export class JobBlockComponent implements OnInit {

  constructor(private jobService: JobServicesService, private transferService: DataTransferService){

  }

  public currentPage:number=1;
  public currentPage1:number=1;
  public data:any;
  public query:any;
  
  ngOnInit(): void {
      this.getData();
      this.querySearch();
  }

  getData(){
    this.jobService.fetchPost(12,this.query).subscribe((result:any) => {
      this.data=result.results;
      
    })
  }

  getPage(){
    this.transferService.getPage().subscribe((currentPage:any) => {
      this.currentPage=currentPage;
      console.log(this.currentPage);
    })
  }

  querySearch(){
    this.transferService.getSubject().subscribe((query:any) => {
    this.query = query;
    this.getData();
    })
  }

  refreshPage(){
    
  }

}
