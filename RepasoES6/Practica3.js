/**
 * Obtener la puntuación total pero solamente de los usuarios de la fuerza
 * (isForceUser)
 * 1) Hacerlo combinando filter,map ,reduce
 * 2) Reto (Hacerlo solo con reduce)
 */

var personal = [
    {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
    },
    {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
    },
    {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
    },
    {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
    },
    {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
    },
    ];

    /** 1 */
    const totalPilotaje= personal.filter(pos => pos.isForceUser==true).reduce((total,pos)=> total+=pos.pilotingScore,0);
    console.log(totalPilotaje);
    const totalDisparos= personal.filter(pos => pos.isForceUser==true).reduce((total,pos)=> total+=pos.shootingScore,0);
    console.log(totalDisparos);

    /** 2 */
    const totalPilotaje2= personal.reduce((total,pos)=> (pos.isForceUser==true) ? total+=pos.pilotingScore : total,0);
    console.log(totalPilotaje2);
    const totalDisparos2= personal.reduce((total,pos)=> (pos.isForceUser==true) ? total+=pos.shootingScore : total,0);
    console.log(totalDisparos2);