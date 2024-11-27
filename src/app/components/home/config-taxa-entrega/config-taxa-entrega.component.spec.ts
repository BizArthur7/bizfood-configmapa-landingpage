import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTaxaEntregaComponent } from './config-taxa-entrega.component';

describe('ConfigTaxaEntregaComponent', () => {
  let component: ConfigTaxaEntregaComponent;
  let fixture: ComponentFixture<ConfigTaxaEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigTaxaEntregaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigTaxaEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
