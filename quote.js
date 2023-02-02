const loadQuote = () =>{
   fetch('https://api.kanye.rest/').then(res=>res.json()).then(data=> {
      document.getElementById('quotes-container').innerHTML = `<h3>${data.quote}</h3>`
   })
}