import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

//types
type InputTypes = 'text' | 'email' | 'password';

@Component({
  selector: 'app-primary-input',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './primary-input.html',
  styleUrl: './primary-input.css',
})
export class PrimaryInput {
  @Input() type: InputTypes = 'text';
  @Input() FormName: string = '';
  @Input() placeholder: string = '';
}
