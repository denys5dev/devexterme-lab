import { AbstractControl, ValidationErrors } from '@angular/forms';

export class EmailValidation {
    static shouldBeUniqe(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(control.value)
                if(control.value == "den")
                    
                    resolve( { shouldBeUniqe: true } )
                else
                    resolve(null)
            }, 1000)
        });
    }
}