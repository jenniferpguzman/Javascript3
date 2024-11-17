function sharePizza(numOfSlices, numOfPeople){
    let numOfPizza = (numOfSlices / numOfPeople).toFixed(2);
    return `Each person gets ${numOfPizza} slices of pizza; from our ${numOfSlices} slice pizza`;
}