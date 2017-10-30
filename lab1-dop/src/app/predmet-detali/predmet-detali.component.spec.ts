import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetDetaliComponent } from './predmet-detali.component';

describe('PredmetDetaliComponent', () => {
  let component: PredmetDetaliComponent;
  let fixture: ComponentFixture<PredmetDetaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredmetDetaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetDetaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
