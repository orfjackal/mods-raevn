//===================================================
// rBlueprintInfoFramework - Blueprint Info Framework
//---------------------------------------------------
// rBlueprintInfoFramework_scene.js
// Created by Raevn
// Version 1.2.0 (2014/02/20)
//---------------------------------------------------

model.BIFReady = ko.observable(bif.getBIFReady());

bif.registerBIFReadyCallback(function() {
	model.BIFReady(true);
});

if (model.BIFReady() == false) {
	bif.initialiseBIF(false, true);
}