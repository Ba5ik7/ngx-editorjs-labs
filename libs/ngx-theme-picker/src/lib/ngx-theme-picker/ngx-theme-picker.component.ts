import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { NgxThemePickerService } from '../theme-picker.service';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'ngx-theme-picker',
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule
  ],
  template: `g
    <ng-container *ngIf="currentTheme$ | async as currentTheme">
      <button mat-button [mat-menu-trigger-for]="themeMenu" [matTooltip]="matTooltipTest">
        {{ currentTheme }}
        <mat-icon class="dropdown-icon">format_color_fill</mat-icon>
      </button>
    
      <mat-menu #themeMenu="matMenu" class="theme-picker-menu">
        <button mat-menu-item *ngFor="let theme of themes | keyvalue" (click)="selectTheme(theme.key)">
          <mat-icon 
            [ngClass]="{'docs-theme-selected-icon': currentTheme === theme.key}"
            [color]="currentTheme === theme.key ? 'accent' : undefined">
            {{currentTheme === theme.key ? 'radio_button_checked' : 'radio_button_unchecked'}}
          </mat-icon>
          <span>{{theme.value}}</span>
          <mat-icon [class]="'theme-example-icon ' + theme.key" svgIcon="theme-example"></mat-icon>
        </button>
      </mat-menu>
    </ng-container>
    
  `,
  styleUrls: ['./ngx-theme-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class NgxThemePickerComponent {

  matTooltipTest = 'Select a theme for the documentation';
  currentTheme$ = this.themePickerService.currentTheme$;
  themes: Map<string, string> = new Map([
    ['indigo-amber', 'Light'],
    ['indigo-pink', 'Dark'],
    ['professional', 'Professional'],
    ['synthwave', 'Synthwave'],
    ['winter', 'Winter'],
    ['spring', 'Spring'],
    ['summer', 'Summer'],
    ['fall', 'Fall'],
    ['vanguard', 'Vanguard'],
  ]);

  constructor(
      private themePickerService: NgxThemePickerService,
      iconRegistry: MatIconRegistry,
      sanitizer: DomSanitizer
  ) {
    const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" viewBox="0 0 80 80"><defs><path d="M77.87 0C79.05 0 80 .95 80 2.13v75.74c0 1.17-.95 2.13-2.13 2.13H2.13C.96 80 0 79.04 0 77.87V2.13C0 .95.96 0 2.13 0h75.74z" id="a"/><path d="M54 40c3.32 0 6 2.69 6 6 0 1.2 0-1.2 0 0 0 3.31-2.68 6-6 6H26c-3.31 0-6-2.69-6-6 0-1.2 0 1.2 0 0 0-3.31 2.69-6 6-6h28z" id="b"/><path d="M0 0h80v17.24H0V0z" id="c"/></defs><use xlink:href="#a" fill="#fff" class="theme-icon-background"/><use xlink:href="#b" fill="#ff4081" class="theme-icon-button"/><use xlink:href="#c" fill="#3f51b5" class="theme-icon-toolbar"/></svg>`;
    const themeExampleIcon = sanitizer.bypassSecurityTrustHtml(svgIcon);
    iconRegistry.addSvgIconLiteral('theme-example', themeExampleIcon);
  }

  selectTheme(theme: string): void {
    this.themePickerService.setStyle('theme', `${theme}.css`);
    this.themePickerService.storeTheme(theme);
    this.currentTheme$.next(theme);
  }
}
