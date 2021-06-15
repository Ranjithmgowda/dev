import { LightningElement,track ,api,wire} from 'lwc';
import getRecords from "@salesforce/apex/LwcComponent.getRecords";

const columns = [
    { label: 'opportunity name', fieldName: 'Name' , type:'text'},
    { label: 'Stage', fieldName: 'StageName', type: 'picklist' }
];

export default class Lwc1 extends LightningElement {

     @track inputval1='TestValue';
     @track opportunityArray=[];
     @api recordId;
     @api StageName;
     @wire(getRecords ,{})
     details
}