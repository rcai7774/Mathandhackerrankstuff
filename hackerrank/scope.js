class Difference{
	maximumDifference = 0;
	constructor(elements){
		this.elements = elements;
	}
computeDifference(){
	let max = this.elements[0];
	let min = this.elements[0];
	for(let i = 0; i < this.elements.length; i++){
		if(this.elements[i] > max){
			max = this.elements[i];
		}
		if(this.elements[i] < min){
			min = this.elements[i];
		}
	}
	this.maximumDifference = max - min;
}

}