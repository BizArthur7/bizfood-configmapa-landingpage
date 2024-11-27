import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-config-taxa-entrega',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './config-taxa-entrega.component.html',
  styleUrl: './config-taxa-entrega.component.css',
})
export class ConfigTaxaEntregaComponent implements OnInit {
  private router = inject(Router);

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  public nextSection(): void {
    this.router.navigate(['/home-config-area-entrega']);
  }
}
