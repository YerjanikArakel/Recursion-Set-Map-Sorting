class Dictionary {
  constructor(key, value) {
    this.elem = new Map(key, value);
  }

  add(key, value) {
    return (this[key] = value);
  }
}

const dict = new Dictionary({ key: "value" });
console.dir(dict.elem);
console.dir(dict.add("num", 10));
// dict.add('negNum', -10)
// dict.add('num', 200)

// dict.getByKey('num') // [10, 200]

// dict.getByKey('num').remove(10)

// dict.getByKey('num') // [200]

// dict.getCountByKey('num'); // 2
// dict.getCountByKey('negNum'); // 1

// dict.remove('negNum');

// dict.getCountByKey('negNum'); // 0

// dict.keys() // 'negNum', 'num'
// dict.values() // 10, -10, 200
