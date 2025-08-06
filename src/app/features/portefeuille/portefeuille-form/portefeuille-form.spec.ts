import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortefeuilleForm } from './portefeuille-form';

describe('PortefeuilleForm', () => {
  let component: PortefeuilleForm;
  let fixture: ComponentFixture<PortefeuilleForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortefeuilleForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortefeuilleForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
