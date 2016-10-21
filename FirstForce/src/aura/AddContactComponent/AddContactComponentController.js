({
	getRelatedContact : function(cmp, event, helper) {
		var action = cmp.get("c.getRelatedContacts");
        action.setParams({ "meetingId" : cmp.get("v.meetingRowId")});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.listOfContact",response.getReturnValue());
            }else if (state === "ERROR") {
                alert('Error : ');
            }
        });
        $A.enqueueAction(action);
	},
        onCheck: function (cmp, event) {
        var selectedObjId = event.getSource().get("v.text");
        //alert(selectedObjId);
        var selectedObjIdsString = cmp.get("v.listOfSelectedCon");
        //alert("selectedObjIdsString="+selectedObjIdsString);
        
        if (event.getSource().get("v.value")) {
            
            if(selectedObjIdsString.length > 0){
                selectedObjIdsString += ';;'+selectedObjId;
            }else{
                selectedObjIdsString += selectedObjId;
            }
         
            
        }else{
            //alert("else");
            var tempString = "";
            if(selectedObjIdsString.indexOf(";;"+selectedObjId) !==-1){
                tempString = selectedObjIdsString.replace(";;"+selectedObjId, "");
            }else if(selectedObjIdsString.indexOf(selectedObjId+";;") !==-1){
                tempString = selectedObjIdsString.replace(selectedObjId+";;", "");
            }else{
                tempString = selectedObjIdsString.replace(selectedObjId, "");
            }
            
            selectedObjIdsString=tempString;
        }
        //alert("selectedObjIdsString="+selectedObjIdsString);
         cmp.set("v.listOfSelectedCon",selectedObjIdsString);
        
    }
})