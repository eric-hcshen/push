import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpushComponent } from './newpush.component';

describe('NewpushComponent', () => {
  let component: NewpushComponent;
  let fixture: ComponentFixture<NewpushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
