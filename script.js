function zapearByWeb(){
    var url = 'https://web.whatsapp.com/send?phone=55';

    var pnumber2 = window.document.getElementById('phoneNumber');
    
    var numConvert = Number(phoneNumber.value)
    var urlZap = url + numConvert;
    
    window.open(`${urlZap}`,`open WhatsApp`);
    
    return alert(phoneNumber.replace(/[^\d]+/g,''))
}

function zapearByPhone(){
    var url = 'https://wa.me/send?phone=55';

    var pnumber2 = window.document.getElementById('pnumber');

    var numConvert = Number(pnumber2.value)
    var urlZap = url + numConvert;

    window.open(`${urlZap}`,`open WhatsApp`);

}

document.getElementById('phoneNumber').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/\D/g, '');
  });
  