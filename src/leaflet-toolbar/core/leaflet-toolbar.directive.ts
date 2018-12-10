import { Directive, Input, NgZone, OnInit } from '@angular/core';

import 'leaflet-toolbar';
declare const L: any;

import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/ngx-leaflet';

@Directive({
  selector: '[leafletToolbar]'
})
export class LeafletToolbarDirective implements OnInit {

  leafletDirective: LeafletDirectiveWrapper;

  @Input('leafletToolbarControl') toolbarControl: any = null;

  constructor(leafletDirective: LeafletDirective) {
    this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
  }

  ngOnInit() {
    this.toolbarControl.actions = this.toolbarControl.actions.map((actionOptions: object) => {
      return L.Toolbar2.Action.extend(actionOptions);
    });
    const toolbar = new L.Toolbar2.Control(this.toolbarControl);
    toolbar.addTo(this.leafletDirective.getMap());
  }
}
