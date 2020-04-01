import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SalaryCalculatorComponent} from './salary-calculator.component';
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import {By} from "@angular/platform-browser";

describe('SalaryCalculatorComponent', () => {
  let component: SalaryCalculatorComponent;
  let fixture: ComponentFixture<SalaryCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, HttpClientModule],
      declarations: [SalaryCalculatorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid on null values ', () => {
    const minSalary = component.form.get('minimum_salary');
    minSalary.setValue(null);
    fixture.detectChanges();
    expect(minSalary.hasError).toBeDefined();
  });

  it('should be valid on valid values ', () => {
    const minSalary = component.form.get('minimum_salary');
    minSalary.setValue(200);
    fixture.detectChanges();
    expect(minSalary.errors).toBeNull();
  });

  it('should hide the input field once the submit button is clicked', () => {
    const minSalary = component.form.get('minimum_salary');
    minSalary.setValue(200);
    fixture.detectChanges();
    component.onSubmit();
    expect(component.hideDesiredSalary).toBeTrue();
  });

  it('should not hide the input field once the submit button is not clicked', () => {
    const minSalary = component.form.get('minimum_salary');
    minSalary.setValue(200);
    fixture.detectChanges();
    expect(component.hideDesiredSalary).toBeFalse();
  });
});
