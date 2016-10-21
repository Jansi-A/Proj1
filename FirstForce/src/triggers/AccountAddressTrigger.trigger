trigger AccountAddressTrigger on Account (before insert, before update) {
    List<Account> tobeUpdatedAccountList = new List<Account> ();
    for(Account a:Trigger.New){
        if(a.Match_Billing_Address__c){
              a.ShippingPostalCode = a.BillingPostalCode ; 
            System.debug('Updating='+a.Name);
            //tobeUpdatedAccountList.add(a);
        }
    }
//update tobeUpdatedAccountList;
}