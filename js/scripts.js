// Lambda function code
const counter = document.querySelector(".website-counter");
async function updateCounter(){
	let response = await fetch("https://rztwock2zpw5cahzjz2fp3qeuq0tobcd.lambda-url.us-east-1.on.aws/");
	let data = await response.json();
	console.log(data);
	counter.innerHTML = `views: ${data}`;
}
updateCounter();