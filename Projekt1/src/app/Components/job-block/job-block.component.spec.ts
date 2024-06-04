import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobBlockComponent } from './job-block.component';

describe('JobBlockComponent', () => {
  let component: JobBlockComponent;
  let fixture: ComponentFixture<JobBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
