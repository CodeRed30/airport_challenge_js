'use strict';

class Airport{

  constructor(){
    this.hangar = [];
  }

  land(plane){
    this.hangar.push(plane);
  };

  planes(){
    return this.hangar;
  };

  takeOff(plane){
    this.hangar.shift(plane);
    return 'plane has taken off';
  };

};
