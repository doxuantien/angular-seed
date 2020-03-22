import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'jo-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {}
