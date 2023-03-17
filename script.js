//your code here
var arr = [2, 1, 2];
var n = arr.length;
let majElem;
for(var i=0; i<arr.length; i++)
	{
		var count = 0;
		for(var j=0; j<arr.length; j++)
			{
				if(arr[j]==arr[i])
				{
					count++;
					if(count>Math.floor(n/2))
					{
						majElem = arr[i];
					}
				}
			}
	}
console.log(majElem);
