({
    handleCancel : function(component, event, helper) {

        component.find("overlayLib").notifyClose();
    },
    handleSave : function(component, event, helper) {
        alert('OK');
    }
})