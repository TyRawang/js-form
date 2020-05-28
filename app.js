var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

  // console.log(x[n]);
  // console.log(n);

  if (n==0) {
    document.getElementById("prevBtn").style.display = "none";

  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }

  if (n==(x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit"
  } else {
    document.getElementById("nextBtn").innerHTML = "Next"; 
  }

}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab"); 

  console.log("v: "+!validateForm)
  if (n==1 && !validateForm()) return false;

  x[currentTab].style.display ="none"; 
  currentTab = currentTab + 1;
  if(currentTab >=x.length) {
    document.getLelementBy("regForm").submit();
    return false; 
  }

  showTab(currentTab); 

}

function validateForm() {
  var x, y, i, valid = true; 
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    
    console.log("test: " + i + " " + y[i].checked);

    if(y[i].checked === false || y[i].value == ""  ) {
      console.log(y[i].value);

      y[i].className += " invalid"; 
      valid = false;
    }     
    else {
      console.log("check");
      valid = true; 
      break; 
    }
  }

  if(valid) {
    
  }
  return valid; 


}
