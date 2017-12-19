({
	doInvokeApexCallout : function(cmp, event, helper) {
        
        var params = event.getParam("arguments");
        
		helper.invokeApexCallout(params.cmp, params.apexMethodName, params.apexMethodParameters, params.successHandler, 
                                 params.errorHandler, params.isStorable, params.isAbortable, params.isBackground, cmp);
	}
})