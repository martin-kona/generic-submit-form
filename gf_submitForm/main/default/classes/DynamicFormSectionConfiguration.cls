public class DynamicFormSectionConfiguration {
    
    @AuraEnabled
    public String sectionName;

    public DynamicFormSectionConfiguration(String sectionName) {
    	this.sectionName = sectionName;    
    }
}