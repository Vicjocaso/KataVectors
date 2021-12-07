class Vector {
  constructor(numX, numY) {
    this.numX = numX;
    this.numY = numY;
  }

  lenght() {
    const nums = Math.sqrt(
      this.numX[0] * this.numX[1] + this.numY[0] * this.numY[1]
    );
    return nums;
  }
  dotProduct() {
    let result = 0;
    for (let i = 0; i < 2; i++) {
      result += this.numX[i] * this.numY[i];
    }
    return result;
  }
  angleBetween() {
    var dy = this.numY[1] - this.numY[0];
    var dx = this.numX[1] - this.numX[0];
    var theta = Math.atan2(dy, dx);
    theta *= 180 / Math.PI;
    return theta;
  }
}
