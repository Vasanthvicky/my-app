import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableCarouselComponent } from './draggable-carousel.component';

describe('DraggableCarouselComponent', () => {
  let component: DraggableCarouselComponent;
  let fixture: ComponentFixture<DraggableCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggableCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
