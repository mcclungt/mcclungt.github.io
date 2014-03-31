//USER STORIES
//I'm a storeowner that is taking inventory and trying to find out which
//products from which sections are making the biggest profit.
//I can put revenues for products into list_1 and I will get the total sum
//of revenue. This list contains products sold from the toiletries section,
//rounded to the nearest dollar.
var list_1=[1,2,3,4,5,5,7]

var sum = 0;

for(var i=0, n=list_1.length; i < n; i++) { 
  sum += list_1[i]; 
  }

console.log(sum);

//With var mean I can get the average price of objects that sell.
var mean = sum/list_1.length;

console.log(mean);

//I can also get the median price.
var median = 0, numbers = list_1.length;
  if (numbers % 2 === 0) { 
    median = (list_1[numbers / 2 - 1] + list_1[numbers / 2]) / 2;
  } else { 
    median = list_1[(numbers - 1) / 2];
  }

console.log (median) 

//I can use list_2 as a second place to store products of a certain type.
//The proceeding code will give me the sum, average, and median for these types.
//list_2 contains the prices for the "back to school" section of the store.
var list_2=[4,4,5,5,6,6,6,7]

var sum = 0;
for(var i=0, n=list_2.length; i < n; i++) { 
  sum += list_2[i]; 
}
			
console.log (sum);

var mean = sum/list_2.length;

console.log(mean);

var median = 0, numbers = list_2.length;
    
if (numbers % 2 === 0) { 
  median = (list_2[numbers / 2 - 1] + list_2[numbers / 2]) / 2;
} else { 
  median = list_2[(numbers - 1) / 2];
}

console.log (median);