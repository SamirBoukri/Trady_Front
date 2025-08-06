import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortefeuilleList } from './portefeuille-list';

describe('PortefeuilleList', () => {
  let component: PortefeuilleList;
  let fixture: ComponentFixture<PortefeuilleList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortefeuilleList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortefeuilleList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
