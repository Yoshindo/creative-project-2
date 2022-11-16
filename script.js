document.getElementById("button").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("input").value;
  if (value === "")
    return;
    

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a7390ccd3bmsha56b24bae4d07a1p13a4dajsn227b8e9993f5',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
    };

  fetch('https://wordsapiv1.p.rapidapi.com/words/' + value + '/typeOf', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  
    
});