import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'jo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {}
