class Animal{
    constructor(name){
        this.name=name;
    }
    print(){
        return `Print animal ${this.name}`;
    }
}

/**
 * Cuando trabajemos con modulos siempre hay que exportar e importar
 */

export default Animal;