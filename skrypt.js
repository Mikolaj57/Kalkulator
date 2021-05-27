function kliknij()
{
	let age = document.getElementById("age").value;
	let sex = document.getElementById("sex").value;
	let height = document.getElementById('height').value;
	let weight = document.getElementById('weight').value;
	let sport = document.getElementById("sport").value;
	let goal = document.getElementById('goal').value;
	
	if(sex == 'female')
	{
		sex = -161;		
	}
	else
	{
		sex = 5;			
	}

  if(!age || !height || !weight || 0 > age || 0 > height || 0 > weight)
  {
    alert("Podczas wprowadzania danych wystąpił błąd. Sprawdź wartości podane w formularzu.");
	return;
  }
	
	let bmr = (9.99 * weight)+(6.25 * height)-(4.92 * age) + sex;
	let neat = 400;
	let eat;
	switch(sport)
	{
		case "0":
			eat = 0;
		break;
		case "1":
			eat = 199;
		break;
		case "2":
			eat = 400;
		break;
		case "3":
			eat = 550;
		break;
		case "4":
			eat = 774;
		break;
	}
	
	switch(goal)
	{
		case "1":
			goal = -300;
		break;
		case "2":
			goal = 300;
		break;
	}
	
	let tef = 0.08 * (bmr + eat + neat)
	
	let tdee = bmr + eat + tef + neat + goal;
	tdee = Math.round(tdee);
	
	if(tdee < 0 || tdee > 5000)
	  {
		alert("Podczas wprowadzania danych wystąpił błąd. Sprawdź wartości podane w formularzu.");
		return;
	  }
	
	
	
	document.getElementById('final').innerHTML = "Twoje całkowite zapotrzebowanie kaloryczne wynosi: </br>";
	document.getElementById("kcal").innerHTML = tdee + " kcal";
	
	
}

