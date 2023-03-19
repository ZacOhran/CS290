
    // Question Bar
const inputField = document.getElementById('inputField');
const submitBtn = document.getElementById('submitBtn');
const outputText = document.getElementById('outputText');
    // Event Listener checking for the click. Adds input to output text for silly answer
submitBtn.addEventListener('click', function() {
  const inputText = inputField.value;
  outputText.textContent = 'Of course you do! ' + inputText + ' is a silly answer.';
});

    // Arrray grocery list for sidebar and For loop.
const groceryItems = [
    'Bread',
    'Two jugs of milk',
    'A thing of butter',
    'Eggs if theyre less than 10$',
    'Nutella',
    'Fetuchini or however u spell it',
    'brocoli',
    'Carrots',
    'Bananas, ironically. I don\'t have five',
    'Garlic',
    'Chips for movie night',
    'chocolate',
    'Water Bottles',
    'Orange Juice',
    'Cream Cheese',
    'the other green foods'
];

const groceryList = document.getElementById('groceryList');

    // For loop to put my shopping list into the element its called in.
for (let i = 0; i < groceryItems.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = groceryItems[i];
    groceryList.appendChild(listItem);
}

    // Calc for necessary math
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  
    // Define the calculate method
    calculate: function() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const operator = document.getElementById('operator').value;
        // Switch for operator. Hopefully works the same as C or im screwed
      let result;
      switch (operator) {
        case '+':
          result = this.add(num1, num2);
          break;
        case '-':
          result = this.subtract(num1, num2);
          break;
        case '*':
          result = this.multiply(num1, num2);
          break;
        case '/':
          result = this.divide(num1, num2);
          break;
        default:
          result = 'Invalid operator. How did you select this??';
      }
  
      document.getElementById('result').innerHTML = result;
    }
  };

  // Change backgrounds for preference of taste.
  const backgroundChanger = {
    images: [
        'none',
      'images/background1.png',
      'images/background2.png',
      'images/background3.png',
    ],
  
    init: function() {
      const dropdown = document.getElementById('dropdown');
      dropdown.addEventListener('change', this.changeBackground);
    },
  
    changeBackground: function() {
      const imageIndex = this.selectedIndex;
      const imageUrl = backgroundChanger.images[imageIndex];
      document.body.style.backgroundImage = `url(${imageUrl})`;
    },
  };
  
  backgroundChanger.init();

