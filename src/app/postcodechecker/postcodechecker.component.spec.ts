import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcodecheckerComponent } from './postcodechecker.component';

describe('PostcodecheckerComponent', () => {
  let component: PostcodecheckerComponent;
  let fixture: ComponentFixture<PostcodecheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostcodecheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcodecheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
