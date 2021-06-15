public class ContactAndLeadSearch {
    
      Public static List<List<sObject>> searchContactsAndLeads(String word)
        {
            String searchQuery = 'FIND \'' + word +'\'  IN ALL FIELDS RETURNING Lead(Name,FirstName,LastName ), Contact(FirstName,LastName )';
            List<List<sObject>> conLead = search.query(searchQuery);
            system.debug(conLead);
            return conLead;
        }

}