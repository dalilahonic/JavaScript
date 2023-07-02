const daysOfTheWeek = ['ponedeljak', 'utorak', 'sreda', 'cetvrtak', 'petak', 'subota'];

const openingHours = {
    [daysOfTheWeek[0]]: {
        open: 12,
        close:22
    },
    [`dan: ${daysOfTheWeek[1 + 4]}`]: {
        open: 11,
        close: 23
    },
    [`dan: ${2+10}`]: {
        daLi: true
    }
}

const objekat = {
    ime: 'Dalila', 

    //enhanced object literals
  openingHours,
  prezime: 'Honic',

  nekaFunkcija(x, y) {
    console.log(x * y);
  },

  drugaFunkcija() {
    console.log('daa');
  }
}

console.log(objekat);

objekat.nekaFunkcija(2, 3);
objekat.drugaFunkcija();

console.log(openingHours);