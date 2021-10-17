class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return Math.PI * 2 * this.radius;
  }
  get area() {
   return Math.pow(this.radius, 2) * Math.PI;
  }
  set diameter(newDiameter) {
    this.radius = newDiameter / 2;
  }
  set circumference(newCircumference) {
    this.radius = newCircumference / (Math.PI * 2);
  }
  set area(newArea) {
   this.radius = Math.sqrt(newArea / Math.PI);
  }

}