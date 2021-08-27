const billAmount=document.querySelector('.bill-amount');
const cashGiven=document.querySelector('.cash-given');
const checkButton=document.querySelector('.check');

const message=document.querySelector('.error-message');
const noOfNotes=document.querySelectorAll('.no-of-notes');
const availableNotes=[2000,500,100,20,10,5,1];

checkButton.addEventListener("click",validateBillAndCashAmount);

function validateBillAndCashAmount(){
    hideMessage();
    if(Number(billAmount.value)>0){
        if(Number(cashGiven.value)>=Number(billAmount.value)){
            const amountToBeReturned=Number(cashGiven.value)-Number(billAmount.value);
            calculateChange(amountToBeReturned);

        }else{
            showMessage("The cash should be atleast equal to bill amount");
        }

    }else{
        showMessage("The bill amount should be greater than 0");

    }
}

function calculateChange(amountToBeReturned){
    for(var i=0;i<availableNotes.length;i++){
        var numberOfNotes=Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned=amountToBeReturned%availableNotes[i];
        noOfNotes[i].innerText=numberOfNotes;
    }
}

function hideMessage(){
    message.style.display="none";
}

function showMessage(mgs){
    message.style.display="block";
    message.innerText=mgs;
}


