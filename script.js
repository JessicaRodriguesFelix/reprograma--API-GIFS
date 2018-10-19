const btnBusca = document.getElementById("btn-busca");
btnBusca.addEventListener("click", trazResultadoDaBusca);
let listaGifs = [];

function buscaGif() {
  return document.getElementById("campo-busca").value;
}

function erro() {
  console.log("erro");
}

function trazResultadoDaBusca(event) {
  event.preventDefault();
  const respostasDaBusca = new XMLHttpRequest();
  respostasDaBusca.open("GET", `http://api.giphy.com/v1/gifs/search?q=${buscaGif()}g&api_key=xUAQeVr6wOfJZIHpMA1pgbvbSQBaycrs&limit=5%22`)
  respostasDaBusca.onload = carregaPostsComGifs;
  respostasDaBusca.onerror = erro;
  respostasDaBusca.send();

}

function carregaPostsComGifs() {
  listaGifs = JSON.parse(this.responseText)["data"];
  exibePosts();


}

function exibePosts() {
  let exibeBusca = document.getElementById("exibe-busca");
  exibeBusca.innerHTML =
    `<div class="area-gif"> ${listaGifs.map(gif => `
        <div class="gif">
          <img src="${gif.images.fixed_height.url}"></img>
        </div>
        `).join("")}
      </div>`;
}



