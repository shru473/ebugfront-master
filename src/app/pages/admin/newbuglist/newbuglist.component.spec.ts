import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbuglistComponent } from './newbuglist.component';

describe('NewbuglistComponent', () => {
  let component: NewbuglistComponent;
  let fixture: ComponentFixture<NewbuglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbuglistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbuglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
