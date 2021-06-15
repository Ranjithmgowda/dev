import { LightningElement ,api ,track} from 'lwc';

export default class ProfessionalComponent extends LightningElement {
    @track company;empid;mail;
    @api getprofessionalComponent()
    {
        
        let company=this.template.querySelector("[data-id='company']").value;
        let empid=this.template.querySelector("[data-id='empid']").value;
        let mail=this.template.querySelector("[data-id='mail']").value;
        let profData={
            company:company,empid:empid,mail:mail};
    const selectEvent= new CustomEvent("profdata",{
        detail:profData
    });
    this.dispatchEvent(selectEvent);
}
}