import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxThemePickerComponent } from './ngx-theme-picker.component';

describe('NgxThemePickerComponent', () => {
  let component: NgxThemePickerComponent;
  let fixture: ComponentFixture<NgxThemePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxThemePickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxThemePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
