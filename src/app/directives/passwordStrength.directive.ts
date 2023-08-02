import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { createPasswordStrengthValidator } from "../validators/passwordStrength.validator";
import { Directive } from "@angular/core";

@Directive({
    selector: "[passwordStrength]",
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PasswordStrengthDirective,
        multi: true
    }]
})

export class PasswordStrengthDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        return createPasswordStrengthValidator()(control);
    }
}