import { Component, signal } from '@angular/core';
import { Shell } from './core/layout/shell/shell'

@Component({
  imports: [Shell],
  selector: 'app-root',
  template: '<app-shell/>',
})
export class App {}
