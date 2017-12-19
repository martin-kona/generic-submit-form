({
    displayToast : function(cmp, type, message, mode, messageTemplate, templateData) {

        var toastEvent = $A.get("e.force:showToast");

        if (!$A.util.isUndefined(toastEvent)) {

            toastEvent.setParams({
                type: type,
                message: message,
                mode : mode,
                messageTemplate: messageTemplate,
                messageTemplateData: templateData
            });
            toastEvent.fire();
        } else {            
            this.displayPopUpModal(cmp, type, 'Hi!', message);
        }
    },

    displayPopUpModal : function(cmp, type, title, message) {

        $A.createComponent(
            "ui_modal:modal", {'aura:id': 'popupModal'},
            function(newModal, status, errorMessage){
                if (status === "SUCCESS") {
                    //Add the new modal to the app body
                    var body = cmp.get("v.body");
                    body.push(newModal);
                    cmp.set("v.body", body);
                    newModal.openModalAlert(title, message);
                } else {
                    console.log("Failed to create modal");
                    console.log("Error status: " + status);
                    console.log("Error message: " + errorMessage);
                }
            }
        );
    },

    navigateToSObject : function(recordId) {

        var navEvt = $A.get("e.force:navigateToSObject");

        if (!$A.util.isUndefined(navEvt)) {

            navEvt.setParams({
                "recordId": recordId
            });
            navEvt.fire();            
        } else {
            // custom redirect
          
        }
    },

    isFunction : function(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    }    
})