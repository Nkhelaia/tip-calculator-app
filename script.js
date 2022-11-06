document.getElementById('btn').addEventListener('click', function(){
    var oneInput = document.getElementById('one').value
	var twoInput = document.getElementById('two').value
	
	if(oneInput > 0 && twoInput  > 0)
	{	
		var result = oneInput /(twoInput /100*twoInput /100)
		document.getElementById("resultone").innerHTML = result
		
		if(result < 18.5)
		{
			document.getElementById("output").innerHTML =  "THIN"
		}
		
		if(result > 18.5 && result < 25)
		{
			document.getElementById("output").innerHTML =  "OK"
		}
		
		if(result > 25)
		{
			document.getElementById("output").innerHTML = "FAT"
		}
	}
})