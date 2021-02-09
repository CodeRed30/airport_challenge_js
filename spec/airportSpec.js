'use strict';

describe("Airport", function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });
  it('instructs a plane to land', function(){
    airport.land(plane)
    expect(airport.planes()).toEqual([plane]);
  });
  it('allows plane to take off', function(){
    airport.land(plane)
    airport.takeOff(plane)
    expect(airport.planes()).not.toEqual([plane]);
    expect(airport.takeOff(plane)).toEqual('plane has taken off');
  });

});
