import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVisualScreenComponent } from './all-visual-screen.component';

describe('AllVisualScreenComponent', () => {
  let component: AllVisualScreenComponent;
  let fixture: ComponentFixture<AllVisualScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllVisualScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVisualScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
