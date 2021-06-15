import { LightningElement,api,track } from 'lwc';

export default class PersonalComponent extends LightningElement {
@track joindate;name;desg;phone;
    @api getPersonalComponent()
    {
       
        let joinDate=this.template.querySelector("[data-id='joindate']").value;
        let fullName=this.template.querySelector("[data-id='name']").value;
        let desg=this.template.querySelector("[data-id='desg']").value;
        let phone=this.template.querySelector("[data-id='phone']").value;
        let personalData={
            join:joinDate,name:fullName,desg:desg,phone:phone};
            console.log('child'+JSON.stringify(personalData));
    const selectEvent= new CustomEvent("personaldata",{
        detail:personalData
    });
    
    this.dispatchEvent(selectEvent);
}
}