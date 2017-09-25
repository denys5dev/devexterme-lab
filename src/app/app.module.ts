import { ValidationComponent } from './validation/validation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxValidationGroupModule, DxValidatorModule,
  DxTextBoxModule, DxButtonModule, DxValidationSummaryModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    DxValidationGroupModule,
    DxValidatorModule,
    DxTextBoxModule,
    FormsModule,
    ReactiveFormsModule,
    DxButtonModule,
    DxValidationSummaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
