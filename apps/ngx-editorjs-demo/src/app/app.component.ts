import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgxEditorjsComponent } from '@ngx-editorjs-labs/ngx-editorjs'

import { NgxThemePickerComponent } from '@tmdj/ngx-theme-picker';

@Component({
  standalone: true,
  imports: [RouterModule, NgxEditorjsComponent, NgxThemePickerComponent],
  selector: 'demo-root',
  template: `
    <h1>Hello World from App</h1>
    <ngx-editorjs></ngx-editorjs>
    <ngx-theme-picker></ngx-theme-picker>
  `,
  styles: [``],
})
export class AppComponent {

}
