// UI clasını import et
import { UI } from "./ui.js";
// Apı classını import et
import { API } from "./api.js";

// UI classının örneğini al

const ui = new UI();

// apı classının örneğini al

const api = new API();

// Sayfanın Yüklendiği anı izle

document.addEventListener("DOMContentLoaded", async () => {
  // Loadeı render et

  ui.renderLoader();

  // Api ye istek at ve api dan gelen veri ile arayüzü renderle
  api
    .getPopular()
    .then((data) => ui.renderCards(data))
    .catch((err) => {
      console.log(err);
    });
});

// Form gönderildiğinde bunu izle ve bir fonksiyon çalıştır

ui.form.addEventListener("submit", (e) => {
  // Sayfa yenilemeyi engelle
  e.preventDefault();

  //Form gönderildiğinde input içerisindeki değere eriş
  const query = e.target[0].value;

  // Aratılan kelimenin başında ve
  // onunda bulnan boşlukları kaldır.Ve eğer query değeri yoksa uyarı ver

  if (!query.trim()) {
    return alert("Lütfen geçerli bir arama gerçekleştiriniz");
  }

  // Loader ı render er

  ui.renderLoader();

  // Aratılan Kelime ile birlikte Api'ya istek at sonrasında gelen veri ile ekranı
  // renderle cartları render et
  api
    .searchMusic(query)
    .then((data) => ui.renderCards(data))
    .catch((err) => alert(err));

  // Title i güncelle
  ui.updateTitle(query + " İçin Sonuçlar");
});

// Liste Kısmındaki play iconuna tıklayınca arayüzü bu şarkı verisine göre renderleyecak fonksşyon

ui.list.addEventListener("click", (e) => {
  // List içerisinde tıklanılan elemanın play butonu olup olmadığını kontrol et
  if (e.target.className == "play") {
    // Play butonunun kapsayıcısına eriş
    const card = e.target.closest(".card");
    // Kapsayıcıya verilen dataset özelliklerini al (Title,image,mp3)
    const data = card.dataset;

    // Player Kısmını render et

    ui.renderPlayer(data);
  }
});
