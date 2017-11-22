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

      let latitude: number = 0, longitude: number = 0;

      const options = {
        enableHighAccuracy: true, // use any allowed location provider
        timeout: 60000            // it can take quite a while for a cold GPS to warm up
      };

      navigator.geolocation.watchPosition( position=> {

          latitude = position.coords.latitude;
          longitude = position.coords.longitude;

          // Center map after it has been initialized
          if(this.mapView != null) {
            console.log("Centering map: " + latitude + ", " + longitude);
            this.mapView.center = [longitude, latitude];
          }

        }, error => {

          switch(error.code) {
            case error.PERMISSION_DENIED:
              console.error("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.error("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              console.error("The request to get user location timed out.");
              alert("Unable to start geolocation. Check application settings.");
              break;
          }
        }, options
      );

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
