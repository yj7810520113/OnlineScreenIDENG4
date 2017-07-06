import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVisualScreenComponent } from './my-visual-screen.component';

describe('MyVisualScreenComponent', () => {
  let component: MyVisualScreenComponent;
  let fixture: ComponentFixture<MyVisualScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVisualScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVisualScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
