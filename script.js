(function(){
    'use strict';
    const form= document.getElementById('convert').addEventListener('submit',function(event){
        event.preventDefault();
        const distance=parseFloat(document.getElementById('distance').value);
        const answer=document.getElementById('answer');
        if (distance){
            //convert
            const conversion=(distance*1.609344).toFixed(3);
            //display
            const answer=document.getElementById('answer');
            answer.innerHTML=`<h2>Distance Miles converts to ${conversion} Kilometers</h2>`;
        }
        else{
            answer.innerHTML='<h2>Please provide the numbers</h2>';
        }
    });
})();