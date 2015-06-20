
exports.Sum = function(num1, num2){
    return num1 + num2;
}

exports.SumOfArray = function(arrayOfNums){
    var i, sum = 0;
    for (i = 0; i < arrayOfNums.length; i++)
        sum = sum + arrayOfNums[i];
    return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function (arrayOfNums) {
    var i=0, j, sum = 0;
    arrayOfNums.sort();
    while (i < arrayOfNums.length)
    {
        j=i;
        sum = sum + arrayOfNums[i];
        i++;
        while (arrayOfNums[i] == arrayOfNums[j]&&arrayOfNums.length>i)
            i++;
    }
    return sum;
}

exports.ReverseString = function(str){
    str=str.split("").reverse("").join("");
    return str;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
    var i=0;
	for(i=0;i<arrayOfStrings.length;i++)
	{
		arrayOfStrings[i]=arrayOfStrings[i].split("").reverse("").join("");
	}
    return arrayOfStrings;
}