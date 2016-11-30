(function(){
	Array.prototype.toTwenty = function(){
		var list = [];
		for (var i = 1; i <= 20; i++) {
			list.push(i);
		}
		return list;
	};
	
	Array.prototype.toForty = function(){
		var list = [];
		for (var i = 2; i <= 40; i++) {
			if(i % 2 === 0){
				list.push(i);
			}
		}
		return list;
	};
	
	Array.prototype.toOneThousand = function(){
		var list = [];
		for (var i = 10; i <= 1000; i++) {
			if(i % 10 === 0){
				list.push(i);
			}
		}
		return list;
	};	
	
	Array.prototype.search = function(n){
		var s = {
			index: 0,
			count: 0,
			length: this.length
		}
		var firstIndex  = 0,  
		lastIndex   = this.length - 1; 
		 

		while(firstIndex <= lastIndex)  
		{  
			middleIndex = Math.floor((lastIndex + firstIndex) / 2); 
			if(this[lastIndex] === n){
				s.index = lastIndex;
				return s;
			}
			else{
				lastIndex -= 1;
			}

			if(this[firstIndex] === n){
				s.index = firstIndex;
				return s;
			}
			else{
				firstIndex += 1;
			}
			if(this[middleIndex] === n) {
				s.index = middleIndex;
				return s;
			}

			else if (n < this[middleIndex])  
			{  
				lastIndex = middleIndex - 1;  
			}   
			else if (n > this[middleIndex])  
			{  
				firstIndex = middleIndex + 1;  
			}
			s.count++;

		}  
		s.index = -1;
		return s; 
	};
	
	module.exports = Array.prototype.toTwenty();
	module.exports = Array.prototype.toForty();
	module.exports = Array.prototype.toOneThousand();
	
})()
/*console.log(Array.prototype.toForty().search(40));
console.log(Array.prototype.toForty().search(20));
console.log(Array.prototype.toForty().search(10000));*/