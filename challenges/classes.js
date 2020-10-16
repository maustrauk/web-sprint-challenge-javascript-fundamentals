// 1. Copy and paste your prototype in here and refactor into class syntax.
class myCuboidMaker {
    constructor (length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume () {
        return this.length * this.width * this.height;
    }
    surfaceArea () {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const myCuboid = new myCuboidMaker(4, 5, 5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log("Class volume = ",myCuboid.volume()); // 100
 console.log("Class surface area = ",myCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends myCuboidMaker {
    constructor(side) {
        super(side, side, side);
    }
}

const myCube = new CubeMaker(5);
console.log("Cube volume = ",myCube.volume()); //125
 console.log("Cube surface area = ",myCube.surfaceArea()); //150