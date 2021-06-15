trigger ClosedOpportunityTrigger on Opportunity (after insert , after update) {
  List<Task>tasklist= new List<Task>();
    for(opportunity opp: Trigger.new)
    {
        if(opp.StageName=='Closed Won')
        {
            tasklist.add(new Task(Subject = 'Follow up Test Task',WhatId= opp.Id));
        }
    }
    if(tasklist.size()>0)
    {
        insert tasklist;
    }
}