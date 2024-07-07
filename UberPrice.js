//Write a class to calculate Uber Price

class UberPriceCalculator 
{

    static base_Fare = 3.0;
   
    static per_mile_Rate = 2.5;
    
    static per_minute_Rate = 0.8;
    
    constructor(distance, duration) {
    
    this.distance = distance;
    
    this.duration = duration;
    
    }
    
    calculateFare() {
    
    const distanceFare = this.distance * UberPriceCalculator.per_mile_Rate;
    
    const timeFare = this.duration * UberPriceCalculator.per_minute_Rate;
    
    const totalFare = UberPriceCalculator.base_Fare + distanceFare + timeFare;
    
    return totalFare;
    
    }
    
    getDistance() {
    
    return this.distance;
    
    }
    
    setDistance(distance) {
    
    this.distance = distance;
    
    }
    
    getDuration() {
    
    return this.duration;
    
    }
    
    setDuration(duration) {
    
    this.duration = duration;
    
    }
    
    toString() {
    
    return `UberPriceCalculator[distance=${this.distance.toFixed(2)} miles, duration=${this.duration} minutes]`;
    
    }
    
    }
    
    const calculator = new UberPriceCalculator(6.5, 20);
    
    console.log(calculator.toString());
    
    const fare = calculator.calculateFare();
    
    console.log(`Total Fare: $${fare.toFixed(2)}`);


/* Output:  

UberPriceCalculator[distance=6.50 miles, duration=20 minutes]
Total Fare: $35.25

*/