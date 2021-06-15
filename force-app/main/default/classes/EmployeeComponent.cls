/**************************************************************************************************
*** Apex Class Name        : EmployeeComponent
*** ApexClass Description  : Whenever employee information is submitted , record will be saved
                              in an employee  custom object                                                                               
*** Author                 : Coreflex Solutions
**Apex Class Created Date  : 5/19/2021
*        Modified Date     : 5/20/2021
*        Created By        : Ranjith M
**************************************************************************************************/
public class EmployeeComponent {
    @AuraEnabled
    public static void getAllFields( String requestObj)
    {
        Employee__c emp=new Employee__c();
        Map<String,Object> rawObj = (Map<String,Object>) JSON.deserializeUntyped(requestObj);
        Map<String,Object> responseObj = (Map<String,Object>)rawObj.get('address');
        Map<String,Object> responseObj1 = (Map<String,Object>)rawObj.get('professional');
        Map<String,Object> responseObj2 = (Map<String,Object>)rawObj.get('personal');
        emp.Address__c=string.valueOf(responseObj.get('address'));
        emp.City__c=string.valueOf(responseObj.get('city'));
        emp.State__c=string.valueOf(responseObj.get('state'));
        if(!string.isEmpty(string.valueof(responseObj.get('zipcode'))))
        {
            emp.ZipCode__c=Integer.valueOf(responseObj.get('zipcode'));
        }
        
        
        emp.company_name__c=string.valueOf(responseObj1.get('company'));
        if(responseObj1.get('empid')!=NULL)
        {
            emp.Employee_id__c=Integer.valueOf(responseObj1.get('empid'));
        }
        emp.Employee_mail__c=string.valueOf(responseObj1.get('mail'));
        if(responseObj2.get('join')!=NULL){
            
            emp.Join_Date__c =date.valueOf(String.valueOf(responseObj2.get('join')));  
        }
        emp.Name__c=string.valueOf(responseObj2.get('name'));
        emp.Designation__c=string.valueOf(responseObj2.get('desg'));
        if(responseObj2.get('phone')!=NULL)
        {
            emp.Phone__c=string.valueOf(responseObj2.get('phone'));
        }
        try
        {
            insert emp;
        }
        catch(Exception e)
        {
            system.debug('error'+e);
        }
            
    }
}