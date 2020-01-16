import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCuentaComponent } from './nueva-cuenta.component';

describe('NuevaCuentaComponent', () => {
  let component: NuevaCuentaComponent;
  let fixture: ComponentFixture<NuevaCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
