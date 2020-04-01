import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PopUpPageComponent} from "../pop-up-page/pop-up-page.component";
import {MatDialog} from '@angular/material/dialog';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css']
})
export class SalaryCalculatorComponent implements OnInit {
  form: FormGroup;
  salaryMessage: string;
  hideDesiredSalary = false;
  hideMaximumSalary = false;
  @ViewChild(PopUpPageComponent) popupComponent: PopUpPageComponent;

  constructor(public dialog: MatDialog, private http: HttpClient) {
    this.form = new FormGroup({
      minimum_salary: new FormControl('', Validators.required),
      maximum_salary: new FormControl('', Validators.required)
    })
  }

  get minimumSalary() {
    return this.form.get('minimum_salary')
  }

  get maximumSalary() {
    return this.form.get('maximum_salary')
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.hideSalaryFields();

    if (this.form.valid) {
      this.compareSalaries() ? this.salaryMessage = 'success' : this.salaryMessage = 'Failed';

      // since i'm using another reusable component for pop up , sending data to that model for the popup
      const dataForPopup = {
        message: this.salaryMessage,
        desiredSalary: this.minimumSalary.value,
        maximumSalary: this.maximumSalary.value

      };
      this.openDialog(dataForPopup);
    }

  }

  private compareSalaries(): boolean {
    return (this.minimumSalary.value <= this.maximumSalary.value)
  }

  private openDialog(salaryData): void {
    this.dialog.open(PopUpPageComponent, {
      width: '350px',
      data: salaryData
    });
  }

  private hideSalaryFields() {
    if (this.minimumSalary.value) {
      this.hideDesiredSalary = true;
    }

    if (this.maximumSalary.value) {
      this.hideMaximumSalary = true;
    }
  }
}
