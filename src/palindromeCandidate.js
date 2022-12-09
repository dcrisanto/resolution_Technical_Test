let text = document.getElementById('input_text');
const btnValidate = document.getElementById('btn_validate');

let array = [];


const inputText = (event) => {
  text = event.srcElement.value;
  console.log(text);
  return text;
}

text.addEventListener('keyup', inputText);

const evaluateCandidate = () => {
  const textCandidate = text.split('').reverse().join("");

  if (textCandidate === text){
    console.log(true);
    return true;
  }

  reOrganize();
}

const reOrganize = () => {
  array = text.split('').sort();

  let duplicates = [];
  let noDuplicates = [];
  let newArray = [];
  for(let i=0; i < array.length; i++){
    if(array[i+1] === array[i]){
      duplicates.push(array[i]);
    } 
  }

  for(let d of duplicates){
    noDuplicates = array.filter(item => item != d);
    array = noDuplicates;
  }
  
  const partArray = duplicates.concat(noDuplicates);
  const reverseDuplicates = duplicates.reverse();
  newArray = partArray.concat(reverseDuplicates);
  text = newArray.join("");
  console.log(text);

  if(text === ""){
    console.log(false);
    return false;
  }

  const textCandidate = text.split('').reverse().join("");

  if(textCandidate === text){
    console.log(true);
  } else {
    console.log(false);
  }

  //return textCandidate === text ? true : false;
}

btnValidate.addEventListener('click', evaluateCandidate);
