const menuBtn = document.querySelector('.menu')
const navLinks = document.querySelector('.nav-links')
const slider = document.querySelector('.slider')
const sliderLinks = document.querySelectorAll('.nav a')
const productImg = document.querySelector('.product-img img')
const productTitle = document.querySelector('.product-details > h1')
const productCost = document.querySelector('.product-details strong')
const colorPalate = document.querySelectorAll('.color div')
const buyNowBtn = document.querySelector('#buynowbtn')
const sizesBtn = document.querySelectorAll(".sizes button")
const overlayElement = document.createElement('div')
const popUpElement = document.createElement('div')
const successPopElement = document.createElement('div')
const quality = document.querySelectorAll('.our-quality .quality')
const season = document.querySelector('.season')
const seasonImg = document.querySelectorAll('.season img')
const searchBar = document.getElementById("search")
const itemNames = document.querySelectorAll('.shoe-text h1')
const shoeBuyNowBtn = document.querySelectorAll('.buy')

const mainContents = document.querySelector(".main-contents")


menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle('responsive-nav')
})



searchBar.addEventListener("keyup",()=>{
    let inputValue = searchBar.value
    itemNames.forEach((value)=>{
        if(value.textContent.toLowerCase().includes(inputValue.toLowerCase())){
            mainContents.appendChild(value.parentElement.parentElement)
        }
        else{
            value.parentElement.parentElement.remove()
        }
    })

    if(mainContents.childElementCount<=0){
        mainContents.innerHTML = `
            <div class="image">
                <h1>Items Not Found !!!</h1>
                <img src="./assets/9318694.jpg"
            <div>
        `
    }
    
    else{
        mainContents.querySelector(".image").remove()
    }
})

window.addEventListener("scroll",()=>{
    quality.forEach((element)=>{
        element.classList.toggle("scroll",window.scrollY>1010)
        element.classList.toggle("responsivescroll",window.scrollY>1600)
    })
    season.classList.toggle("smooth",window.scrollY>1600)
    season.classList.toggle("responsivesmooth",window.scrollY>3500)
})


sliderLinks.forEach((element, index) => {
    element.addEventListener('click', function () {
        slider.style.transform = `translateX(${-100 * index}vw)`
        productImg.src = `./assets/${element.textContent.toLowerCase()}.png`
        productTitle.textContent = element.textContent
        if (productTitle.textContent == "jordan") {
            productCost.textContent = "$159"
            colorPalate[0].style.backgroundColor = "grey"
            colorPalate[1].style.backgroundColor = "green"
        }
        else if (productTitle.textContent == "air force") {
            productCost.textContent = "$139"
            colorPalate[0].style.backgroundColor = "black"
            colorPalate[1].style.backgroundColor = "blue"
        }
        else if (productTitle.textContent == "blazer") {
            productCost.textContent = "$199"
            colorPalate[0].style.backgroundColor = "white"
            colorPalate[1].style.backgroundColor = "green"
        }
        else if (productTitle.textContent == "crater") {
            productCost.textContent = "$229"
            colorPalate[0].style.backgroundColor = "black"
            colorPalate[1].style.backgroundColor = "grey"
        }
        else if (productTitle.textContent == "hippie") {
            productCost.textContent = "$999"
            colorPalate[0].style.backgroundColor = "grey"
            colorPalate[1].style.backgroundColor = "black"
        }
        else {
            colorPalate[0].style.backgroundColor = "grey"
            colorPalate[1].style.backgroundColor = "green"
        }
    })
})


colorPalate.forEach((element) => {
    element.addEventListener("click", function () {
        if (element.style.backgroundColor == "black" && productTitle.textContent == "air force") {
            productImg.src = `./assets/air force.png`
        }
        else if (element.style.backgroundColor == "blue" && productTitle.textContent == "air force") {
            productImg.src = `./assets/air2.png`
        }
        else if (element.style.backgroundColor == "grey" && productTitle.textContent == "jordan") {
            productImg.src = `./assets/jordan.png`
        }
        else if (element.style.backgroundColor == "green" && productTitle.textContent == "jordan") {
            productImg.src = `./assets/jordan2.png`
        }
        else if (element.style.backgroundColor == "white" && productTitle.textContent == "blazer") {
            productImg.src = `./assets/blazer.png`
        }
        else if (element.style.backgroundColor == "green" && productTitle.textContent == "blazer") {
            productImg.src = `./assets/blazer2.png`
        }
        else if (element.style.backgroundColor == "black" && productTitle.textContent == "crater") {
            productImg.src = `./assets/crater.png`
        }
        else if (element.style.backgroundColor == "grey" && productTitle.textContent == "crater") {
            productImg.src = `./assets/crater2.png`
        }
        else if (element.style.backgroundColor == "grey" && productTitle.textContent == "hippie") {
            productImg.src = `./assets/hippie.png`
        }
        else {
            productImg.src = `./assets/hippie2.png`
        }
    })
})

sizesBtn.forEach((element) => {
    element.addEventListener("click", () => {
        element.classList.toggle("black")
    })
})


popUpElement.innerHTML += `
<div class="pop-up-container">
<div class="removebtn">
    <i class='bx bx-x'></i>
</div>
<form>
    <div class="form-contents">
        <h1>Personal Information</h1>
        <div class="input">
            <input type="text" required>
            <label>Name</label>
        </div>
        <div class="input">
            <input type="tel" maxlength="10" required>
            <label>Phone Number</label>
        </div>
        <div class="input">
            <input type="text" required>
            <label>Address</label>
        </div>
        <h1 id="card">Card Information</h1>
        <div class="card-img">
            <div class="img">
                <img src="./assets/visa.png">
            </div>
            <div class="img">
                <img src="./assets/master.png">
            </div>
    
            </div>
        <div class="input">
            <input type="password" required>
            <label fo>Card Number</label>
        </div>
        <div class="date">
            <div class="input">
                <input type="tel" maxlength="2" required>
                <label>mm</label>
            </div>
            <div class="input">
                <input type="tel" maxlength="4"  required>
                <label>yyyy</label>
            </div>
            <div class="input">
                <input type="tel" maxlength="3" required>
                <label>cvv</label>
            </div>
        </div>
    </div>
    <button>CheckOut!</button>
</form>
</div> `


successPopElement.innerHTML = `
<div class="tick">
    <img src="./assets/tick.png">
</div>
<h1>Successfully Your Order Placed.</h1>
<div class="msg">
    <span class="ok">OK</span>
<div>
`

overlayElement.classList.add('overlay')
successPopElement.classList.add("success")

shoeBuyNowBtn.forEach((element)=>{
    element.addEventListener("click",popup)
})

buyNowBtn.addEventListener('click',popup)

function popup(){
    
    document.body.appendChild(popUpElement)
    document.body.appendChild(overlayElement)

    const removebtn = document.querySelector('.removebtn')
    
    removebtn.addEventListener("click",() => {
        popUpElement.remove()
        overlayElement.remove()
    })

    const formBtn = document.querySelector("form button")

    formBtn.addEventListener("click", (event) => {
        event.preventDefault()
        popUpElement.remove()

        document.body.appendChild(successPopElement)

        const okbtn = document.querySelector(".ok")

        okbtn.addEventListener("click",()=>{
            overlayElement.remove()
            successPopElement.remove()
        })

    })

}

