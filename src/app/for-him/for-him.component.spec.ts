import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForHimComponent } from './for-him.component';

describe('ForHimComponent', () => {
  let component: ForHimComponent;
  let fixture: ComponentFixture<ForHimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForHimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForHimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
