import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCalculoComponent } from './tela-calculo.component';

describe('TelaCalculoComponent', () => {
  let component: TelaCalculoComponent;
  let fixture: ComponentFixture<TelaCalculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaCalculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
