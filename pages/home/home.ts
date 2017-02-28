import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';

import { NavController } from 'ionic-angular';

import { EsriLoaderService } from 'angular2-esri-loader';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ EsriLoaderService ]
})
export class HomePage implements OnInit{

  @ViewChild('map') mapEl: ElementRef;

  constructor(public navCtrl: NavController, private esriLoader: EsriLoaderService) { }

  ngOnInit() {

    let latitude: number = 0, longitude: number = 0, map: any = null, MapPoint: any = null;

    const options = {
      enableHighAccuracy: true, // use any allowed location provider
      timeout: 60000            // it can take quite a while for a cold GPS to warm up
    };

    // Demonstrates starting up geolocation before loading ArcGIS JS API
    // You can also wait until after the map has loaded. It all depends
    // on your requirements.

    let watchId = navigator.geolocation.watchPosition( position=> {

        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        centerMap(latitude, longitude);

      }, error => {
        console.log("Watch error: " + error.code);
      }, options
    );

    this.esriLoader.load({
      url: 'https://js.arcgis.com/3.19/'
    }).then(() => {

      this.esriLoader.loadModules(['esri/map', 'esri/geometry/Point']).then(([Map, Point]) => {
        // create the map at the DOM element in this component
        map = new Map(this.mapEl.nativeElement, {
          center: [-118, 34.5],
          zoom: 8,
          basemap: "topo"
        });

        MapPoint = Point;

        // Shut off geolocation when user zooms.
        map.on("zoom-end",function(){
          navigator.geolocation.clearWatch(watchId);
          console.log("Geolocation stopped.");
        });

      });
    });

    // Keep centering the map until we shut off geolocation
    function centerMap(lat, lon) {
      if(map != null) {
        console.log("Centering map: " + lat + ", " + lon);
        map.centerAt(MapPoint(lon, lat));
      }
    }
  }
}
