public with sharing class RecordSubmissionFormController {

	@AuraEnabled
	public static String getFormDataConfiguration(String recordId) {
		return recordId;
	}
}