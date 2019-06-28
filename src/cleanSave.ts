//is a dictionary for scalability
var shard = {wallet: 0};

var items = [
    {
      name: 'Euphonium',
      bought: 0,
      price: 1
    },
    {
      name: 'Lomien',
      bought: 0,
      price: 10
    },
    {
      name: 'Iske',
      bought: 0,
      price: 50
    }
  ];

//condensed save data into one var for ease
export var save = {shard: shard, items: items};