let input = document.getElementById('input_number');
const btnCalvulate = document.getElementById('btn_calculate');

let valueInput = "";
const minNUmber = 0;
const maxNumber = 500;
const numbersRoman = ["I", "V", "X", "L", "C", "D"];
let roman = "";
let cant = 0;

const inputValue = (event) => {
  valueInput = event.srcElement.value;
  console.log(valueInput);
  return valueInput;
}

input.addEventListener('keyup', inputValue);


const toRoman = () => {
  //number = parseFloat(number.value);
  let number = parseFloat(valueInput);
  if (typeof number != 'number' || !Number.isInteger(number)) {
    throw new Error(`${number} is not a number or interger number`);
  }

  if(number > maxNumber) {
    console.log('error > 500');
    throw new Error(`El número ${number} debe ser menor o igual a ${maxNumber}`);   
  }

  if(Math.sign(number) === -1){
    console.log('error negative');
    throw new Error(`El número ${number} es negativo`);
  }

  if(number === 0){
    console.log('error 0');
    throw new Error(`El número ${number} no debe ser igual a ${minNUmber}`);
  }
  
  while(number>0){
    if(number === maxNumber){
      roman = "D";
      number -=500;
    } else if (number >= 400){
      roman += "CD";
      number -= 400;
    } else if(number >= 100){
      cant = parseInt(number/100);
        for(let i=0; i < cant; i++){
          roman += "C";
          number -= 100;
        }
    } else if(number >= 90){
      roman += "XC";
      number -= 90;
    } else if(number >= 50){
      roman += "L";
      number -= 50;
    } else if(number >= 40){
      roman += "XL";
      number -= 40;
    } else if(number >= 10){
      cant = parseInt(number/10)
      for(let i=0; i < cant; i++){
        roman += "X";
        number -= 10;
      }
    } else if(number == 9){
      roman += "IX";
      number -= 9;
    } else if(number >= 5){
      roman += "V";
      number -= 5;
    } else if (number >= 4){
      roman += "IV";
      number -= 4;
    } else {
      for(let i=0; i < number; i++){
        roman += "I";
      }
      number = 0;
    }
    
  }
  console.log(`${valueInput} es igual en números romanos a ${roman}`);
  roman = "";
}

btnCalvulate.addEventListener('click', toRoman);

