import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css',
})
export class DeliveryComponent implements OnInit {
  private router = inject(Router);

  ngOnInit(): void {
    window.scrollTo(0, 765);
  }

  public previousSection(): void {
    this.router.navigate(['/home-simular-entrega']);
  }
}
