/**************************************************************************************************
*** Javascript Class Name         : EmployeeComponent
*** Javascript class Description  : Whenever User Clicks the Submit button , the Child components data 
                                    will be saved in the Object.                                                                        
*** Author                        : Coreflex Solutions
** Javascript Class Created Date  : 5/19/2021
*        Modified Date     : 5/20/2021
*        Created By        : Ranjith M
**************************************************************************************************/
import { LightningElement, track } from 'lwc';
import getAllFields from "@salesforce/apex/EmployeeComponent.getAllFields";
//import Employee_object from "@salesforce/schema/Employee__c"

export default class EmployeeComponent extends LightningElement {


    @track adress;
    handleAdress(event) {
        this.adress = event.detail;
    }

    @track prof
    handleprof(event) {
        this.prof = event.detail;
    }
    @track personal
    handlepersonal(event) {
        this.personal = event.detail;
    }
    handleSubmit() {
        try {
            this.template.querySelector("c-adressinfo-component").getAddressData();

            this.template.querySelector("c-professional-component").getprofessionalComponent();

            this.template.querySelector("c-personal-component").getPersonalComponent();

            let mainData = {
                address: this.adress,
                professional: this.prof,
                personal: this.personal
            }

            getAllFields({ requestObj: JSON.stringify(mainData) });
        }
        catch (error) {
            console.log(error);
        }
    }




}