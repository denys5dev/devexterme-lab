import { DxTextBoxComponent } from 'devextreme-angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';

@Component({
    selector: 'validataion-app',
    templateUrl: 'validation.component.html',
    styleUrls:['./validation.component.css']
})

export class ValidationComponent implements OnInit {
    @ViewChild('emailElement') emailElement: DxTextBoxComponent;
    form: FormGroup;
    email: string;
    emailControl: AbstractControl;
    
    validationRules = {
        email: [
            { type: 'required', message: 'Email is required.' },
            { type: 'stringLength', max: 4, message: "Max length is 4 characters" },
            { type: 'stringLength', min: 2, message: "MIn length is 2 characters" }
        ]
    };
    constructor() { }

    ngOnInit() { 
        this.form = new FormGroup({
            email: new FormControl('', Validators.compose([Validators.required]))
        });
        this.emailControl = this.form.controls['email'];
    }

    validate(params) {
        console.log(this.emailControl)
        let result = params.validationGroup.validate();
        if (result.isValid) {
            // form data is valid
            // params.validationGroup.reset();
        }
    }
}