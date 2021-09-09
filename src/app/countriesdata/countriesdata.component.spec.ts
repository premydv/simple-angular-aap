import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesdataComponent } from './countriesdata.component';

describe('CountriesdataComponent', () => {
  let component: CountriesdataComponent;
  let fixture: ComponentFixture<CountriesdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
