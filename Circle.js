class Circle {
    constructor(radius = 1.0, color = "red") 
    {
      this._radius = radius;
      this._color = color;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(radius) {
      this._radius = radius;
    }
  
    get color() {
      return this._color;
    }
  
    set color(color) {
      this._color = color;
    }
  
    toString() {
      return `Circle [radius = ${this._radius} , color = ${this._color}]`;
    }
  
    getArea() {
      return Math.PI * Math.pow(this._radius, 2);
    }
  
    getCircumference() {
      return 2 * Math.PI * this._radius;
    }
  }
  
  //without parameter

  const circle = new Circle ();

  //with one parameter (radius)

  const  circle1 = new Circle(3);

  //with both paramater (radius,color)
  
  const circle2 = new Circle(2, "blue");
  
 
  console.log(circle.toString());
  console.log("Area:", circle.getArea());
  console.log("Circumference:", circle.getCircumference());


  console.log(circle1.toString());
  console.log("Area:", circle1.getArea());
  console.log("Circumference:", circle1.getCircumference());
  
  console.log(circle2.toString());
  console.log("Area:", circle2.getArea());
  console.log("Circumference:", circle2.getCircumference());
  
 