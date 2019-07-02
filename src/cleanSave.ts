//is a dictionary for scalability
var shard = {wallet: 0};

var items = [
    {
      name: 'Euphonium',
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

//condensed save data into one var for ease
export var save = {shard: shard, items: items};