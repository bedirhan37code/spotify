export class UI {
  // Kurucu metot
  constructor() {
    this.form = document.querySelector("form");
    this.list = document.querySelector(".list");
    this.title = document.querySelector("#title");
    this.player = document.querySelector(".player");
  }

  // Yazıları düzenleyen fonksion

  sliceText(text) {
    // Eğer textin uzunluğu 15 den büyüks 15 karakteri alarak sonuna "..." ekleyin. Bu,
    if (text.length > 15) {
      return text.slice(0, 15) + "...";
    }
    return text;
  }
  // Şarkı verilerini render eden bir fonksiyon yaz

  renderCards(songs) {
    // Listeye bir şarkı elemanı eklemeden önceki verileri sıfırla
    this.list.innerHTML = "";
    songs.forEach((song) => {
      // Bir tane div oluştur
      const card = document.createElement("div");

      // Oluşturulan bu elemana card classı ekle
      card.className = "card";

      // Card Elemanına Şarkı ile ilgili değerleri ata
      card.dataset.title = song.title;
      card.dataset.subtitle = song.subtitle;
      card.dataset.img = song.images.coverarthq;
      card.dataset.mp3 = song.hub.actions[1].uri;

      // Card'ın html belirle

      card.innerHTML = `<figure>
                <img
                 src="${song.images.coverarthq}"                  
                 alt=""
                />

                <div class="play">
                  <i class="bi bi-play-fill"></i>
                </div>
              </figure>
              <div class="card-info">
                <h4>${this.sliceText(song.title)}</h4>
                <h4>${this.sliceText(song.subtitle)}</h4>
              </div>`;

      // Oluşturulan bu html i arayüze aktar
      this.list.appendChild(card);

      // Class ve obje yapıları içerisinde bir değişkene bu yapılar ierisinde
      // bulunan bir metotla erişmek istersek
      // bunların başına this keywordu koymamız gerekir bunun sebebi class
      // ve obje yapılarıının bu değeri kendi içerisinde olduğunu anlamasıdr
    });
  }
  // Loader render eden fonksiyon

  renderLoader() {
    this.list.innerHTML = `
   
<div class="loader">
  <div class="cell d-0"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>

  <div class="cell d-1"></div>
  <div class="cell d-2"></div>
  
  
  <div class="cell d-2"></div>
  <div class="cell d-3"></div>
  
  
  <div class="cell d-3"></div>
  <div class="cell d-4"></div>
  
  
</div>`;
  }

  // Title ı güncelleyen fonksiyon
  updateTitle(text) {
    this.title.textContent = text;
  }

  // animasyon ayarlaması yapan fonksiyon
  toggleAnimation() {
    // Player içerisindeki resime eriş
    const image = document.querySelector(".info img");
    // Resime class ekle çıkar

    image.classList.toggle("animate");
  }

  // Player kısmını dinamik şekilde renderleyecek fonksyon
  renderPlayer(song) {
    this.player.innerHTML = `<div class="info">
        <img
          src="${song.img}"
          alt=""
        />
        <div>
          <h5>${song.title}</h5>
          <p>${song.subtitle}</p>
        </div>
      </div>

      <audio
        src="${song.mp3}"
        controls
        autoplay
      ></audio>

      <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox"></i>
        <i class="bi bi-pc-display"></i>
      </div>`;

    // Şarkı Oynatılıyorsa image bir animasyon ekle durdurulursa
    //  bunu kaldır

    // i-) audio elemanın eriş
    const audio = this.player.querySelector("audio");

    // ii-) audio elemanının oynatılma ve durdurulma olaylarını izle
    audio.addEventListener("play", this.toggleAnimation);
    audio.addEventListener("pause", this.toggleAnimation);
  }
}
