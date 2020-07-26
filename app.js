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
function prev(){
	if(currentTab>0){
		for(var i=0;i<3;i++){		
			if(i==currentTab-1){
				document.getElementsByClassName("tab"+i)[0].style.display = "block";
			}else{
				document.getElementsByClassName("tab"+i)[0].style.display = "none";
			}
		}
		currentTab--;
		if(currentTab==2){
			document.getElementById("nextBtn").style.display = "none";
			document.getElementById("submitBtn").style.display = "";
		}else{
			document.getElementById("nextBtn").style.display = "";
			document.getElementById("submitBtn").style.display = "none";				
		}		
		if(currentTab==0){
			document.getElementById("prevBtn").style.display = "none";			
		}
	}
}


function next(){
	if(currentTab < 2){
		if(validate()){
			for(var i=0;i<3;i++){		
				if(i==currentTab+1){
				document.getElementsByClassName("tab"+i)[0].style.display = "block";
				}else{
				document.getElementsByClassName("tab"+i)[0].style.display = "none";
				}
			}
			currentTab++;
			if(currentTab==2){
				document.getElementById("nextBtn").style.display = "none";
				document.getElementById("submitBtn").style.display = "";
			}else{
				document.getElementById("nextBtn").style.display = "";
				document.getElementById("submitBtn").style.display = "none";				
			}		
			if(currentTab>0){
					document.getElementById("prevBtn").style.display = "";
			}
		}
	}
}

function validate(){
	switch(currentTab){
		case 0:
			return validateTab0();
			break;
		case 1:
			return validateTab1();
			break;
		case 2:
			return validateTab2();
			break;
	}
	return true;
}

function submitAction(){
	if(validate()){
		// TO BE IMPLEMENTED
	}
}

function validateTab0(){
	var ele = document.getElementsByName('time'); 
	var isAnySelected = false;
	for(i = 0; i < ele.length; i++) { 
		if(ele[i].checked) 
		{
			isAnySelected = true;
		}
	} 
	
	if(!isAnySelected){
		document.getElementById("errorFrequency").style.display = "block";				
		return false;
	}else{
		document.getElementById("errorFrequency").style.display = "none";				
		return true;		
	}
}


function validateTab1(){
	if(document.getElementById("houseType").value == ''){
		document.getElementById("errorHouseType1").style.display = "block";		
		return false;
	}else{
		document.getElementById("errorHouseType1").style.display = "none";		
		return true;		
	}
}

function validateTab2(){
	if(document.getElementById("houseType2").value == ''){
		document.getElementById("errorHouseType2").style.display = "block";		
		return false;
	}else{
		document.getElementById("errorHouseType2").style.display = "none";		
		return true;		
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
