import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserCarouselComponent } from './list-user-carousel.component';

describe('ListUserCarouselComponent', () => {
  let component: ListUserCarouselComponent;
  let fixture: ComponentFixture<ListUserCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
