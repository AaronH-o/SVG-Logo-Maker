class Shape {
  constructor(text, textColor, shapeColor,) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  setText(text) {
    this.text = text;  
  }
  setTextColor(color) {
    this.textColor = color;
  }
  setShapeColor(color) {
    this.shapeColor = color
  }
};

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `  <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
  <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `  <rect x="50" y="25" width="200" height="200" fill="${this.shapeColor}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `  <circle cx="150" cy="120" r="80" fill="${this.shapeColor}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = { Shape, Triangle, Square, Circle };