const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles',
  headers: {
    'X-RapidAPI-Key': '9981803cc2mshcd9de10994ec63dp130afajsnd63a6e9eeefe',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

axios.request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
  

  const data = {
    "personnes": [
        {
            "nom": "Defline",
            "prenom": "Romain",
            "filmDisneyPrefere": "Les aristochats"
        },
        {
            "nom": "Defline",
            "prenom": "Angélique",
            "filmDisneyPrefere": "Tous"
        },
        {
            "nom": "Defline",
            "prenom": "Léopold",
            "filmDisneyPrefere": "Volt, star malgré lui"
        },
        {
            "nom": "Defline",
            "prenom": "Oscar",
            "filmDisneyPrefere": "Pirate des caraïbes"
        },
        {
            "nom": "Defline",
            "prenom": "Zoé",
            "filmDisneyPrefere": "Tous"
        },
        {
            "nom": "Benzakour",
            "prenom": "Amal",
            "filmDisneyPrefere": "Les aristochats"
        },
        {
            "nom": "Thomas",
            "prenom": "Mary",
            "filmDisneyPrefere": "Raiponce"
        }
    ]
};
