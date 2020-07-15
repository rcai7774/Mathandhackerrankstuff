const divisorSum = function(n){
    //write your code here. Given an integer, find the sum of all its divisors
		let result = 0;
		for(let i = 1; i <= n; i++){
			if(n % i === 0){
				result += i;
			}
		}
    return result;
}