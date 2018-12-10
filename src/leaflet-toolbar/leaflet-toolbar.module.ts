import { ModuleWithProviders, NgModule } from '@angular/core';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { LeafletToolbarDirective } from './core/leaflet-toolbar.directive';

@NgModule({
  imports: [
    LeafletModule
  ],
  exports: [
    LeafletToolbarDirective
  ],
  declarations: [
    LeafletToolbarDirective
  ]
})
export class LeafletToolbarModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: LeafletToolbarModule, providers: [] };
  }
}
