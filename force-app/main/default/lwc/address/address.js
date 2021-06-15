import { LightningElement,api,track } from 'lwc';

export default class AdressinfoComponent extends LightningElement {
@track address;city;state;zipcode;
    @api getAddressData()
    {  //console.log('enter');
        
        let address=this.template.querySelector("[data-id='address']").value;
        //console.log('debug');
        let city=this.template.querySelector("[data-id='city']").value;
        let state=this.template.querySelector("[data-id='state']").value;
        let zipcode=this.template.querySelector("[data-id='zipcode']").value;
        let addressData={
            address:address,city:city,state:state,zipcode:zipcode};
           console.log('addressData'+JSON.stringify(addressData));
    const selectEvent= new CustomEvent("addressdata",{
        detail:addressData
    });
    this.dispatchEvent(selectEvent);
}

}