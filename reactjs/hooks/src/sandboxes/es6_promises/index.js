import axios from "axios";

async function generateRandomNumber(onSuccess, onFailure) {
  setTimeout(() => {
    const random = Math.random().toFixed(2);
    if (random > 0.01) {
      onSuccess("It worked the random number is " + random);
    } else {
      onFailure("It didn't work well the random number is ", random);
    }
  }, 2000);
}

const promise = new Promise(generateRandomNumber);
const promise2 = new Promise(generateRandomNumber);
const promise3 = new Promise(generateRandomNumber);

/*promise
  .then((response) => {
    console.log("Ahhhhh c'est grand", response);
  })
  .catch((response) => {
    console.log("C'est petit", response);
  });
  */

async function go() {
  try {
    //afficher spinner
    const responseList = await Promise.all([promise, promise2, promise3]);
    console.log(responseList);
    // cacher le spinner
  } catch (e) {
    console.log("Don't crash !");
  }
}

go();

/*
promise
  .then((successResponse) => {
    console.log("Positive answer", successResponse);
  })
  .catch((failureResponse) => {
    console.log("Negative answer", failureResponse);
  });
*/

/*
fetch("https://randomuser.me/api/")
  .then((response) => {
    response.json().then((jsonResponse) => {
      console.log(jsonResponse);
    });
  })
  .catch((error) => {});
 */

/*

axios("https://randomuser.me/api/")
  .then((jsonResponse) => {
    console.log(jsonResponse.data);
    console.log("End of code");
  })
  .catch();
*/

/*
async function req() {
  try {
    const jsonResponse = await axios("https://randser.me/api/");
    console.log(jsonResponse);
  } catch (error) {
    console.log("ERROR ", error.message);
  }
}

req();
  */
