window.onload = function () {

  // состояние приложения: данные
  var listingElements = ['apple', 'orange'];
  var storeElements = [];

  // логика JS, не связана с DOM
  // данная функция работает сo store
  function addToStoreElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }
  // данная функция работает с listing
  function addToListingElements(element) {
    var elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.push(element);
      storeElements.splice(elementPosition, 1);
    }
  }
  // данная функция работает с dlete
  function deleteElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition < 0) {
      elementPosition = storeElements.indexOf(element);
      storeElements.splice(elementPosition, 1);
    } else {
      listingElements.splice(elementPosition, 1);
    }
  }
  // данная функция работает с add new
  function addNewElement(element) {
    listingElements.push(element);
  }

  // updateUI берет данные из массивов и вставляет в DOM
  function updateUI() {
    var storeSelect = document.querySelector('.store-select');
    var storeTitle = document.querySelector('.store-title');
    var listingSelect = document.querySelector('.listing-select');
    var listingTitle = document.querySelector('.listing-title');
    var storeLength = `(${storeElements.length})`;
    var listingLength = `(${listingElements.length})`;
    storeTitle.innerHTML = `Store ${storeLength}`;
    listingTitle.innerHTML = `Listing ${listingLength}`;
    storeSelect.innerHTML = '';
    listingSelect.innerHTML = '';

    // вставка элементов из Listing
    for (var i = 0; i < listingElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }

    // вставка элементов из Store
    for (var i = 0; i < storeElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }
  // событие для кнопки "Add to store"
  var addButton = document.querySelector('#add-button-store');
  addButton.onclick = function () {
    var selectedOption = document.querySelector('.listing-select option:checked');
    addToStoreElements(selectedOption.innerText);
    updateUI();
  }
  // событие для кнопки "Add to listing"
  var addButton = document.querySelector('#add-button-listing');
  addButton.onclick = function () {
    var selectedOption = document.querySelector('.store-select option:checked');
    addToListingElements(selectedOption.innerText);
    updateUI();
  }
  // событие для кнопки "Delete element"
  var addButton = document.querySelector('#delete-button');
  addButton.onclick = function () {
    var selectedOption = document.querySelector('.listing-select option:checked, .store-select option:checked');
    deleteElements(selectedOption.innerText);
    updateUI();
  }
  // событие для кнопки "Add new element"
  var addButton = document.querySelector('#add-button-new');
  addButton.onclick = function () {
    var newElement = prompt('Введите название елемента', 'default');
    addNewElement(newElement);
    updateUI();
  }

  // запускаем начальное обновление интерфейса
  // для первоначального вывода данных из состояния в UI
  updateUI();

};