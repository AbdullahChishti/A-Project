import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MatFormFieldModule} from "@angular/material/form-field";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MatFormFieldModule
      ],
    }).compileComponents();
  }));

});
