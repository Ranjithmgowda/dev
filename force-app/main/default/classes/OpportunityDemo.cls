public class OpportunityDemo {
     @AuraEnabled(Cacheable=true)
    public static List<Opportunity>getRecords()
    {
        return [select id,name,StageName,Amount,LeadSource from Opportunity limit 20];
    }

}