class Misiones {
    misiones = []

    constructor(nombreDelSolicitante) {
        this.nombreDelSolicitante = nombreDelSolicitante
    }

    esDificil() {
    if (this.nombreDelSolicitante.charAt(0) === 'G'){
        return true
    }
}
    
    puntosDeRecompensaPorMision(){
        return 0
    }
}

class MisionRescatarPrincesa extends Misiones {
    cantidadDeTrolls = 0
    constructor() {
        super(lordFarquaad)
    }

    esDificil() {
        return super.esDificil() && (this.cantidadDeTrolls > 3)
    }

    puntosDeRecompensaPorMision(){
        return 2 * this.cantidadDeTrolls
    }
}

class MisionBuscarObjetoMagico extends Misiones {
    kilometrosDeDistancia = 0

    constructor() {
        super(gandalf)
    }

    esDificil() {
        return super.esDificil() && (this.distanciaMayorA() > 100)
    }

    puntosDeRecompensaPorMision() {
        if (this.kilometrosDeDistancia > 50) {
            return 10
        }
        else {
            return 5
        }
    }
}

class Shrek {
    constructor(misiones) {
        this.misiones = misiones
    }

    agregarMision(unaMision) {
        this.misiones.push(unaMision);
    }

    misionesDificiles(){
        return this.misiones.filter(unaMision => unaMision.esDificil())
        }

    puntosDeRecompensaPorMision = function(){
        return this.puntosDeRecompensaPorMision.reduce((acumulador, valorActual) => {
            acumulador + valorActual;
        },0)
    }
}

const shrek = new Shrek();
shrek.agregarMision(new MisionRescatarPrincesa('princesa', 'Lord Farquaad', 4));
shrek.agregarMision(new MisionBuscarObjetoMagico('objetoMagico', 'Gandalf', 40));
