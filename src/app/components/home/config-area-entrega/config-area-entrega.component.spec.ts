import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAreaEntregaComponent } from './config-area-entrega.component';

describe('ConfigAreaEntregaComponent', () => {
  let component: ConfigAreaEntregaComponent;
  let fixture: ComponentFixture<ConfigAreaEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigAreaEntregaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigAreaEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
