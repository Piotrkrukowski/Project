import { Component, OnInit } from '@angular/core';
import { JobServicesService } from '../../Services/Features/job-services.service';

@Component({
  selector: 'app-job-category',
  standalone: true,
  imports: [],
  templateUrl: './job-category.component.html',
  styleUrl: './job-category.component.css'
})
export class JobCategoryComponent implements OnInit {

  constructor(private jobService: JobServicesService){

  }

  public data:any;

  ngOnInit(): void {
    this.jobService.fetchCategories().subscribe((result:any)=>{

      this.data=result.results;
    }
  )}
}
