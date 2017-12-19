/**
* @author Martin Kona
* @date 2017
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
	public static String getFormDataConfiguration(String recordId) {
		//return recordId; 


		return '{ "label" : fieldLabel, "value" : cmp.getReference("{!v." + dataWrapperObjectPrefix + "." + mdt.Field_Name_API__c + "}"';
	}
}