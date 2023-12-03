import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngx-editorjs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button [disabled]="disabled" [ngStyle]="{ 'padding.px': padding }">
      {{ text }}
    </button>
  `,
  styles: [``]
})
export class NgxEditorjsComponent {
  @Input() text = 'Click me!';
  @Input() padding = 10;
  @Input() disabled = true;

  /**
   * How large should the button be?
  */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';
}
