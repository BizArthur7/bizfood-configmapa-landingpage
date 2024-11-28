import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-pedido',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './delivery-pedido.component.html',
  styleUrl: './delivery-pedido.component.css',
})
export class DeliveryPedidoComponent implements OnInit {
  private router = inject(Router);

  ngOnInit(): void {
    window.scrollTo(0, 765);
  }

  public previousSection(): void {
    this.router.navigate(['/home-delivery']);
  }
}
