var billAmt=document.querySelector('.bill');
var cashAmt=document.querySelector('.cash');
var btN=document.querySelector('.btn');
btN.addEventListener('click',showOutput)


function showOutput(){

var res=parseInt(cashAmt.value,10)-parseInt(billAmt.value,10);
var cnt_2000=0;
var cnt_500=0;
var cnt_100=0;
var cnt_20=0;
var cnt_10=0;
var cnt_5=0;
var cnt_1=0;

    while(res!=0){
        if(res>=2000){
            cnt_2000+=Math.floor(res/2000);
            res=res%2000;
        }
        if(res>=500){
            cnt_500+=Math.floor(res/500);
            res=res%500;
        }

        if(res>=100){
            cnt_100+=Math.floor(res/100);
            res=res%100;
        }
        if(res>=20){
            cnt_20+=Math.floor(res/20);
            res=res%20;
        }
        if(res>=10){
            cnt_10+=Math.floor(res/10);
            res=res%10;
        }
        if(res>=5){
            cnt_5+=Math.floor(res/5);
            res=res%5;
        }

        if(res>=1){
            cnt_1+=Math.floor(res/2);
            res=res%2;
        }
    }

    var notesOF2000=document.querySelector('.noOfNotes2000');
    var notesOF500=document.querySelector('.noOfNotes500');
    var notesOF100=document.querySelector('.noOfNotes100');
    var notesOF20=document.querySelector('.noOfNotes20');
    var notesOF10=document.querySelector('.noOfNotes10');
    var notesOF5=document.querySelector('.noOfNotes5');
    var notesOF1=document.querySelector('.noOfNotes1');

       notesOF2000.innerText=cnt_2000;
       notesOF500.innerText=cnt_500;
       notesOF100.innerText=cnt_100;
       notesOF20.innerText=cnt_20;
       notesOF10.innerText=cnt_10;
       notesOF5.innerText=cnt_5;
       notesOF1.innerText=cnt_1;


}
