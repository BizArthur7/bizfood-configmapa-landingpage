import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-config-area-entrega',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './config-area-entrega.component.html',
  styleUrl: './config-area-entrega.component.css',
})
export class ConfigAreaEntregaComponent implements OnInit {
  private router = inject(Router);

  ngOnInit(): void {
    window.scrollTo(0, 765);
  }

  public nextSection(): void {
    this.router.navigate(['/home-simular-entrega']);
  }

  public previousSection(): void {
    this.router.navigate(['']);
  }
}
