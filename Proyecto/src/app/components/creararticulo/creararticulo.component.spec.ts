import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreararticuloComponent } from './creararticulo.component';

describe('CreararticuloComponent', () => {
  let component: CreararticuloComponent;
  let fixture: ComponentFixture<CreararticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreararticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreararticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
