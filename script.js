var Cars = {
	name: 'Enterprise Rental Cars',
	types: [{
		name: 'economyCar',
		economyCars: 500,
		carsBooked: 150,
		available: 350,
		price: 20,
	}, {
		name: 'midsizeCar',
		midsizeCars: 500,
		midsizeBooked: 100,
		available: 400,
		price: 35,
	}],
	economyAvail: function() {
		return this.types[0].economyCars - this.types[0].carsBooked;
	},
	midsizeAvail: function() {
		return this.types[1].midsizeCars - this.types[1].midsizeBooked;
	},
	rentEconomy: function() {
		return this.types[0].carsBooked++ && this.economyAvail();
	},
	rentMidsize: function() {
		return this.types[1].midsizeBooked + 1 && this.midsizeAvail();
	},
}
var renter = {
	renters: []
};
var firstName = "";
var lastName = "";
var carSelected = "";
var customer = "";

function displayDetails(Car) {
	console.log(Car);
	document.getElementById("available").innerHTML = Cars.types[Car].available;
	document.getElementById("price").innerHTML = Cars.types[Car].price;
}
for (var i = 0; i < Cars.types.length; i++) {
	var radioBtn = document.createElement("INPUT");
	radioBtn.setAttribute("type", "radio");
	radioBtn.setAttribute("name", "carType");
	radioBtn.setAttribute("value", i);
	radioBtn.setAttribute("id", "Car" + i);
	radioBtn.setAttribute("onclick", "displayDetails(" + i + ")");
	// radioBtn.onclick = displayDetails(i);
	var radioLbl = document.createElement("LABEL");
	radioLbl.innerHTML = Cars.types[i].name;
	document.getElementById("radialSection").appendChild(radioBtn);
	document.getElementById("radialSection").appendChild(radioLbl);
}
document.getElementById("reservationForm").onsubmit = function(event) {
	event.preventDefault();
	if (!document.getElementById("confirmation").checked) {
		alert("Please agree to terms");
		return;
	} 
	var radios = document.getElementsByName("carType");
	var carSelected = "";
	firstName = document.getElementById("inputFirstName").value;
	lastName = document.getElementById("inputLastName").value;
	
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			carSelected = radios[i].value;
			break;
		}
	}
	if (carSelected == "") {
		alert("Please Select a car.");
		
	} else if (firstName == "" || lastName == "") {
		alert("all fields must be filled");
	
	} else if (!firstName == "" || !lastName == "") {
	    customer = firstName + lastName;
		document.getElementById("customer").innerHTML = customer;
	alert(firstName + ", " + "You have reserved the " + Cars.types[parseInt(carSelected)].name + ".");
	}
}