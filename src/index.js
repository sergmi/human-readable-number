module.exports = function toReadable (number) {
	let res = "";
	let arr_number = String(number).split("");
	
	function convert_I_Symbol(x){
		let item;
		switch(x){
			case "0": item = "zero"; break;
			case "1": item = "one"; break;
			case "2": item = "two"; break;
			case "3": item = "three"; break;
			case "4": item = "four"; break;
			case "5": item = "five"; break;
			case "6": item = "six"; break;
			case "7": item = "seven"; break;
			case "8": item = "eight"; break;
			case "9": item = "nine"; break;	
		}
		return item;
	}
	
	function convert_II_Symbol(x,y,a){
		let item = "";
		if(!a){a = "";}
		
		switch(x){
			case "0": item += y === "0"? "" : a + convert_I_Symbol(y); break;
			case "1": switch(y){
						case "0":  item = a + "ten"; break;
						case "1":  item = a + "eleven"; break;
						case "2":  item = a + "twelve"; break;
						case "3":  item = a + "thirteen"; break;
						case "4":  item = a + "fourteen"; break;
						case "5":  item = a + "fifteen"; break;
						case "6":  item = a + "sixteen"; break;
						case "7":  item = a + "seventeen"; break;
						case "8":  item = a + "eighteen"; break;
						case "9":  item = a + "nineteen"; break;
					}
					break;
			case "2": item = a + "twenty";  item += y === "0"? "" : " " + convert_I_Symbol(y); break;
			case "3": item = a + "thirty";  item += y === "0"? "" : " " + convert_I_Symbol(y); break;
			case "4": item = a + "forty";  item += y === "0"? "" : " " + convert_I_Symbol(y); break;
			case "5": item = a + "fifty";  item += y === "0"? "" : " " + convert_I_Symbol(y); break;
			case "6": item = a + "sixty";  item += y === "0"? "" : " " + convert_I_Symbol(y); break;
			case "7": item = a + "seventy";  item += y === "0"? "" : " " + convert_I_Symbol(y); break;
			case "8": item = a + "eighty";  item += y === "0"? "" : " " + convert_I_Symbol(y); break;
			case "9": item = a + "ninety";  item += y === "0"? "" : " " + convert_I_Symbol(y); break;
		}
		return item;
	}

	switch(arr_number.length){			
			case 1: res += convert_I_Symbol(arr_number[0]); break;
			case 2: res += convert_II_Symbol(arr_number[0],arr_number[1]); break;
			case 3: res += convert_I_Symbol(arr_number[0]) + " hundred" + convert_II_Symbol(arr_number[1],arr_number[2]," "); break;			
	}

	return res;
}
