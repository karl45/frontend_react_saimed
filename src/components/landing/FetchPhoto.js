async function GetInstaPost(){
const response = await fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN')
const myJson = await response.json();
console.log(JSON.stringify(myJson));
}
export default GetInstaPost