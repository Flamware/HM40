import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpBarComponent } from './expbar.component';

describe('ExpbarComponent', () => {
  let component: ExpBarComponent;
  let fixture: ComponentFixture<ExpBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
