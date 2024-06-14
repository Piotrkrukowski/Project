import { Component, OnDestroy, OnInit } from '@angular/core';
import { JobServicesService } from '../../Services/Features/job-services.service';
import { JobCategoryComponent } from '../job-category/job-category.component';
import { Observable, Subject, Subscription } from 'rxjs';
import { JobType } from '../../Enums/job-type.enum';
import { QueryInterface } from '../../Interfaces/query.interface';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataTransferService } from '../../Services/Features/data-transfer/data-transfer.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [JobCategoryComponent, ReactiveFormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit, OnDestroy {

  constructor(private transferService: DataTransferService){

  }

  refresh$: Subject<boolean> = new Subject();
  subscriptions = new Subscription()
  query: QueryInterface = {};
  JobType = JobType;

  form: FormGroup = new FormGroup({
    occupation: new FormControl(''),
    salaryMin: new FormControl(''),
    salaryMax: new FormControl(''),
    jobType: new FormControl(''),
    jobCategory: new FormControl('')
  });

  get occupation() {
    return this.form.get('occupation')?.value
  }

  get salaryMin() {
    return this.form.get('salaryMin')?.value
  }

  get salaryMax() {
    return this.form.get('salaryMax')?.value
  }

  get jobType() {
    return this.form.get('jobType')?.value
  }

  get jobCategory() {
    return this.form.get('jobCategory')?.value
  }
  
  ngOnInit(): void {

    const sub = this.refresh$.subscribe(() => {

    });

    this.subscriptions.add(sub);

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  protected prepareQuery() {
    if (this.occupation) {
      this.query.what = this.occupation;
    }

    if(this.salaryMin){
      this.query.salary_min = this.salaryMin;
    }

    if (this.salaryMax) {
      this.query.salary_max = this.salaryMax;
    }

    if(this.jobType == JobType.FULL_TIME) {
      this.query.full_time = 1;
      console.log(this.query.full_time)
    }

    if(this.jobType == JobType.PART_TIME) {
      this.query.part_time = 1;
      console.log(this.query.full_time)
    }

    if(this.jobCategory) {
      this.query.category = this.jobCategory;
      console.log(this.jobCategory)
    }

    this.transferService.getSubject().next(this.query);
  }

  private refresh() {

  }
}