import LokacijeEkran from "../screens/LokacijeEkran";

class Lokacija {
  constructor(id, naziv, uriSlike, adresa, lat, lng){
    this.id = id,
    this.naziv = naziv,
    this.uriSlike = uriSlike,
    this.adresa = adresa,
    this.lat = lat,
    this.lng = lng
  }
}
export default Lokacija;
