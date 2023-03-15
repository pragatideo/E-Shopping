import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alertc1Component } from './alertc1.component';

describe('Alertc1Component', () => {
  let component: Alertc1Component;
  let fixture: ComponentFixture<Alertc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Alertc1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alertc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
