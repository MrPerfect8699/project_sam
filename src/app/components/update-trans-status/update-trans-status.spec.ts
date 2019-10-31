import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTransStatusComponent } from './update-trans-status';

describe('UpdateTransStatusComponent', () => {
  let component: UpdateTransStatusComponent;
  let fixture: ComponentFixture<UpdateTransStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTransStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTransStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
