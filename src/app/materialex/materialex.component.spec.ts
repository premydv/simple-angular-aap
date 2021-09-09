import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialexComponent } from './materialex.component';

describe('MaterialexComponent', () => {
  let component: MaterialexComponent;
  let fixture: ComponentFixture<MaterialexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
