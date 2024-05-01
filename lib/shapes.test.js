const shape = require('./shapes.js');

test('creates a blue triangle', () => {
  const shape1 = new shape.Triangle();
  shape1.setShapeColor("blue");
  expect(shape1.render()).toContain('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('creates a red square', () => {
  const shape2 = new shape.Square();
  shape2.setShapeColor("red");
  expect(shape2.render()).toContain('<rect x="50" y="25" width="200" height="200" fill="red" />');
});

test('creates a green circle', () => {
  const shape3 = new shape.Circle();
  shape3.setShapeColor("green");
  expect(shape3.render()).toContain('<circle cx="150" cy="120" r="80" fill="green" />');
});

