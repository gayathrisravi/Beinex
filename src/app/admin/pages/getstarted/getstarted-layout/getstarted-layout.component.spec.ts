import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstartedLayoutComponent } from './getstarted-layout.component';

describe('GetstartedLayoutComponent', () => {
  let component: GetstartedLayoutComponent;
  let fixture: ComponentFixture<GetstartedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetstartedLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetstartedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
