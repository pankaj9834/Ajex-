let fetchbtn = document.getElementById('fetchbtn');
fetchbtn.addEventListener('click', buttonclickhandler)

function buttonclickhandler() {
    console.log(" you have clicked the button")
        //initiate an xhr object
    const xhr = new XMLHttpRequest;
    //open the object
    xhr.open('GET', 'harry.txt', true)
    xhr.onprogress = function() {
        console.log("onprogress")
    }
    xhr.onload = function() {
        console.log(this.responseText)
    }

    xhr.send();
}