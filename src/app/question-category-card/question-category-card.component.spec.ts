import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCategoryCardComponent } from './question-category-card.component';

describe('QuestionCategoryCardComponent', () => {
  let component: QuestionCategoryCardComponent;
  let fixture: ComponentFixture<QuestionCategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionCategoryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
