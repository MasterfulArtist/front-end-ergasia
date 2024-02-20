import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForApprovalListComponent } from './request-for-approval-list.component';

describe('RequestForApprovalListComponent', () => {
  let component: RequestForApprovalListComponent;
  let fixture: ComponentFixture<RequestForApprovalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForApprovalListComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RequestForApprovalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
