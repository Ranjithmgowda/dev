public class LwcComponent {
    @AuraEnabled(Cacheable=true)
    public static List<Opportunity>getRecords()
    {
        return [select id,name,StageName from Opportunity limit 5];
    }

}