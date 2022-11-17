import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreatrianguloComponent } from './areatriangulo.component';

describe('AreatrianguloComponent', () => {
  let component: AreatrianguloComponent;
  let fixture: ComponentFixture<AreatrianguloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreatrianguloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreatrianguloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
