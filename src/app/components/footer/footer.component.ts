import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  @HostListener('window:scroll', [])
  onScroll(): void {
    const chevronButton = document.getElementById('chevronUpButton');
    if (window.scrollY > 300) {
      chevronButton?.classList.remove('hidden');
      chevronButton?.classList.add('opacity-100');
    } else {
      chevronButton?.classList.add('hidden');
      chevronButton?.classList.remove('opacity-100');
    }
  }

  voltarAoTopo(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
