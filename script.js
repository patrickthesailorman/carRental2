var Cars = {
	name: 'Enterprise Rental Cars',
	types: [{
		type: 'economyCar',
		economyCars: 500,
		carsBooked: 150,
		available: 350,
		price: 20,
	}, {
		type: 'midsizeCar',
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

for(var i = 0; i < Cars.types.length; i++) {
    console.log("start");
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
console.log("Stop");
    
}

document.getElementById("reservationForm").onsubmit = function(event) {
    event.preventDefault();
    if(!document.getElementById("confirmation").checked) {
        alert("Please agree to terms");
        return;
    }
    
    var radios = document.getElementsByName("carType");
    var carSelected = "";
    
    for(var i = 0; i < radios.length; i ++) {
        if(radios[i].checked) {
            carSelected = radios[i].value;
            break;
        }
    }
    
    if(carSelected == "") {
        alert("Please Select a car.");
        return;
    }
    alert("You have reserved car " + Cars.types[parseInt(carSelected)].type + ".");
}

// function addRenter() {
// 	firstName = document.getElementById("inputFirstName").value;
// 	lastName = document.getElementById("inputLastName").value;
// 	if (firstName == "" || lastName == "") {
// 		alert("all fields must be filled");
// 	} else if (document.getElementById("carType").value == "Please select a vehicle") {
// 		alert("Please select a vehicle");
// 	} else {
// 		renter.renters.push({
// 			custFirstName: firstName,
// 			custLastName: lastName,
// 			carType: carSelected
// 		});
// 		displayRenter();
// 	}
// }

// function displayRenter() {
// 	document.getElementById("customer").innerHTML = firstName + " " + lastName;
// }

// function displayInfo() {
// 	carSelected = document.getElementById("carType").value;
// 	if (carSelected == Cars.types[0].type) {
// 		document.getElementById("economyAvail").innerHTML = Cars.economyAvail();
// 		document.getElementById("price").innerHTML = '$' + Cars.types[0].econPrice;
// 		document.getElementById("midsizeAvail").innerHTML = "";
// 		document.getElementById("price2").innerHTML = "";
// 	} else if (carSelected == Cars.types[1].type) {
// 		document.getElementById("midsizeAvail").innerHTML = Cars.midsizeAvail();
// 		document.getElementById("price2").innerHTML = '$' + Cars.types[1].midsizePrice;
// 		document.getElementById("economyAvail").innerHTML = "";
// 		document.getElementById("price").innerHTML = "";
// 	}
// 	document.getElementById("yourCarType").innerHTML = carSelected;
// }
// window.onload = function() {
// 	document.getElementById("name").innerHTML = Cars.name;
// };

// function rentacar() {
// 	document.getElementById("reservationForm").onclick = function(event) {
// 		event.preventDefault();
// 		carSelected = document.getElementById("carType").value;
// 		firstName = document.getElementById("inputFirstName").value;
// 		lastName = document.getElementById("inputLastName").value;
// 		customer = document.getElementById("customer").value;
// 		if (document.getElementById("inputFirstName").value == " " || document.getElementById("inputLastName").value == " ") {
// 			alert("all fields must be filled");
// 		} else if (document.getElementById("carType").value == ' ') {
// 			alert('Please select a car type.');
// 		} else {
// 			alert(firstName + " " + lastName + " you have reserved the " + carSelected);
// 			if (carSelected == Cars.types[0].type) {
// 				Cars.rentEconomy();
// 			} else if (carSelected == Cars.types[1].type) {
// 				Cars.rentMidsize();
// 			}
// 		}
// 	}
// }	