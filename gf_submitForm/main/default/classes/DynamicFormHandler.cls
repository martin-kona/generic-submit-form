public class DynamicFormHandler {
    
    DynamicFormConfigurationManager configurationManager;
    
    public DynamicFormHandler(DynamicFormConfigurationManager configurationManager) {
    	this.configurationManager = configurationManager;    
    }
    
    public DynamicFormHandler() {
        this(new DynamicFormConfigurationManagerImpl());
    }

    public List<DynamicFormSectionConfiguration> getFormConfiguration(String recordId) {
        
        return configurationManager.getFormDataConfiguration(recordId);
    }

}