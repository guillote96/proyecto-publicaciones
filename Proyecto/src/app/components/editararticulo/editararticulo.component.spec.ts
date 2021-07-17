import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditararticuloComponent } from './editararticulo.component';

describe('EditararticuloComponent', () => {
  let component: EditararticuloComponent;
  let fixture: ComponentFixture<EditararticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditararticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditararticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
