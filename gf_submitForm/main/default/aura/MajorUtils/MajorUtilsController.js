({
	doDisplayToast : function(component, event, helper) {
        
        var params = event.getParam("arguments");
        
		helper.displayToast(params.cmp, params.type, params.message, params.mode, params.messageTemplate, params.templateData);
	},

	doDisplayPopUpModal : function(component, event, helper) {

		var params = event.getParam("arguments");

		helper.displayPopUpModal(params.cmp, params.type, params.title, params.message);
	},

	doNavigateToSObject : function(component, event, helper) {
        
        var params = event.getParam("arguments");
        
		helper.navigateToSObject(params.recordId);
	},

	doIsFunction : function(component, event, helper) {
        
        var params = event.getParam("arguments");
        
		helper.isFunction(params.obj);
	}
})