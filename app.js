class taxi {
  constructor(
    basefareDetails,
    next15KmsFare,
    additionalKmFare,
    perksBeyondLimit
  ) {
    this.basefare = basefareDetails.basefare;
    this.basefareDistance = basefareDetails.distance;
    this.next15KmsFare = next15KmsFare;
    this.additionalKmFare = additionalKmFare;
    this.perksLimitDistance = perksBeyondLimit.limit;
    this.perksFare = perksBeyondLimit.fare;
  }
}
