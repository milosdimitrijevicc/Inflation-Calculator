const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

btn.addEventListener('click' , function(){
  
  //inflation rate
  let inflationRate = document.querySelector('#inflationRate').value;
  inflationRate = Number(inflationRate);

  //money
  let money = document.querySelector('#money').value;
  money = Number(money);

  //years
  let years = document.querySelector('#years').value;
  years = Number(years);
  
  //worth
  let worth = money + (money * (inflationRate / 100));
  
  //inflation rate formula
  for(let i = 1; i < years; i++){

    worth += worth * (inflationRate/100);

  };

  //worth on 2 decimals
  worth = worth.toFixed(2)
  
  result.innerText = `Todays ${money}€ will be worth ${worth}€ in ${years} years.`

})

