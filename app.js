let arr = []
function registeration() {

    let name = document.getElementById("name").value;
    let nameReg =   /(^[a-zA-Z]+$)/
    if(!name.match(nameReg)){
        swal("Invalid name")
        return false
    }
    
    let fathername = document.getElementById("fathername").value;
    if(!fathername.match(nameReg)){
        swal("Invalid Father name")
        return false
    }
    let gender = document.getElementById("gender").value;
    if(!gender.match(nameReg)){
        swal("Invalid gender ")
        return false
    }
    let age = document.getElementById("age").value;
    let ageReg = /^(\+?\d{1,3}|\d{1,4})$/
    if(!age.match(ageReg)){
        swal("Invalid age")
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
        swal("Invalid Country name")
        return false
    }
    let city = document.getElementById("city").value;
    if(!city.match(nameReg)){
        swal("Invalid City name")
        return false
    }else{
        let i = 1;
        console.log(i)
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
        i++
        arr.push(newArry);
        localStorage.setItem( "data_"+ i +Math.random(),JSON.stringify(arr));
        console.log(i)
        // clearInput()
    }

    swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
      });




    swal({title: "Registration Successful", text: "Your registration is Successfully done!",icon: "success"
        }).then(function(){ 
       location.reload();
       }
    );

}

function loadAll() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
        console.log(keys)

    let index = 1
    for ( let i = 0; i < Object.keys(localStorage).length; i++) {

        let getData = localStorage.getItem( Object.keys(localStorage)[i] )
        let newData =  JSON.parse(getData)  
        
        let x = 0;
        for ( let x = 0; x < newData.length; x++ ) {
            
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
            cell2.innerHTML = newData[x][0]
            cell3.innerHTML = newData[x][1]
            cell4.innerHTML = newData[x][2]
            cell5.innerHTML = newData[x][3]
            cell6.innerHTML = newData[x][4]
            cell7.innerHTML = newData[x][5]
            cell8.innerHTML = newData[x][6]
            cell9.innerHTML = newData[x][7]
        }
    }
}

loadAll();

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

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            var div = document.getElementById("div");
            tr[i].style.display = "none";
            
          }
        }       
    }
}
// function clearInput(){
//     document.getElementById("name").value = ""
//     document.getElementById("fathername").value= ""
//     document.getElementById("age").value= ""
//     document.getElementById("number").value= ""
//     document.getElementById("email").value= ""
//     document.getElementById("country").value= ""
//     document.getElementById("city").value= ""
// }