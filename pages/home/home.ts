import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';

import { Platform } from 'ionic-angular';

import { loadModules } from 'esri-loader';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit{

    @ViewChild('map') mapEl: ElementRef;

    constructor(public platform: Platform) { }

    async  getGeo() {

      // Reference: https://ionicframework.com/docs/api/platform/Platform/#ready
      await this.platform.ready();

      // Load the ArcGIS API for JavaScript modules
      const [Map, MapView]:any = await loadModules([
        'esri/Map',
        'esri/views/MapView'
      ])
      .catch(err => {
        console.error("ArcGIS: ", err);
      });

      console.log("Starting up ArcGIS map");

      let map = new Map({
        basemap: 'hybrid'
      });

      let mapView = new MapView({
        // create the map view at the DOM element in this component
        container: this.mapEl.nativeElement,
        center: [-12.287, -37.114],
        zoom: 12,
        map: map
      });
    }

    ngOnInit() {
      this.getGeo();
    }
}
