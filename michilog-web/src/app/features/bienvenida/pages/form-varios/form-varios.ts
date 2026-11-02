import { Component, input, numberAttribute } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-form-varios',
  templateUrl: './form-varios.html',
})
export class FormVarios {
  readonly cantidad = input.required({transform: numberAttribute});
}
