describe("Kata vectors", () => {
  it("vectors lenght", () => {
    const vectorLenght = new Vector([1, 5], [5, 0]);
    assert.equal(vectorLenght.lenght(), 2.23606797749979);
  });
});

describe("Kata vectors", () => {
  it("vectors Angle Between", () => {
    const angelB = new Vector([3, 5], [0, 5]);
    assert.equal(angelB.angleBetween(), 68.19859051364818);
  });
});

describe("Kata vectors", () => {
  it("vectors dotProduct", () => {
    const dotProduct = new Vector([3, 5], [0, 5]);
    assert.equal(dotProduct.dotProduct(), 25);
  });
});
