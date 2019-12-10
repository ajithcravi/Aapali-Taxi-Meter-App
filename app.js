class Taxi {
  constructor(
    basefareDetails,
    next15KmsFare,
    additionalKmFare,
    perksBeyondLimit
  ) {
    this.basefare = basefareDetails.basefare;
    this.basefareDistance = basefareDetails.basefaredistance;
    this.next15KmsFare = next15KmsFare;
    this.additionalKmFare = additionalKmFare;
    this.perksLimitDistance = perksBeyondLimit.limit;
    this.perksFare = perksBeyondLimit.fare;
  }

  calculateFare = distance => {
    //If there is perks above a particular distance and the input distance is greater than that
    if (this.perksLimitDistance && distance >= this.perksLimitDistance) {
      return distance * this.perksFare;
    }
  };
}

//Creating the mini type taxi
let mini = new Taxi({ basefare: 50, basefaredistance: 3 }, 10, 8, {
  limit: 75,
  fare: 8
});

console.log(mini.calculateFare(100));
