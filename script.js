 let myArray = ["apple", "banana", "orange", "grape", "kiwi", "melon", "pear"];



    function updateArrayDisplay() {
      let text = "";
      for (let i = 0; i < myArray.length; i++) {
        text += myArray[i] + "<br>";
      }
      document.getElementById("arrayDisplay").innerHTML = text;
    }
    updateArrayDisplay();


  
    function showArray() {
      let output = "";

      for (let i = 0; i < myArray.length; i++) {
        output += myArray[i] + "<br>";
      }

      document.getElementById("output").innerHTML =
        "<strong>Array (Forward):</strong><br>" + output;
    }


   
    function showReverse() {
      let output = "";

      for (let i = myArray.length - 1; i >= 0; i--) {
        output += myArray[i] + "<br>";
      }

      document.getElementById("output").innerHTML =
        "<strong>Array (Reverse):</strong><br>" + output;
    }


   
    function getInputValue() {
      let value = document.getElementById("addValue").value.trim();
      if (value === "") {
        alert("Please enter a value!");
        return null;
      }
      return value;
    }


 
    function addUnshift() {
      let value = getInputValue();
      if (value === null) return;

      myArray.unshift(value);
      updateArrayDisplay();

      document.getElementById("output").innerHTML =
        `Added <strong>${value}</strong> to START using unshift().`;
    }


    function addPush() {
      let value = getInputValue();
      if (value === null) return;

      myArray.push(value);
      updateArrayDisplay();

      document.getElementById("output").innerHTML =
        `Added <strong>${value}</strong> to END using push().`;
    }



    function removeShift() {
      if (myArray.length === 0) {
        alert("Array is empty!");
        return;
      }

      let removed = myArray.shift();
      updateArrayDisplay();

      document.getElementById("output").innerHTML =
        `Removed <strong>${removed}</strong> from START using shift().`;
    }


 
    function removePop() {
      if (myArray.length === 0) {
        alert("Array is empty!");
        return;
      }

      let removed = myArray.pop();
      updateArrayDisplay();

      document.getElementById("output").innerHTML =
        `Removed <strong>${removed}</strong> from END using pop().`;
    }
