function onLoad() {
console.log('hi');
var test = new Flowering('Strawberry', 8, 1.5, 'plant them 18 inches apart', 'spring',60, 'adorable red berries');
console.log(test.getType());
console.log(test.getName());
console.log(test.getSubtype());
console.log(test.getDesc());
var blue = new Perennial('blueberry', 1, 1, 'blah', 'winter', 60, 'little blue spheres');
//blue.setEdible(true);
console.log(blue.getEdible())

}
