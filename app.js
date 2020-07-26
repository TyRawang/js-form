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
				$(".tab"+i).show();			
			}else{
				$(".tab"+i).hide();						
			}
		}
		currentTab--;
		if(currentTab==2){
			$("#nextBtn").hide();
			$("#submitBtn").show();
		}else{
			$("#nextBtn").show();
			$("#submitBtn").hide();
		}		
	}
}


function next(){
	if(currentTab < 2){
		if(validate()){
			for(var i=0;i<3;i++){		
				if(i==currentTab+1){
					$(".tab"+i).show();			
				}else{
					$(".tab"+i).hide();						
				}
			}
			currentTab++;
			if(currentTab==2){
				$("#nextBtn").hide();
				$("#submitBtn").show();
			}else{
				$("#nextBtn").show();
				$("#submitBtn").hide();
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
	if($("input[name='time']:checked").val()==undefined){
		$("#errorFrequency").show();
		return false;
	}else{
		$("#errorFrequency").hide();
		return true;		
	}
}


function validateTab1(){
	if($("#houseType").val()==''){
		$("#errorHouseType1").show();
		return false;
	}else{
		$("#errorHouseType1").hide();
		return true;		
	}
}

function validateTab2(){
	if($("#houseType2").val()==''){
		$("#errorHouseType2").show();
		return false;
	}else{
		$("#errorHouseType2").hide();
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
