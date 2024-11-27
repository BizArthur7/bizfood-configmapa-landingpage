import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-simular-entrega',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './simular-entrega.component.html',
  styleUrl: './simular-entrega.component.css',
})
export class SimularEntregaComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 765);
  }

  private router = inject(Router);

  public nextSection(): void {
    this.router.navigate(['/home-delivery']);
  }

  public previousSection(): void {
    this.router.navigate(['/home-config-area-entrega']);
  }
}
