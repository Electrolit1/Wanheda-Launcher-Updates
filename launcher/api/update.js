const axios = require("axios");


const VERSION_URL =
"https://raw.githubusercontent.com/Electrolit1/Wanheda-Launcher-Updates/main/version.json";



async function checkVersion(){

    try{

        const response = await axios.get(VERSION_URL);

        return response.data;

    }
    catch(error){

        console.log(
        "Error comprobando versión",
        error
        );

        return null;

    }

}



module.exports = {
    checkVersion
};
