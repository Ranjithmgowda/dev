import { LightningElement,track ,api,wire} from 'lwc';
import getRecords from "@salesforce/apex/LwcComponent.getRecords";
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import STAGE_NAME from '@salesforce/schema/Opportunity.StageName'
import AMOUNT from '@salesforce/schema/Opportunity.Amount'
const fields=[Amount,StageName];
const columns = [
    { label: 'opportunity name', fieldName: 'Name' , type:'text'},
    { label: 'Stage', fieldName: 'StageName', type: 'picklist' }
];

export default class Lwc1 extends LightningElement {

     @track inputval1='TestValue';
     @track opportunityArray=[];
     @api recordId;
    // @api StageName;
     @wire(getRecords ,{})
     details
     @wire(getRecord,{recordId:'$recordId',fields})
     opportunity;
    
     renderedCallback() {
        console.log(this.opportunity.data);
      }
     get oppAmount()
     {
         return getFieldValue(this.opportunity.data,AMOUNT);
     }
     get oppStage()
     {
         return getFieldValue(this.opportunity.data,STAGE_NAME);
     }
}