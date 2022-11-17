import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreacirculoComponent } from './areacirculo.component';

describe('AreacirculoComponent', () => {
  let component: AreacirculoComponent;
  let fixture: ComponentFixture<AreacirculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreacirculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreacirculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
