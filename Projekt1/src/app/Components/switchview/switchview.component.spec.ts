import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchviewComponent } from './switchview.component';

describe('SwitchviewComponent', () => {
  let component: SwitchviewComponent;
  let fixture: ComponentFixture<SwitchviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
