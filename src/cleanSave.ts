//is a dictionary for scalability
var shard = {wallet: 10, lifetime:0, totalBonus: 1};

var items = [
    {
      name: 'Eufe',
      bought: 0,
      price: 1,
      bonus: 0.5,
      multiplier: 1
    },
    {
      name: 'Lomien',
      bought: 0,
      price: 10,
      bonus: 4,
      multiplier: 1
    },
    {
      name: 'Iske',
      bought: 0,
      price: 50,
      bonus: 20,
      multiplier: 1
    }
  ];

var boost = [
  {
    name: "Emerald Trumpet",
    item: 0,
    owned: false,
    price: 100,
    multiplier: 1
  },
  {
    name: "Jorm's Sword",
    item: 1,
    owned: false,
    price: 5000,
    multiplier: 4
  },
  {
    name: "Time Flux",
    item: 2,
    owned: false,
    price: 999999,
    multiplier: 9
  }
];

//condensed save data into one var for ease
export var save = {shard: shard, items: items, boost: boost};