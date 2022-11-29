function wordLookupFunction() {
            var apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/hello';
            var wordValue = document.getElementById('word').value
            apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + wordValue;
            fetch(apiUrl).then(response => {
                return response.json();
            }).then(data => {
                // Work with JSON data here
                console.log(data);
                document.getElementById("p1").innerHTML = 'Word: ' + capitalizeFirstLetter(data[0].word);

                var nounStr = '';
                var verbStr = '';
                var interjectionStr = '';

                for (let i = 0; i < data.length; i++) {
                    for (let j = 0; j < data[i].meanings.length; j++) {
                        var partOfSpeech = data[i].meanings[j].partOfSpeech;
                        partOfSpeech = capitalizeFirstLetter(partOfSpeech);

                        for (let k = 0; k < data[i].meanings[j].definitions.length; k++) {
                            var definition = data[i].meanings[j].definitions[k];

                            if (partOfSpeech.toLowerCase() === 'noun')
                                nounStr += partOfSpeech + ' : ' + definition.definition + '<br/>';
                            else if (partOfSpeech.toLowerCase() === 'verb')
                                verbStr += partOfSpeech + ' : ' + definition.definition + '<br/>';
                            else if (partOfSpeech.toLowerCase() === 'interjection')
                                interjectionStr += partOfSpeech + ' : ' + definition.definition + '<br/>';
                        }
                    }
                }
                document.getElementById("n1").innerHTML = nounStr;
                document.getElementById("v1").innerHTML = verbStr;
                document.getElementById("inter1").innerHTML = interjectionStr;
            }).catch(err => {
                // Do something for an error here
            });
        }

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }