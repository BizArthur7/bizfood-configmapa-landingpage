import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPedidoComponent } from './delivery-pedido.component';

describe('DeliverPedidoComponent', () => {
  let component: DeliveryPedidoComponent;
  let fixture: ComponentFixture<DeliveryPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryPedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
