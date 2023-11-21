import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PooComponent } from './poo.component';

describe('PooComponent', () => {
  let component: PooComponent;
  let fixture: ComponentFixture<PooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PooComponent]
    });
    fixture = TestBed.createComponent(PooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
