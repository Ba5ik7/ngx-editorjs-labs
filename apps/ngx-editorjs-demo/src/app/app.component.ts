import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgxEditorjsComponent } from '@ngx-editorjs-labs/ngx-editorjs'

@Component({
  standalone: true,
  imports: [RouterModule, NgxEditorjsComponent],
  selector: 'demo-root',
  template: `
    <h1>Hello World from App</h1>
    <ngx-editorjs></ngx-editorjs>
  `,
  styles: [``],
})
export class AppComponent {

}
