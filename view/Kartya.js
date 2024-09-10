export default class Kartya {
  //adattagok
  #kutyaAdat = {}; // objektum
  #szuloELEM; // html dom elem
  //constructor
  constructor(adat, szuloElem) {
    this.#kutyaAdat = adat;
    this.#szuloELEM = szuloElem;
    this.kutyaKiir();

    //létrehozzuk a gomb elemet
    this.gombElem=$(".card:last-child .card-body button");
    this.gombKattint();
  }
  //taggfügvény
  kutyaKiir() {
    this.#szuloELEM.append(`
            <div class="card col-lg-4 col-md-6">
                <div class="card-body">
                <h5 class="card-title">${this.#kutyaAdat.nev}</h5>
                <p class="card-text">${this.#kutyaAdat.kor}</p>
                <p class="card-text">${this.#kutyaAdat.nem}</p>
                </div>
                <button class="kiv btn btn-success">Kiválaszt</button>
            </div>
        `);
  }

  gombKattint(){
    this.gombElem.on("click",function(){
      console.log(this)
      console.log(this.#kutyaAdat.nev)
      //saját esemény létrehozása, hogy az adott objektum át tudjon adni magáról információkat.
      const e = new CustomEvent("kiválaszt",{detail: this.#kutyaAdat});
      window.dispatchEvent(e);
    })
  }
}