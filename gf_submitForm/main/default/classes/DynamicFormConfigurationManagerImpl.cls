public class DynamicFormConfigurationManagerImpl implements DynamicFormConfigurationManager {

    public List<DynamicFormSectionConfiguration> getFormDataConfiguration(Id recordId) {
        
        List<DynamicFormSectionConfiguration> sectionConfigurations = new List<DynamicFormSectionConfiguration>();
        
        sectionConfigurations.add(new DynamicFormSectionConfiguration('Section 1'));
        sectionConfigurations.add(new DynamicFormSectionConfiguration('Section 2'));
        sectionConfigurations.add(new DynamicFormSectionConfiguration('Section 3'));
        sectionConfigurations.add(new DynamicFormSectionConfiguration('Section 4'));        
        
        return sectionConfigurations;
    }
}