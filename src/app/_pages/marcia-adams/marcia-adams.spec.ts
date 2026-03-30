import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarciaAdams } from './marcia-adams';

describe('MarciaAdams', () => {
  let component: MarciaAdams;
  let fixture: ComponentFixture<MarciaAdams>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarciaAdams]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarciaAdams);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
