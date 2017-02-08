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

  map: any;

  constructor(public navCtrl: NavController, private esriLoader: EsriLoaderService) { }

  ngOnInit() {

    return this.esriLoader.load({
      url: 'https://js.arcgis.com/3.19/'
    }).then(() => {

      return this.esriLoader.loadModules(['esri/map']).then(([Map]) => {
        // create the map at the DOM element in this component
        const map = new Map(this.mapEl.nativeElement, {
          center: [-118, 34.5],
          zoom: 8,
          basemap: "topo"
        });
      });
    });
  }
}
