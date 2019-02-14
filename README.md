# ionic2-esri-map

Prototype app demonstrating one approach for using Ionic (v4+) with the ArcGIS API for JavaScript.

For a more complete Angular sample you should also check out: https://github.com/Esri/angular-cli-esri-map

# How to install

* Clone or download this repo
* Create an Ionic project. It can be either android or iOS

```
	npm install -g ionic
	ionic start testApp tabs
	cd testApp
    ionic cordova prepare android
	npm install esri-loader
```

* Run a quick test to make sure that boilerplate Ionic project loaded but running `ionic serve` from your projects
roots directory. If you don't get a web page launch then look for errors, something didn't install right.
* Then copy `index.html`, `tab1.page.html` and `tab1.page.ts` from this repo to their respective directories in your new project.
* Then build or run your project
 
```
  ionic cordova run android -1
```

* Be sure to test your app on a native device!


# Notes
* Last tested using
  - Ionic CLI 4.10.2 
  - Angular 7.2.4, 
  - Cordova 8.1.2, 
  - Cordova android 7.1.4,
  - Device OS: Android 9,
  - esri-loader: 2.6.0 
* Not getting a location result in Android - do the following steps:
	* If you are using Android Studio look for errors in Android Monitor. You may have also gotten an application alert box when the `watchPosition()` request timed out.
	* Add these permissions to the `AndroidManifest.xml file`. You can find it under `/<your_project_directory>/platforms/android/`:

	```
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
	```
	
	* Go into the application settings on the device and enable `Location`.
	* Close your application using swipe and then restart it.


