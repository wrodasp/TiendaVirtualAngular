import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelUsuarioComponent } from './panel-usuario.component';

describe('PanelUsuarioComponent', () => {
  let component: PanelUsuarioComponent;
  let fixture: ComponentFixture<PanelUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
