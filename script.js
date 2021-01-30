function ticketHandle(ticket,isIncrease){
    const ticketCount = document.getElementById(ticket+'-class');
    const ticketNumber = parseInt(ticketCount.value);
    
    let newTicketCount = ticketNumber;
    if(isIncrease == true) {
       newTicketCount = ticketNumber + 1;
    }
    if(isIncrease == false && ticketNumber>0){
        newTicketCount = ticketNumber - 1;
    }

    let totalticket =0 ;
    if ( ticket == 'first'){
        totalticket = newTicketCount * 150;
        document.getElementById('f-class-total').innerText = totalticket;
    }
    if ( ticket == 'economy'){
        totalticket = newTicketCount * 100;
        document.getElementById('eco-class-total').innerText = totalticket;
    }

    document.getElementById(ticket +'-class').value = newTicketCount;
    totalCalculation();
}

function totalCalculation(){
    const firstClassTotal = document.getElementById('f-class-total').innerText;
    const firtClassPrice = parseInt(firstClassTotal);
    const ecoClassTotal = document.getElementById('eco-class-total').innerText;
    const ecoClassPrice = parseInt(ecoClassTotal);

    const subTotal = firtClassPrice + ecoClassPrice;
    document.getElementById('subtotal').innerText = subTotal;
    const vat = subTotal * 0.1;
    document.getElementById('vat').innerText = vat;

    const total = subTotal + vat;
    document.getElementById('total').innerText = total;
}

const bookBtn = document.getElementById('booknow');
bookBtn.addEventListener('click',function(){
    const getForm = document.getElementById('form');
    getForm.style.display = 'none';
    const getText = document.getElementById('book-text');
    getText.style.display = 'none';

    document.getElementById('thanks').style.display = "block";
    thanksPage();
});

function thanksPage(){
    const ticketFirst = document.getElementById('first-class');
    const ticketEconomy = document.getElementById('economy-class');
    const firstClass = parseInt(ticketFirst.value);
    const ecoClass = parseInt(ticketEconomy.value);
    document.getElementById('ticketFirst').innerText = firstClass;
    document.getElementById('ticketEconomy').innerText = ecoClass;
    const total = document.getElementById('total').innerText;
    const totalShow = parseInt(total);
    document.getElementById('totalshow').innerText = totalShow;
}