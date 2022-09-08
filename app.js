// let name = document.getElementById("name").value;

// console.log(name)
// localStorage.setItem("name",name)
// let lasttName = document.getElementById("fathername").value;
// let gender = document.getElementById("gender").value;
// let employees = document.getElementById("Employees").value;
// let business = document.getElementById("Business").value;
// let additional = document.getElementById("additationalInformation").value;
// let age = document.getElementById("age").value;
// let number = document.getElementById("number").value;
// let email = document.getElementById("email").value;
// let country = document.getElementById("country").value;
// let city = document.getElementById("city").value;


let arr = []
function registeration() {


    let name = document.getElementById("name").value;
    let nameReg =   /(^[a-zA-Z]+$)/
    if(!name.match(nameReg)){
        swal("Invalid first name")
        return false
    }
    
    let fathername = document.getElementById("fathername").value;
    if(!fathername.match(nameReg)){
        swal("Invalid Last name")
        return false
    }
    let gender = document.getElementById("gender").value;
    if(!gender.match(nameReg)){
        swal("Invalid gender name")
        return false
    }
    let age = document.getElementById("age").value;
    let ageReg = /^(\+?\d{1,3}|\d{1,4})$/
    if(!age.match(ageReg)){
        swal("Invalid country age")
        return false
    }
    let number = document.getElementById("number").value;
    let numReg = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}/g
    if(!number.match(numReg)){
        swal("Invalid Phone number")
        return false
    }
    let email = document.getElementById("email").value;
    let emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(!email.match(emailReg)){
        swal("Invalid email")
        return false
    }
    let country = document.getElementById("country").value;
    if(!country.match(nameReg)){
        swal("Invalid country name")
        return false
    }
    let city = document.getElementById("city").value;
    if(!city.match(nameReg)){
        swal("Invalid city name")
        return false
    }else{
        let name2 = name
        let fathername2 = fathername
        let gender2 = gender
        let age2 = age
        let number2 = number
        let email2 = email
        let country2 = country
        let city2 = city
        let newArry =[name2,fathername2,gender2,age2,number2,email2,country2,city2] 
        console.log(newArry)
        arr.push(newArry);
        localStorage.setItem("data",JSON.stringify(arr)) 

    }
    swal("Registration Successful", "Your subscription is Successfully done!", "success"); 
}
function loadAll(){

    let index = 1
    let getData = localStorage.getItem("data")
    let newData =  JSON.parse(getData)
    for (let i = 0; i < newData.length; i++) {
        let row = table.insertRow()
        let cell1 = row.insertCell()
        let cell2 = row.insertCell()
        let cell3 = row.insertCell()
        let cell4 = row.insertCell()
        let cell5 = row.insertCell()
        let cell6 = row.insertCell()
        let cell7 = row.insertCell()
        let cell8 = row.insertCell()
        let cell9 = row.insertCell()
        cell1.innerHTML =  index++;
        cell2.innerHTML = newData[i][0]
        cell3.innerHTML = newData[i][1]
        cell4.innerHTML = newData[i][2]
        cell5.innerHTML = newData[i][3]
        cell6.innerHTML = newData[i][4]
        cell7.innerHTML = newData[i][5]
        cell8.innerHTML = newData[i][6]
        cell9.innerHTML = newData[i][7]
      }
}

loadAll()
function admin(){
    document.getElementById("popup").style.display = "flex";
    document.getElementById("panel").style.display = "none"
}
function adminShow(){
    document.getElementById("shows").style.display = "none"
}


function login(){
    let pass1 = document.getElementById("pass").value
    let username1 = document.getElementById("username").value
    let pass = "admin";
    let username = "admin"
    if( !username == username1){
        swal("Invalid username")
        
    }else if(!pass == pass1){
        swal("Invalid password")
    }else{
        window.location.href = "admin.html"
        
    }
}

function searchBar(){
    let filter = document.getElementById("myInput").value.toUpperCase();
    console.log(filter)
    let table = document.getElementById("table");
    let tbody = document.getElementById("tbody");
    let tr = tbody.getElementsByTagName("tr")
    for(let i = 0; i<tr.length; i++){
        let td = document.getElementsByTagName("td")[1];
        console.log(td)
        if(td){
            let textvalue = td.textContent || td.innerHTML;
            if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = ""
            }else{
                tr[i].style.display = "none"
            }
        }
        
    }
    
}


// function myFunction() {
//     // Declare variables
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");
  
//     // Loop through all table rows, and hide those who don't match the search query
//     for (i = 0; i < tr.length; i++) {
//       td = tr[i].getElementsByTagName("td")[0];
//       if (td) {
//         txtValue = td.textContent || td.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }
//     }
//   }