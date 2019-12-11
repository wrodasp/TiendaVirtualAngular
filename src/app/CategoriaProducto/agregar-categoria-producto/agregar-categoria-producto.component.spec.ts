import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCategoriaProductoComponent } from './agregar-categoria-producto.component';

describe('AgregarCategoriaProductoComponent', () => {
  let component: AgregarCategoriaProductoComponent;
  let fixture: ComponentFixture<AgregarCategoriaProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarCategoriaProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCategoriaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
