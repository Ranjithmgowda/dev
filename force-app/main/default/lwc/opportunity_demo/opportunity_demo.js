import { LightningElement,wire,track } from 'lwc';
import getRecords from "@salesforce/apex/OpportunityDemo.getRecords"
export default class Opportunity_demo extends LightningElement {

@track  columns=[
    { label: 'opportunity name', fieldName: 'Name' , type:'text'},
    { label: 'Stage', fieldName: 'StageName', type: 'picklist' },
    { label: 'Amount', fieldName: 'Amount', type: 'number' },
    { label: 'Lead Source', fieldName: 'LeadSource', type: 'picklist' },
];
    @wire(getRecords ,{})
     details
}