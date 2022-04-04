import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms'
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[gteValidator]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: gteValidatorDirective, multi: true }
    ]
})
export class gteValidatorDirective implements Validator {

    @Input("gteNum") gteNum: number = 0;

    validate(c: FormControl) {

        let v: number = +c.value;

        if (isNaN(v)) {
            return { 'gte': true, 'requiredValue': this.gteNum }
        }

        if (v <= +this.gteNum) {
            return { 'gte': true, 'requiredValue': this.gteNum }
        }

        console.log("Validating!!!")

        return null;
    }

}