// // This class contains the basefare and its respective distance
// class FareSlab {
//   constructor(distance, fare) {
//     this.distance = distance;
//     this.fare = fare;
//   }
// }

// class Taxi {
//   constructor(name
//   ) {
//     this.name = name}

//     taxiSlab = this.name => if (this.name === 'mini'){
//       let basefare = new FareSlab(3,50);
//       let nextFfare = new FareSlab(15,10);
//       let additionalFare = new FareSlab(1,8);
//       let limitFare = new FareSlab(75,8);
//     }
//     else if (this.name === 'sedan'){
//       let basefare = new FareSlab(5,80);
//       let nextFfare = new FareSlab(15, 12);
//       let additionalFare = new FareSlab(1, 10);
//       let limitFare = new FareSlab(100, 10);
//     }
//     else if (this.name === 'suv'){
//       let basefare = new FareSlab(5, 100);
//       let nextFfare = new FareSlab(15, 15);
//       let additionalFare = new FareSlab(1, 12);
//       let limitFare = new FareSlab(0, 0);
//   }

//   calculateFare = distance => {
//     //If there is perks above a particular distance and the input distance is greater than that
//     if (this.perksLimitDistance && distance >= this.perksLimitDistance) {
//       return distance * this.perksFare;
//     } else {
//       if (distance <= this.basefareDistance) {
//         return this.basefare;
//       } else if (distance <= this.basefareDistance + this.fareLimitDistance) {
//         return (
//           this.basefare + (distance - this.basefareDistance) * this.fareLimit
//         );
//       } else {
//         console.log(this.basefareDistance, this.fareLimitDistance);
//         return (
//           this.basefare +
//           this.fareLimitDistance * this.fareLimit +
//           (distance - this.basefareDistance - this.fareLimitDistance) *
//             this.additionalKmFare
//         );
//       }
//     }
//   };
// }

// console.log(mini.calculateFare(10));
// console.log(sedan.calculateFare(10));
// console.log(suv.calculateFare(10));

// console.log(mini.calculateFare(20));
// console.log(sedan.calculateFare(20));
// console.log(suv.calculateFare(20));

// console.log(mini.calculateFare(50));
// console.log(sedan.calculateFare(50));
// console.log(suv.calculateFare(50));

// // class FareSlab {
// //   constructor(type, distance, fare) {
// //     this.type = type;
// //     this.distance = distance;
// //     this.fare = fare;
// //   }

// //   calculateFare = () => {
// //     if (type === "basefare") {
// //       return this.fare;
// //     } else {
// //       return this.distance * this.fare;
// //     }
// //   };
// // }
