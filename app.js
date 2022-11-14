console.log("Hello World!\n==========\n");

const MY_API_KEY = `XpWnP8GYtSRPzRq790cGMICxwfNZfFUN`


let buttonSearch = document.querySelector('#submitSearch');
let inputSearch = document.querySelector('#searchWord');
let imgSearch = document.querySelector('#imageContainer > img');
let feedbackPara = document.querySelector('#feedbackPara');

console.log(buttonSearch, inputSearch, imgSearch, feedbackPara);


//eventlitener-click-->added-->Search Button
buttonSearch.addEventListener('click', ()=>{
  let searchTerm = inputSearch.value; 
  console.log(inputSearch.value);
  fetch(`https://api.giphy.com/v1/gifs/translate?apikey=${MY_API_KEY}&s=${searchTerm}`)
  .then((resolvedValue) => {
    return resolvedValue.json()
  })
  .then((res) => {
    //console.log(res);
    imgSearch.src = res.data.images.original.url;
    inputSearch.value = "";
  })
  .catch((failstate) => {
    console.log(failstate);
    feedbackPara.textContent = failstate.message;
  })
});





