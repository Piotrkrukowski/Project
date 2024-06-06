import { Component, OnInit } from '@angular/core';
import { JobServicesService } from '../../Services/Features/job-services.service';
import { JobLocationComponent } from '../job-location/job-location.component';
import { JobCategoryComponent } from '../job-category/job-category.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [JobLocationComponent,JobCategoryComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  constructor(private jobService: JobServicesService){

  }

  public data:any;
  
  ngOnInit(): void {
    this.jobService.fetchPost().subscribe((result:any)=>{
      this.data=result.results;
    })
  }
}