import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTopComponent } from './blog-top.component';

describe('BlogTopComponent', () => {
  let component: BlogTopComponent;
  let fixture: ComponentFixture<BlogTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
