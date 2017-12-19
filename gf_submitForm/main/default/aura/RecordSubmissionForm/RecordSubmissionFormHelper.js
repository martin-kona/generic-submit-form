({
	getDataConfiguration : function(cmp) {
		
		var calloutUtils = cmp.find("ApexCalloutUtils");
		var calloutParams = {
			recordId : cmp.get('v.recordId')
		};				

		calloutUtils.invokeApexCallout(cmp, 'c.getFormDataConfiguration', calloutParams, this.getDataConfigurationSuccessHandler);
	},

	getDataConfigurationSuccessHandler : function(cmp, responseValue) {

		var formConfiguration = JSON.parse(responseValue);
		
		cmp.set('v.formConfiguration', formConfiguration);
	}
})