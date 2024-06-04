import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartymanagementComponent } from './partymanagement.component';

describe('PartymanagementComponent', () => {
  let component: PartymanagementComponent;
  let fixture: ComponentFixture<PartymanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartymanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartymanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
