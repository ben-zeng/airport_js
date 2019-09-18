describe("Airport", function() {
  let airport;
  let plane;
  let weather;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    weather = new Weather();
  });

  describe("#landPlane", function() {
    it ("lands a plane and in airport hanger", function() {
      airport.landPlane(plane);
      expect(airport.hanger).toContain(plane);
    });

    it ("airport hanger does not have plane if plane not landed ", function() {
      expect(airport.hanger).not.toContain(plane);
    });
  });

  describe("#takeOffPlane", function() {
    it ("let a landed plan to take off and confirm no longer in hanger", function() {
      airport.landPlane(plane);
      airport.takeOffPlane();
      expect(airport.hanger).not.toContain(plane);
    });

    it ("expects the same plane to land and take off", function() {
      airport.landPlane(plane);
      expect(airport.takeOffPlane()).toBe(plane);
    });
  });
});
