const apiUrl = "https://type.fit/api/quotes";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote =  document.getElementById("newQuote")
const share = document.getElementById("share")

async function getQuote(url){
    const randomIndex = Math.floor(Math.random() * 16);
    const response = await fetch(url);
    const data = await response.json();
    quote.textContent = data[randomIndex].text;
    author.textContent = (data[randomIndex].author).split(",")[0];
}
getQuote(apiUrl);

newQuote.addEventListener("click", () => {
    getQuote(apiUrl);
});
share.addEventListener("click", ()=>{
    const quoteText = quote.textContent + " - " + author.textContent;
    const url = `https://api.whatsapp.com/send?text=${quoteText}`;
    window.open(url, "_blank");
 });
