# ionic-esri-map

Prototype app demonstrating one approach for using Ionic with the ArcGIS API for JavaScript.

# How to install

* Clone or download this repo
* Create an Ionic project. It can be either android or iOS

```
	npm install –g cordova ionic
	ionic start testApp tabs
	cd testApp
	ionic cordova platform add android

	npm install angular-esri-loader
```

* Then copy `index.html`, `home.html` and `home.ts` from this repo to their respective directories in your new project.
* Then build your project
 
```
 
	ionic build android 
	ionic serve
```

* Be sure to test your app on a native device!


