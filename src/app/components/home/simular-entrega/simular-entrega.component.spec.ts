import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimularEntregaComponent } from './simular-entrega.component';

describe('SimularEntregaComponent', () => {
  let component: SimularEntregaComponent;
  let fixture: ComponentFixture<SimularEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimularEntregaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimularEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
