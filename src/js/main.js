/**
 * Carousel Promo
 */
const mySiema = new Siema({
  perPage: {
    320: 1,
    768: 2,
    992: 3,
  },
});
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => mySiema.prev());
next.addEventListener('click', () => mySiema.next());




/**
 * Inicialize app
 */
function init(time) {

  const url = "https://7ac2b8ab-f3e5-4534-863d-90dd424a6405.mock.pstmn.io/prices";

  fetch(url)
  .then(response => response.json())
  .then(data => {
    promoPrices(data.shared.products, time)
  })
  .catch(error => console.error(error))

}

/**
 * Set Values in fields
 */
function promoPrices(data, time) {
  var discount = 40;
  var idProductPricePlanoP = data.planoP.id;
  var idProductPricePlanoM = data.planoM.id;
  var idProductPricePlanoTurbo = data.planoTurbo.id;
  console.log(time);

  if ( (time) || (time === '3_year') ) {
    var cyclePlano = 'triennially';
    var originalPricePlanoP = data.planoP.cycle.triennially.priceOrder;
    var originalPricePlanoM = data.planoM.cycle.triennially.priceOrder;
    var originalPricePlanoTurbo = data.planoTurbo.cycle.triennially.priceOrder;

    var originalPricePlanoPDiscount = (originalPricePlanoP - ((originalPricePlanoP / 100) * discount)).toFixed(2);
    var originalPricePlanoMDiscount = (originalPricePlanoM - ((originalPricePlanoM / 100) * discount)).toFixed(2);
    var originalPricePlanoTurboDiscount = (originalPricePlanoTurbo - ((originalPricePlanoTurbo / 100) * discount)).toFixed(2);

    var originalPriceQuotaPlanoP = (originalPricePlanoPDiscount / data.planoP.cycle.triennially.months).toFixed(2);
    var originalPriceQuotaPlanoM = (originalPricePlanoMDiscount / data.planoM.cycle.triennially.months).toFixed(2);
    var originalPriceQuotaPlanoTurbo = (originalPricePlanoTurboDiscount / data.planoTurbo.cycle.triennially.months).toFixed(2);

    var originalPriceEconomyPlanoP = (originalPricePlanoP - originalPricePlanoPDiscount).toFixed(2);
    var originalPriceEconomyPlanoM = (originalPricePlanoM - originalPricePlanoMDiscount).toFixed(2);
    var originalPriceEconomyPlanoTurbo = (originalPricePlanoTurbo - originalPricePlanoTurboDiscount).toFixed(2);
  }

  if ( time === '1_year' ) {
    var cyclePlano = 'annually';
    var originalPricePlanoP = data.planoP.cycle.annually.priceOrder;
    var originalPricePlanoM = data.planoM.cycle.annually.priceOrder;
    var originalPricePlanoTurbo = data.planoTurbo.cycle.annually.priceOrder;

    var originalPricePlanoPDiscount = (originalPricePlanoP - ((originalPricePlanoP / 100) * discount)).toFixed(2);
    var originalPricePlanoMDiscount = (originalPricePlanoM - ((originalPricePlanoM / 100) * discount)).toFixed(2);
    var originalPricePlanoTurboDiscount = (originalPricePlanoTurbo - ((originalPricePlanoTurbo / 100) * discount)).toFixed(2);

    var originalPriceQuotaPlanoP = (originalPricePlanoPDiscount / data.planoP.cycle.annually.months).toFixed(2);
    var originalPriceQuotaPlanoM = (originalPricePlanoMDiscount / data.planoM.cycle.annually.months).toFixed(2);
    var originalPriceQuotaPlanoTurbo = (originalPricePlanoTurboDiscount / data.planoTurbo.cycle.annually.months).toFixed(2);

    var originalPriceEconomyPlanoP = (originalPricePlanoP - originalPricePlanoPDiscount).toFixed(2);
    var originalPriceEconomyPlanoM = (originalPricePlanoM - originalPricePlanoMDiscount).toFixed(2);
    var originalPriceEconomyPlanoTurbo = (originalPricePlanoTurbo - originalPricePlanoTurboDiscount).toFixed(2);
  }

  if ( time === '1_month' ) {
    var cyclePlano = 'monthly';
    var originalPricePlanoP = data.planoP.cycle.monthly.priceOrder;
    var originalPricePlanoM = data.planoM.cycle.monthly.priceOrder;
    var originalPricePlanoTurbo = data.planoTurbo.cycle.monthly.priceOrder;

    var originalPricePlanoPDiscount = (originalPricePlanoP - ((originalPricePlanoP / 100) * discount)).toFixed(2);
    var originalPricePlanoMDiscount = (originalPricePlanoM - ((originalPricePlanoM / 100) * discount)).toFixed(2);
    var originalPricePlanoTurboDiscount = (originalPricePlanoTurbo - ((originalPricePlanoTurbo / 100) * discount)).toFixed(2);

    var originalPriceQuotaPlanoP = (originalPricePlanoPDiscount / data.planoP.cycle.monthly.months).toFixed(2);
    var originalPriceQuotaPlanoM = (originalPricePlanoMDiscount / data.planoM.cycle.monthly.months).toFixed(2);
    var originalPriceQuotaPlanoTurbo = (originalPricePlanoTurboDiscount / data.planoTurbo.cycle.monthly.months).toFixed(2);

    var originalPriceEconomyPlanoP = (originalPricePlanoP - originalPricePlanoPDiscount).toFixed(2);
    var originalPriceEconomyPlanoM = (originalPricePlanoM - originalPricePlanoMDiscount).toFixed(2);
    var originalPriceEconomyPlanoTurbo = (originalPricePlanoTurbo - originalPricePlanoTurboDiscount).toFixed(2);
  }


  document.querySelectorAll(".content.planoP .full-value")[0].textContent = numberToReal(originalPricePlanoP);
  document.querySelectorAll(".content.planoM .full-value")[0].textContent = numberToReal(originalPricePlanoM);
  document.querySelectorAll(".content.planoTurbo .full-value")[0].textContent = numberToReal(originalPricePlanoTurbo);

  document.querySelectorAll(".content.planoP .discount-value")[0].textContent = numberToReal(originalPricePlanoPDiscount);
  document.querySelectorAll(".content.planoM .discount-value")[0].textContent = numberToReal(originalPricePlanoMDiscount);
  document.querySelectorAll(".content.planoTurbo .discount-value")[0].textContent = numberToReal(originalPricePlanoTurboDiscount);

  document.querySelectorAll(".content.planoP .month .value")[0].textContent = numberToReal(originalPriceQuotaPlanoP, true);
  document.querySelectorAll(".content.planoM .month .value")[0].textContent = numberToReal(originalPriceQuotaPlanoM, true);
  document.querySelectorAll(".content.planoTurbo .month .value")[0].textContent = numberToReal(originalPriceQuotaPlanoTurbo, true);

  document.querySelectorAll(".content.planoP .economize .value")[0].textContent = numberToReal(originalPriceEconomyPlanoP);
  document.querySelectorAll(".content.planoM .economize .value")[0].textContent = numberToReal(originalPriceEconomyPlanoM);
  document.querySelectorAll(".content.planoTurbo .economize .value")[0].textContent = numberToReal(originalPriceEconomyPlanoTurbo);

  document.querySelectorAll(".content.planoP .hire-now a")[0].href = 'https://www.hostgator.com.br/?a=add&pid='+idProductPricePlanoP+'&billingcycle='+cyclePlano+'&promocode=PROMOHG40';
  document.querySelectorAll(".content.planoM .hire-now a")[0].href = 'https://www.hostgator.com.br/?a=add&pid='+idProductPricePlanoM+'&billingcycle='+cyclePlano+'&promocode=PROMOHG40';
  document.querySelectorAll(".content.planoTurbo .hire-now a")[0].href = 'https://www.hostgator.com.br/?a=add&pid='+idProductPricePlanoTurbo+'&billingcycle='+cyclePlano+'&promocode=PROMOHG40';
  
}

/**
 * Change Radio Time
 */
function handleClick(valueRadio) {
  init(valueRadio);
}

/**
 * Format currency PT-BR (R$)
 */
function numberToReal(numero, currency) {
  if (numero) {
    var numero = numero.split('.');
    if (currency) {
      numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.');
    } else {
      numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    }
    
    return numero.join(',');
  }
}


/**
 * Onload page
 */
window.onload = init;