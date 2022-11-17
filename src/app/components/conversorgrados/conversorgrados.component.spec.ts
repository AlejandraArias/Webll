import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorgradosComponent } from './conversorgrados.component';

describe('ConversorgradosComponent', () => {
  let component: ConversorgradosComponent;
  let fixture: ComponentFixture<ConversorgradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversorgradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversorgradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
