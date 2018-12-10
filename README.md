# @avanzyl/ngx-leaflet-toolbar

[![Build Status][travis-image]][travis-url]

[travis-url]: https://travis-ci.org/Asymmetrik/ngx-template/
[travis-image]: https://travis-ci.org/Asymmetrik/ngx-template.svg

> [Leaflet Toolbar](https://github.com/Leaflet/Leaflet.toolbar) extension for [@asymmetrik/ngx-leaflet](https://github.com/Asymmetrik/ngx-leaflet) package to be used with Angular.io.


## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [Todo](#todo)
- [License](#license)


## Install
```
# Install required packages
npm install leaflet
npm install leaflet-toolbar
npm install @asymmetrik/ngx-leaflet
npm install @avanzyl/ngx-leaflet-toolbar

# Install types
npm install --save-dev @types/leaflet
```

## Usage
1. Edit your angular.json file to inject the required assets
```
{
  ...
   "assets": [
    {
      "glob": "**/*",
      "input": "./node_modules/leaflet/dist/images",
      "output": "/"
    },
    ...
  ],
  "styles": [
    ...
    "./node_modules/leaflet/dist/leaflet.css",
    "./node_modules/leaflet-toolbar/dist/leaflet.toolbar.css"
  ],
  "scripts": [
    ...
    "./node_modules/leaflet/dist/leaflet.js",
    "./node_modules/leaflet-toolbar/dist/leaflet.toolbar.js"
  ]
  ...
}
```
2. Import Dependencies and Modules into app.modules.ts
```
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletToolbarModule } from '@avanzyl/ngx-leaflet-toolbar';

@NgModule({
  ...
  imports: [
    ...
    LeafletModule.forRoot(),
    LeafletToolbarModule.forRoot()
  ]
  ...
})
```
3. Create map inside your component .html file..
```
<div style="height: 400px;"
     leaflet
     leafletToolbar
     [leafletOptions]="options"
     [leafletToolbarControl]="toolbarControl">
</div>
```
4. Add leaflet and toolbar options to your component .ts file.
```
options = {
  layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18
    })
  ],
  zoom: 5,
  center: latLng(46.879966, -121.726909)
};

toolbar = {
  position: 'topleft',
  actions: [
    {
      options: {
        toolbarIcon: {
          html: '<img src="assets/static/images/heatmap.svg" height="30" width="30">',
          tooltip: 'Heatmap'
        }
      },
      addHooks: () => {
        // Do action functionality here
      });
    }
  ]
};
```
For more config options see documentation for:

- [Leaflet and ngx-leaflet](https://github.com/Asymmetrik/ngx-leaflet)
- [Leaflet toolbar](https://github.com/Leaflet/Leaflet.toolbar)


## Todo
- [ ] Add support for popup-style

## License
See LICENSE in repository for details.
