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
	public static String getFormDataConfiguration(String recordId) {
		//return recordId; 


		return '[2,3,4,5]';
	}
}