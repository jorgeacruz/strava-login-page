import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-defaut-login-layout',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './defaut-login-layout.html',
  styleUrl: './defaut-login-layout.css',
})
export class DefautLoginLayout {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() primaryBtnText: string = '';
  @Input() secondaryBtnText: string = ''; 
}
