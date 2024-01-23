import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForApprovalCreateComponent } from './request-for-approval-create.component';

describe('RequestForApprovalCreateComponent', () => {
  let component: RequestForApprovalCreateComponent;
  let fixture: ComponentFixture<RequestForApprovalCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForApprovalCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestForApprovalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
