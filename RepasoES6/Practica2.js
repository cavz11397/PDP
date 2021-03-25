/**
 * 1) Generar dos array, uno para los pilotos rebeldes y el otro para los
    imperiales
 */
var pilots = [
    {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    },
    {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    },
    {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    },
    {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    },
    ];

    /* Pilotos rebeldes */
    const pilotosRebeldes=pilots.filter(pos => pos.faction=='Rebels');
    console.log(pilotosRebeldes);
   
    /* Pilotos Imperiales */
    const pilotosImperiales=pilots.filter(pos => pos.faction=='Empire');
    console.log(pilotosImperiales);
    