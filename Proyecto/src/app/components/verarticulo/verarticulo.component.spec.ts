import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerarticuloComponent } from './verarticulo.component';

describe('VerarticuloComponent', () => {
  let component: VerarticuloComponent;
  let fixture: ComponentFixture<VerarticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerarticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerarticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
