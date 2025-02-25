const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "05f4046027msh1e36b31730171f1p1439a0jsn8cb080a9cd59",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

export class API {
  // Popüler Şarkıları Alan fonksiyon
  async getPopular() {
    // const url = "https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain";
    // // Apı a istek at
    // const response = await fetch(url, options);
    // // Apidan gelen veriyi js nesnesine çevir
    // const data = await response.json();

    // const formattedData = data.tracks.hits.map((item) => item.track);

    // return formattedData;

    const data = await this.searchMusic("neffex");

    const data1 = await this.searchMusic("eminem");
    const data2 = await this.searchMusic("tupac");

    return [...data, ...data1, ...data2];
  }
  // Aratılan şarkı verisini alan fonksiyon
  async searchMusic(query) {
    const url = `https://shazam.p.rapidapi.com/search?term=${query}`;

    // aratılan değer ile api istek at
    const res = await fetch(url, options);
    // gelen veriyi js esnesine çevir
    const data = await res.json();

    // veriyi projeye uygun şekilde dönüştür
    const formattedData = data.tracks.hits.map((item) => item.track);

    return formattedData;
  }
}
