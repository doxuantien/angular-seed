import { NgModule } from '@angular/core';

import { SharedExampleComponent } from './shared-example.component';

@NgModule({
  declarations: [SharedExampleComponent],
  exports: [SharedExampleComponent]
})
export class SharedExampleModule {}
