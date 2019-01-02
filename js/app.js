document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  const getSex = {"boy": "Male", "girl": "Female"};

  const list = document.querySelector("#dog-list");
  if (localStorage.getItem("savedList")) {
    let listSaved = localStorage.getItem("savedList");
    list.innerHTML = listSaved;
    console.log("loaded saved");
  }

  const nameInput = document.querySelector("#name");
  const sexInput = document.querySelector("#sex");
  const breedInput = document.querySelector("#breed");
  const dogGoodness = document.querySelector("#dog-goodness");
  const dogGoodnesses = document.querySelectorAll("[name='goodness']")
  const goodDog = document.querySelector("#good-dog");
  const badDog = document.querySelector("#bad-dog");
  const hiddenForms = [
    document.querySelector("#sex-form"),
    document.querySelector("#breed-form"),
    document.querySelector("#goodness-form"),
    document.querySelector("#submit-dog")
  ];
  const form = document.querySelector("#new-dog-form");
  const deleteAll = document.querySelector("#delete-all")

  const handleName = function (event) {
    dogGoodness.textContent = `Is ${event.target.value} a good ${sexInput.value}?`;
    document.querySelector("#sex-form").hidden = false;
  };
  nameInput.addEventListener("input", handleName);

  const handleSex = function (event) {
    dogGoodness.textContent = `Is ${nameInput.value} a good ${event.target.value}?`;
    goodDog.textContent = `Good ${event.target.value}`;
    badDog.textContent = `Bad ${event.target.value}`;
    document.querySelector("#breed-form").hidden = false;
  };
  sexInput.addEventListener("change", handleSex);

  const handleBreed = function (event) {
    document.querySelector("#goodness-form").hidden = false;
  };
  breedInput.addEventListener("input", handleBreed);

  const handleGoodness = function (event) {
    document.querySelector("#submit-dog").hidden = false;
  };
  dogGoodnesses.forEach((goodness) => {
    goodness.addEventListener("change", handleGoodness);
  });

  const handleForm = function (event) {
    event.preventDefault();
    list.innerHTML += `<ul> <li>Name: ${event.target.name.value}</li> <li>Sex: ${getSex[event.target.sex.value]}</li>  <li>Breed: ${event.target.breed.value}</li> <li>Goodness: ${event.target.goodness.value} ${event.target.sex.value}</ul>`;
    form.reset();
    localStorage.setItem("savedList", list.innerHTML);
    hiddenForms.forEach((form) => {
      form.hidden = true;
    });
  };
  form.addEventListener("submit", handleForm);

  const handleDelete = function (event) {
    list.innerHTML = "";
    localStorage.removeItem("savedList");
  }
  deleteAll.addEventListener("click", handleDelete);

});
