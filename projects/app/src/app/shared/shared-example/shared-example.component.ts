import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shared-example',
  templateUrl: './shared-example.component.html',
  styleUrls: ['./shared-example.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedExampleComponent {}
