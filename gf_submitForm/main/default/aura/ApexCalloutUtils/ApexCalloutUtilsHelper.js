({
    
    invokeApexCallout : function(cmp, apexMethodName, apexMethodParameters, successHandler, errorHandler, 
                                 isStorable, isAbortable, isBackground, thisCmp) {

        let successState = thisCmp.get('v.successState');
        let errorState = thisCmp.get('v.errorState');
        let incompleteState = thisCmp.get('v.incompleteState');
        
        var action = cmp.get(apexMethodName);        

        if (apexMethodParameters) {
            action.setParams(apexMethodParameters);
        }        
        
        action.setCallback(this, function(response) {

            var state = response.getState();

            var majorUtils = thisCmp.find("MajorUtils");      

            if (state === successState) {

                var returnValue = response.getReturnValue();
                
                if (majorUtils.isFunction(successHandler)) {
                    successHandler(cmp, returnValue);
                } else {
                    this.defaultSuccessStateHandler(cmp, thisCmp, returnValue);
                }                
                
            } else if (state === incompleteState) {

                this.defaultIncompleteStateHandler(cmp, thisCmp, apexMethodName);
            } else {

                var errors = response.getError();
                
                if (majorUtils.isFunction(errorHandler)) {
                    errorHandler(cmp, errors);
                } else {
                    this.defaultErrorStateHandler(cmp, thisCmp, apexMethodName, errors);
                }
            }
        });

        if (isStorable) {
            action.setStorable();
        }
        
        if (isStorable) {
            action.isAbortable();
        }        

        if (isBackground) {
            action.setBackground();
        }         

        $A.enqueueAction(action);
    },
    
    defaultSuccessStateHandler : function(originalCmp, cmp, response) {
        
        var majorUtils = cmp.find("MajorUtils");
        
        majorUtils.displayToast(originalCmp, 'success', 'Apex response: \n' + response);
    },

    defaultIncompleteStateHandler : function(originalCmp, cmp, apexMethodName) {
        
        var majorUtils = cmp.find("MajorUtils");
        
        majorUtils.displayToast(originalCmp, 'error', apexMethodName + ":Unknown error", 'sticky');
    },    
    
    defaultErrorStateHandler : function(originalCmp, cmp, apexMethodName, errors) {
        
        var majorUtils = cmp.find("MajorUtils");
        
        if (errors) {
            if (errors[0] && errors[0].message) {
                majorUtils.displayToast(originalCmp, 'error', apexMethodName + ":Error message: " + errors[0].message, 'sticky');
            }
        } else {
            majorUtils.displayToast(originalCmp, 'error', apexMethodName + ":Unknown error", 'sticky');
        }        
    }
})