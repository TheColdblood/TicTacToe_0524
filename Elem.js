export default class Elem{
    #ertek="";
    #szuloElem;
    #divElem;
    #id = 0;

    constructor(id, ertek, szuloElem){
        this.#id = id;
        this.#ertek = ertek;
        this.#szuloElem = szuloElem;
        this.#megjelenit();

        this.#divElem = this.#szuloElem.children("div:last-child");
        this.#divElem.on("click", ()=>{
            if(this.#ertek===" "){
                this.#esemenyTrigger("lepes")
            }
            //console.log(this.#id)
        })
    }


    /* Egy osztályban a this a konkrét objektum példányt jelenti, de eseménykezelőben function névtelen fügvénnyel használva azt a html elemet jelenti amelyik az eseményt kiváltotta, =>-el használva pedig az objektum példányra mutat */  


    #megjelenit(){
        let txt =`
        <div><p>${this.#ertek}</p></div>
        `
        this.#szuloElem.append(txt)
    }


    /* info átadás esemény esetén másik osztálynak */


    #esemenyTrigger(esemenyNev){
        const e = new CustomEvent(esemenyNev, {detail:this.#id})
        window.dispatchEvent(e)
    }
}

