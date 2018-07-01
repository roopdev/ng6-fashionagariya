import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileNameComponent } from './edit-profile-name.component';

describe('EditProfileNameComponent', () => {
  let component: EditProfileNameComponent;
  let fixture: ComponentFixture<EditProfileNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
