function formValid() {
   var myName = document.getElementById('ezekiel').value;
    var myNumber = document.getElementById('numb').value;
    var myAddress = document.getElementById('addr').value;
    var myMail = document.getElementById('ezeko').value;
    
    if (myName.length === 0) {
        alert('Please input the contact name!!');
    }
    else{
        localStorage.setItem("myName", myName );
    }
    
    if (myNumber.length === 0) {
        alert('Please input the contact Number!!');
    }
    else{
        localStorage.setItem("myNumber", myNumber );
    }
    
    if (myAddress.length === 0) {
        alert('Please input the contact Address!!');
    }
    else{
        localStorage.setItem("myAddress", myAddress );
    }
    
    if (myMail.length === 0) {
        alert('Please input the contact email address!!');
    }
    else{
        localStorage.setItem("myMail", myMail );
    }
    function getContact() {
    localStorage.getItem("myName");
    }
}

function showContact() {
    var myName = document.getElementById('ezekiel').value;
    var myNumber = document.getElementById('numb').value;
    var myAddress = document.getElementById('addr').value;
    var myMail = document.getElementById('ezeko').value;

    if (myName.length != 0){
        document.write("Name: " + myName + "<br><br>");
    }
    if (myNumber.length != 0){
        document.write("Number: " + myNumber + "<br><br>")
    }
    if (myAddress.length != 0){
        document.write("Address: " + myAddress + "<br><br>");
    }
    if (myMail.length != 0){
        document.write("E-mail: " + myMail + "<br><br>");
    }
}
