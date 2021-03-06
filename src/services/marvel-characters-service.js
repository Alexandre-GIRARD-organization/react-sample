import axios from 'axios';

export async function getCharacter(id) {
    const apiKey = "80baf7237e4d9ec91146f5c2c1653bea";

    const URL = process.env.REACT_APP_MARVEL_API_URI + "/characters/" + id;
    //const URL = "/api/characters/" + id;

    const res = await axios.get(URL, {
        params : {
            apikey: apiKey
        }
    }).catch(
        ex => console.error(`getCharacter exception -> ${ex}`)
    );

    return res.data.data.results[0];
}

export async function getCharacters(searchText) {
    const apiKey = "80baf7237e4d9ec91146f5c2c1653bea";
    let params = {
        apikey: apiKey,
        limit: 60,
    }

    if(searchText !== ""){
        params.nameStartsWith = searchText;
    }

    const URL = process.env.REACT_APP_MARVEL_API_URI + "/characters";
    const res = await axios.get(URL, {params}).catch(
        ex => console.error(`getCharacters exception -> ${ex}`)
    );

    return res.data.data.results;
}