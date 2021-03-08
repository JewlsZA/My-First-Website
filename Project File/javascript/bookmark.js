let myImages = [];
let myVehicles = [];
let myComments = [];

let localStorageVar = localStorage;

function initialize() {

    if (localStorageVar.getItem("hasCodeRunBefore") == null) {

        localStorageVar.setItem("hasCodeRunBefore", true);
        localStorageVar.setItem("myImages", JSON.stringify(myImages));
        localStorageVar.setItem("myVehicles", JSON.stringify(myVehicles));
        localStorage.setItem("myComments", JSON.stringify(myComments));

    }

    //leave a comment 
    document.getElementById("submitComment").addEventListener("click", function () {

        let userComment = document.getElementById("userComment").value;
        myComments = JSON.parse(localStorage.getItem("myComments"));
        myComments.push(userComment);
        localStorage.setItem("myComments", JSON.stringify(myComments));     
    });
    document.getElementById("commentList").innerHTML = (`User Comments: ${JSON.parse(localStorage.getItem("myComments"))}`) ;

    //Images bookmark
    let thumbArr = document.getElementsByClassName("thumbsUp");
    for (let i = 0; i < thumbArr.length; i++) {

        thumbArr[i].addEventListener("click", function () {
            //alert(thumbArr[i].previousElementSibling.outerHTML);


            myImages = JSON.parse(localStorageVar.getItem("myImages"));
            myImages.push(thumbArr[i].previousElementSibling.outerHTML);
            localStorageVar.setItem("myImages", JSON.stringify(myImages));
            alert(`There is currently ${myImages.length} saved images in your bookmark page`);

        });
    }

    //vehicle bookmark
    let vehicleArr = document.getElementsByClassName("vehicleBookmark");
    for (let i = 0; i < vehicleArr.length; i++) {

        vehicleArr[i].addEventListener("click", function () {
            //alert(vehicleArr[i].parentElement.outerHTML);


            myVehicles = JSON.parse(localStorageVar.getItem("myVehicles"));
            myVehicles.push(vehicleArr[i].parentElement.outerHTML);
            localStorageVar.setItem("myVehicles", JSON.stringify(myVehicles));
            alert(`There is currently ${myVehicles.length} saved vehicles in your bookmark page`);
        });
    }

}

function initBookmark() {
    //Images bookmark
    //session storage check & create
    if (localStorageVar.getItem("hasCodeRunBefore") != null) {

        //interate throug array
        let imagesContainer = document.getElementById("imageList");
        myImages = JSON.parse(localStorageVar.getItem("myImages"));

        for (let i = 0; i < myImages.length; i++) {

            imagesContainer.innerHTML += myImages[i];
            //console.log(`Added this image to imagesContainer (element ${i}):  ${myImages[i]}`);
            //alert(`Added this image to imagesContainer (element ${i}):  ${myImages[i]}`);
        }
    }
    // else {
    //     document.getElementById("imageList").innerHTML
    // }

    //vehicle bookmark
    //session storage check & create
    if (localStorageVar.getItem("hasCodeRunBefore") != null) {

        //interate throug array
        let vehicleContainer = document.getElementById("vehicleList");
        myVehicles = JSON.parse(localStorageVar.getItem("myVehicles"));

        for (let i = 0; i < myVehicles.length; i++) {

            vehicleContainer.innerHTML += myVehicles[i];
            //console.log(`Added this vehicle-box to vehicleContainer (element ${i}):  ${myVehicles[i]}`);
            //alert(`Added this vehicle-box to vehicleContainer (element ${i}):  ${myVehicles[i]}`);
        }
    }
}