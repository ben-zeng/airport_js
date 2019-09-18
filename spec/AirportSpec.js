'use strict';

describe("Airport", function() {
  let airport;
  let plane;
  let weather;

  beforeEach(function() {
    weather = jasmine.createSpyObj('weather',['isStormy']);
    airport = new Airport(weather);
    plane = new Plane();
    //spyOn(weather,"isStormy").and.returnValue(false);
    //spyOn(weather,"isStormy")
  });

  describe("#landPlane", function() {
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });

    it ("lands a plane and in airport hanger", function() {
      //spyOn(weather,"isStormy").and.returnValue(false);
      airport.landPlane(plane);
      expect(airport.hanger).toContain(plane);
    });

    it ("airport hanger does not have plane if plane not landed ", function() {
      //spyOn(weather,"isStormy").and.returnValue(false);
      expect(airport.hanger).not.toContain(plane);
    });
  });

  describe("#takeOffPlane", function() {
    it ("let a landed plan to take off and confirm no longer in hanger", function() {
      //spyOn(weather,"isStormy").and.returnValue(false);
      airport.landPlane(plane);
      airport.takeOffPlane();
      expect(airport.hanger).not.toContain(plane);
    });

    it ("expects the same plane to land and take off", function() {
      //spyOn(weather,"isStormy").and.returnValue(false);
      airport.landPlane(plane);
      expect(airport.takeOffPlane()).toBe(plane);
    });
  });

  describe("When stormy", function() {

    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });


    it ("Airport does not allow plane to land", function() {
      //spyOn(weather,"isStormy").and.returnValue(true);
      //airport.landPlane(plane);
      //spyOn(weather,"isStormy").and.returnValue(false)
      expect(function() {airport.landPlane(plane);}).toThrowError("Too stormy to land");
     // expect(airport.hanger).toContain(plane);
    });

  });


});
