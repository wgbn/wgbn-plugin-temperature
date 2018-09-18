var exec = require('cordova/exec');

exports.checkTemperature = function (success, error) {
    exec(success, error, 'TemperaturePlugin', 'checkTemperature');
};

exports.isDeviceCompatible = function(success, error) {
    exec(success, error, 'Temperature', 'isDeviceCompatible');
};