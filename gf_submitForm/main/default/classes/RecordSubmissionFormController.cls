/*

The MIT License (MIT)

Copyright (c) 2018 Martin Kona

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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