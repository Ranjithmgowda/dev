import { LightningElement,api,track } from 'lwc';

export default class AdressinfoComponent extends LightningElement {
@track address;city;state;zipcode;
    @api getAddressData()
    {  
        
        let address=this.template.querySelector("[data-id='address']").value;
        
        let city=this.template.querySelector("[data-id='city']").value;
        let state=this.template.querySelector("[data-id='state']").value;
        let zipcode=this.template.querySelector("[data-id='zipcode']").value;
        let addressData={
            address:address,city:city,state:state,zipcode:zipcode};
           
    const selectEvent= new CustomEvent("addressdata",{
        detail:addressData
    });
    this.dispatchEvent(selectEvent);
}

}