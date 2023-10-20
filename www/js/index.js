document.addEventListener('deviceready', onDeviceReady, false);




function onDeviceReady() {

    cordova.plugins.UqudoIdPlugin.init(traceCallback);
    cordova.plugins.UqudoIdPlugin.setLocale("en");
    cordova.plugins.UqudoIdPlugin.isReadingSupported(cordova.plugins.UqudoIdPlugin.DocumentType.PASSPORT,success,failure);

    var token = "ACCESS_TOKEN_HERE";

    var doc = new cordova.plugins.UqudoIdPlugin.DocumentBuilder().setDocumentType(cordova.plugins.UqudoIdPlugin.DocumentType.PASSPORT)
        .enableReading()
        .build();

    var enrollObject =  new cordova.plugins.UqudoIdPlugin.EnrollmentBuilder()
        .setToken(token)
        .enableFacialRecognition()
        .enableBackgroundCheck()
        .add(doc)
        .build();

    cordova.plugins.UqudoIdPlugin.enroll(enrollObject, success, failure);




}

function traceCallback(result){
    console.log('----Trace=' + result);
};
function success(result){
    window.alert(result);

};
function failure(error){
    window.alert(error);
};
