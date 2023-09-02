class Animal {
    private name: string;
    constructor(name: string) {
      this.name = name;
    }
    speak(): void {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }
    speak(): void {
      console.log(`${this} barks.`);
    }
  }
  
  const animals: Animal[] = [
    new Dog('Rex'),
    new Animal('Generic Animal')
  ];
  
  for (const animal of animals) {
    animal.speak();
  }
  
  interface Shape {
    area(): number;
  }
  
  class Circle implements Shape {
    private radius: number;
    constructor(radius: number) {
      this.radius = radius;
    }
    area(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class Rectangle implements Shape {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
    area(): number {
      return this.width * this.height;
    }
  }
  
  const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 6)
  ];
  
  for (const shape of shapes) {
    console.log(`Area: ${shape.area()}`);
  }
  
  enum Color {
    Red = 1,
    Green = 2,
    Blue = 3,
  }
  
  const colorName: string = Color[2];
  console.log(`Color: ${colorName}`);
  
  function add(a: number, b: number): number {
    return a + b;
  }
  
  const result: number = add(5, 3);
  console.log(`Result: ${result}`);
  
  interface Person {
    name: string;
    age: number;
  }
  
  const person: Person = {
    name: 'John',
    age: 30,
  };
  
  console.log(`Person: ${person.name}, Age: ${person.age}`);