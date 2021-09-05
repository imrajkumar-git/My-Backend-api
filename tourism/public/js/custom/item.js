function myFunction() {
    var x = document.getElementById("price").value;
    var y = document.getElementById("quantity").value;

    document.getElementById("disabledInput").innerHTML = x * y;
  }