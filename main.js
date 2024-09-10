import { kutyaLISTA } from "./model/adat.js";
import Kartyak from "./view/Kartyak.js";
import Kartya from "./view/Kartya.js";

const kivKutyaLista=[]

const taroloElem = $(".tartalom");
const kivElem = $(".kivalasztott");

new Kartyak(kutyaLISTA, taroloElem)

//rákattintunk a kiválaszt gombra, akkor a hozzá tartozó kutya adata kerüljön bele a kivKutyaListába.
//feliratkozunk a saját eseményünkre
$("window").on("kivalaszt",(event)=>{
    console.log(event.detail)
    kivKutyaLista.push(event.detail)
    console.log(kivKutyaLista)
    new Kartya(event.detail, kivElem)
})