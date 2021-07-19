import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarranavegadoraComponent } from './barranavegadora.component';

describe('BarranavegadoraComponent', () => {
  let component: BarranavegadoraComponent;
  let fixture: ComponentFixture<BarranavegadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarranavegadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarranavegadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
