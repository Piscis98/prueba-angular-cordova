import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserDefaultComponent } from './list-user-default.component';

describe('ListUserDefaultComponent', () => {
  let component: ListUserDefaultComponent;
  let fixture: ComponentFixture<ListUserDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
