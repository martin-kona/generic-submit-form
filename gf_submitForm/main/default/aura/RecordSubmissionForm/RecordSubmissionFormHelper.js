({
	getDataConfiguration : function(cmp) {
		
		var calloutUtils = cmp.find("ApexCalloutUtils");
		var calloutParams = {
			recordId : cmp.get('v.recordId')
		};		

		calloutUtils.invokeApexCallout(cmp, 'c.getFormDataConfiguration', calloutParams);
	}
})