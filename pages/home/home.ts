import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';

import { Platform } from 'ionic-angular';

import { loadModules } from 'esri-loader';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit{

    @ViewChild('map') mapEl: ElementRef;
    mapView:any = null;

    constructor(public platform: Platform) { }

    async  getGeo() {

      // Reference: https://ionicframework.com/docs/api/platform/Platform/#ready
      await this.platform.ready();

      // Load the mapping API modules
      return loadModules([
        'esri/Map',
        'esri/views/MapView'
      ]).then(([Map, MapView]) => {

        console.log("Geo: starting map");

        let map = new Map({
          basemap: 'hybrid'
        });

        this.mapView = new MapView({
          // create the map view at the DOM element in this component
          container: this.mapEl.nativeElement,
          center: [-12.287, -37.114],
          zoom: 12,
          map: map
        });

      })
        .catch(err => {
          console.log("ArcGIS: " + err);
        });
    }

    ngOnInit() {
      this.getGeo();
    }
}
