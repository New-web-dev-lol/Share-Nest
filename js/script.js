const signupButton = document.getElementById("signupButton")

const signupOverlay = document.getElementById("signupOverlay")

const closeSignup = document.getElementById("closeSignup")


// sign up btn

signupButton.addEventListener("click", function() {
    signupOverlay.style.display = "flex"
})

closeSignup.addEventListener("click", function() {
    signupOverlay.style.display = "none"
})




// Host btn

const hostbtn = document.querySelector(".hostbtn")

const hostContainer = document.querySelector(".hostContainer")

const closebtn = document.getElementById("closebtn")


// sign up btn

hostbtn.addEventListener("click", function() {
    hostContainer.style.display = "flex"
})

closebtn.addEventListener("click", function() {
    hostContainer.style.display = "none"
})




// 