({
	doInit : function(cmp, event, helper) {
		
        helper.getDataConfiguration(cmp);
	},

    cardToggle : function(component, event, helper) {

        var cardSection = component.find('showHideSection');
        $A.util.toggleClass(cardSection,'slds-is-collapsed');

        var sectionIcon = component.find('lockButton');
        $A.util.toggleClass(sectionIcon,'fa-rotate-90');
    }
})