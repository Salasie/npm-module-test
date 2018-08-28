#!/usr/bin/env node
 
var android= require('../arquitecturas/android/index.js');
var ios= require('../arquitecturas/ios/index.js');
//var lib= require('../lib/index.js');
var log = require('npmlog')
//var path = require('path')
var fs = require('fs');


if (fs.existsSync("./build.gradle")) {
    log.info('Tipo de Aplicación: Android')
    android.procesarAndroid()
}else if(fs.existsSync("./Podfile")){
    log.info('Tipo de Aplicación: IOS')
    ios.procesarIOS()
}else{
    log.info('Tipo de Aplicación: Desconocido')
}

log.info('Finalizado ejecución de reglas')
