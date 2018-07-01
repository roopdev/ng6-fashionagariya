import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConsoleComponent } from './main-console.component';

describe('MainConsoleComponent', () => {
  let component: MainConsoleComponent;
  let fixture: ComponentFixture<MainConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
