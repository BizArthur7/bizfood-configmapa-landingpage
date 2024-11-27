import { Routes } from '@angular/router';
import { ConfigAreaEntregaComponent } from './components/home/config-area-entrega/config-area-entrega.component';
import { DeliveryComponent } from './components/home/delivery/delivery.component';
import { SimularEntregaComponent } from './components/home/simular-entrega/simular-entrega.component';
import { ConfigTaxaEntregaComponent } from './components/home/config-taxa-entrega/config-taxa-entrega.component';

export const routes: Routes = [
  {
    path: '',
    component: ConfigTaxaEntregaComponent,
  },
  {
    path: 'home-config-area-entrega',
    component: ConfigAreaEntregaComponent,
  },
  {
    path: 'home-simular-entrega',
    component: SimularEntregaComponent,
  },
  {
    path: 'home-delivery',
    component: DeliveryComponent,
  },
];