import { Component, OnInit } from '@angular/core';
import { JobServicesService } from '../../Services/Features/job-services.service';
import { DataTransferService } from '../../Services/Features/data-transfer/data-transfer.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{

  constructor(private jobService: JobServicesService, private transferService: DataTransferService){

  }

  public currentPage:any;

  ngOnInit(): void {
    this.getCurrentPage() 
  }

  getCurrentPage(){
    this.transferService.getPage().subscribe((currentPage:any) => {
    this.currentPage=currentPage;
    })
  }
  
  nextPage(){
    this.currentPage+=1;
    this.transferService.getPage().next(this.currentPage);
  }

  prevPage(){
    if(this.currentPage>1){
      this.currentPage-=1;
      this.transferService.getPage().next(this.currentPage);
    }
  }

}
