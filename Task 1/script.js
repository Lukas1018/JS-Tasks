/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.forms[0].addEventListener("submit", convertWeight);

function convertWeight(e) {
  e.preventDefault();

  const input = document.querySelector("#search");
  const output = document.querySelector("#output");
  const weightToConvert = Number(input.value);
  output.innerHTML = "";
  input.style.border = "";

  if (!weightToConvert || isNaN(weightToConvert)) {
    input.style.border = "2px solid red";
    alert("Please, enter weight below");
    return;
  }
  const calculateWeight = (weight) => {
    const convertToLb = weight * 2.2026 + " Pounds";
    const convertToGrams = weight / 0.001 + " Grams";
    const convertToOz = weight * 35.274 + " Ounces";
    let weightResults = [];

    weightResults.push(convertToLb, convertToGrams, convertToOz);

    const resultHeader = document.createElement("h2");
    resultHeader.innerText = "Results:";
    resultHeader.style.cssText +=
      "text-align:center; text-transform:uppercase; padding-bottom:1rem";
    output.append(resultHeader);

    weightResults.forEach((weight) => {
      const result = document.createElement("h2");
      result.innerText = weight;
      result.style.textAlign = "center";
      output.append(result);
    });
  };
  calculateWeight(weightToConvert);
  input.value = "";
}
