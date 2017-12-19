/**
* @author Martin Kona
* @date December 2017
*
* @description Main record submission controller for dynamic form
*/
public with sharing class RecordSubmissionFormController {

	/**
	 * @description Generates form configuration used for dynamic components rendering
	 * @param  recordId defines record to be queried and object type for form metadata 	 
	 * @return form configuration data, which defines sections and fields with security settings and data	 
	 */
	@AuraEnabled
	public static DynamicFormSectionConfigurationWrapper getFormDataConfiguration(String recordId) {
		
        DynamicFormSectionConfigurationWrapper configurationWrapper;       
        
        try {
        	List<DynamicFormSectionConfiguration> sectionConfigurations = new DynamicFormHandler().getFormConfiguration(recordId);  
            configurationWrapper = new DynamicFormSectionConfigurationWrapper(true, DynamicFormConstants.SUCCESS, sectionConfigurations);
        } catch (Exception e) {
            configurationWrapper = new DynamicFormSectionConfigurationWrapper(false, e.getMessage(), NULL);            
        }        

		return configurationWrapper;
	}
    
    public class DynamicFormSectionConfigurationWrapper {
        
        @AuraEnabled
        public Boolean isSuccess;
        @AuraEnabled
		public String message;
        @AuraEnabled
        public List<DynamicFormSectionConfiguration> sectionConfigurations;
        
        public DynamicFormSectionConfigurationWrapper(Boolean isSuccess, String message, List<DynamicFormSectionConfiguration> sectionConfigurations) {
        	this.isSuccess = isSuccess;
            this.message = message;
            this.sectionConfigurations = sectionConfigurations;
        }
    }
}