import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignbugsComponent } from './assignbugs.component';

describe('AssignbugsComponent', () => {
  let component: AssignbugsComponent;
  let fixture: ComponentFixture<AssignbugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignbugsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignbugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
