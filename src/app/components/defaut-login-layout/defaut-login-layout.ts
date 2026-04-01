import { Component, Input, output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-defaut-login-layout',
  imports: [CommonModule, ],
  templateUrl: './defaut-login-layout.html',
  styleUrl: './defaut-login-layout.css',
})
export class DefautLoginLayout {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() primaryBtnText: string = '';
  @Input() secondaryBtnText: string = ''; 

  onSubmit = output<void>();

  submit(){
    this.onSubmit.emit();
  }
}
