({
    doInit : function(component, evt, helper) {

        var modalBody;
        var modalHeader;
        var modalFooter;
        let recordId = component.get("v.recordId");

        $A.createComponents([
                ["c:gf_DynamicForm", { recordId : recordId}],
                ["c:gf_DynamicFormHeader", { recordId : recordId}],
                ["c:gf_DynamicFormFooter",{}]
            ],
            function(components, status){
                if (status === "SUCCESS") {
                    modalBody = components[0];
                    modalHeader = components[1];
                    modalFooter = components[2];
                    component.find('overlayLib').showCustomModal({
                       header: modalHeader,
                       body: modalBody,
                       footer: modalFooter,
                       showCloseButton: false,
                       closeCallback: function() {
                           $A.get("e.force:closeQuickAction").fire();
                       }
                   })
                }
            }
        );
    },

    handlePathSelect : function(component, evt, helper) {

    }
})