'use strict';

describe("Airport", function () {
    let airport;
    let plane;
    let weather;

    beforeEach(function () {
        weather = jasmine.createSpyObj('weather', ['isStormy']);
        airport = new Airport(weather);
        plane = jasmine.createSpyObj('plane', ['getPlaneID']);
    });

    describe("#landPlane", function () {
        beforeEach(function () {
            weather.isStormy.and.returnValue(false);
        });

        it("lands a plane and in airport hanger", function () {
            airport.landPlane(plane);
            expect(airport.hanger).toContain(plane);
        });

        it("airport hanger does not have plane if plane not landed ", function () {
            expect(airport.hanger).not.toContain(plane);
        });
    });

    describe("#takeOffPlane", function () {
        it("let a landed plan to take off and confirm no longer in hanger", function () {
            airport.landPlane(plane);
            airport.takeOffPlane();
            expect(airport.hanger).not.toContain(plane);
        });

        it("expects the same plane to land and take off", function () {
            airport.landPlane(plane);
            expect(airport.takeOffPlane()).toBe(plane);
        });
    });

    describe("#isFull", function () {
      it("returns true if airport is at capacity", function () {
          for (let i = 1; i <= airport.capacity; i++) {
            airport.landPlane(plane);
          }
          expect(airport.isFull).toBeTruthy();
      });
    });

    describe("When stormy", function () {
        beforeEach(function () {
            weather.isStormy.and.returnValue(true);
        });

        it("Airport does not allow plane to land", function () {
            expect(function () {
                airport.landPlane(plane);
            }).toThrowError("Too stormy to land");
        });

    });

  describe("When airport capacity is full", function () {
    beforeEach(function () {
      weather.isStormy.and.returnValue(false);
    });

    it("Airport does not allow plane to land", function () {
      for (let i = 1; i <= airport.capacity; i++) {
        airport.landPlane(plane);
      }
      expect(function () {
        airport.landPlane(plane);
      }).toThrowError("Airport at max capacity");
    });

  });

});
