# ionic2-esri-map

Prototype app demonstrating one approach for using Ionic (v3+) with the ArcGIS API for JavaScript.

For a more complete Angular sample you should also check out: https://github.com/Esri/angular-cli-esri-map

# How to install

* Clone or download this repo
* Create an Ionic project. It can be either android or iOS

```
	npm install –g cordova ionic
	ionic start testApp tabs
	cd testApp
	ionic cordova platform add android
	npm install esri-loader
```

* Run a quick test to make sure that boilerplate Ionic project loaded but running `ionic serve` from your projects
roots directory. If you don't get a web page launch then look for errors, something didn't install right.
* Then copy `index.html`, `home.html` and `home.ts` from this repo to their respective directories in your new project.
* Then build or run your project
 
```
	ionic cordova build android 
	ionic cordova run android
```

* Be sure to test your app on a native device!


# Notes
* Last tested using
  - Ionic 3.20.0, 
  - Angular Core 5.2.11, 
  - Cordova 8.0.0, 
  - Cordova android 7.0.0,
  - Device OS: Android 8.1.0,
  - esri-loader: 2.4.0 
* Not getting a location result in Android - do the following steps:
	* If you are using Android Studio look for errors in Android Monitor. You may have also gotten an application alert box when the `watchPosition()` request timed out.
	* Add these permissions to the `AndroidManifest.xml file`. You can find it under `/<your_project_directory>/platforms/android/`:

	```
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
	```
	
	* Go into the application settings on the device and enable `Location`.
	* Close your application using swipe and then restart it.


