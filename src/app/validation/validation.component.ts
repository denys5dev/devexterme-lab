import { DxTextBoxComponent } from 'devextreme-angular';
import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators, ValidationErrors } from '@angular/forms';
import { EmailValidation } from "./../common/common.validators";

@Component({
    selector: 'validataion-app',
    templateUrl: 'validation.component.html',
    styleUrls:['./validation.component.css']
})

export class ValidationComponent implements OnInit, OnChanges {
    @ViewChild('emailElement') emailElement: DxTextBoxComponent;
    form: FormGroup;

    emailControl: AbstractControl;
    
    validationRules = {
        email: [
            { type: 'required', message: 'Email is required.' },
            { type: 'stringLength', max: 4, message: "Max length is 4 characters" },
            { type: 'stringLength', min: 2, message: "MIn length is 2 characters" }
        ]
    };
    constructor() { }

    get email() {
        return this.form.get('email')
    }

    ngOnChanges() {
      
    }

    ngOnInit() { 
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required, EmailValidation.shouldBeUniqe, Validators.minLength(3)])
        });
    }

    validate(params) {
        let result = params.validationGroup.validate();
        if (result.isValid) {
            // form data is valid
            // params.validationGroup.reset();
        }
    }

    onInit(event) {
        console.log(this.email)
    }
}