/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const getCarsData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    showCars(data);
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getCarsData(ENDPOINT);

function showCars(carData) {
  carData.forEach((brand) => {
    const brandCard = document.createElement("div");
    const brandHeader = document.createElement("h1");
    const modelList = document.createElement("ul");

    brandHeader.innerText = brand.brand;
    let models = [];
    models = brand.models;

    models.forEach((model) => {
      const carModel = document.createElement("li");
      modelList.append(carModel);
      carModel.innerText = model;
    });

    brandCard.setAttribute("id", "brand-card");
    brandCard.append(brandHeader, modelList);
    document.querySelector("#output").append(brandCard);

    console.log(models);
  });
}
