import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coth } from './coth';

describe('Coth', () => {
  let component: Coth;
  let fixture: ComponentFixture<Coth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
