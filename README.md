# ionic2-esri-map

Prototype app demonstrating one approach for using Ionic2 with the ArcGIS API for JavaScript.

# How to install

* Clone or download this repo
* Create an Ionic project. It can be either android or iOS

```
	ionic install –g cordova ionic
	ionic start --v2 testApp tabs
	cd testApp
	ionic platform add android 
	npm install angular2-esri-loader esri-loader
```

* Then copy `index.html`, `home.html` and `home.ts` from this repo to their respective directories in your new project.
* Then build your project
 
```
 
	ionic build android 
	ionic serve
```

* Be sure to test your app on a native device!


