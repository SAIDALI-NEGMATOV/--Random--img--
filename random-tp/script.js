let box =document.querySelector(".box")
let img =document.querySelector('img')

let b = img.getAttribute('src')


let foto = 'https://storge.pic2.me/c/1360x800/841/57ca8f6eabd0e.jpg'
let fototwo = 'https://img5.goodfon.com/wallpaper/nbig/4/23/kuby-figury-cube-figures-fon-blue-yellow-fon-sinii.jpg'
let fototree = 'https://p4.wallpaperbetter.com/wallpaper/422/549/156/hd-background-nature-1920x1080-wallpaper-preview.jpg'
let fotofor = 'https://img.lovepik.com/background/20211022/large/lovepik-premium-blue-technology-background-image_401959707.jpg'
let fotofive = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7vK-sBbfIoVUGn-AXp3-aBj0HYgPyKUldVQ&usqp=CAU'
let fotozero = 'https://cdn.create.vista.com/api/media/medium/227002360/stock-photo-books-hardcovers-white-brick-wall?token='

box.onclick = () => {
    let rnd = Math.floor(Math.random () * 6) 
    if (rnd == "1"){
        img.setAttribute('src', foto)
        box.style.width = "200px"
        box.style.height = "200px"
        box.classList.add("activeone")
        box.classList.remove("activetwoo")
        box.classList.remove("activefor")
        box.classList.remove("activefive")
        box.classList.remove("activezero")
        box.classList.remove("activethree")
    }else  if (rnd == "2"){
        img.setAttribute('src', fototwo)
        box.style.width = "300px"
        box.style.height = "300px"
        box.classList.remove("activeone")
        box.classList.remove("activethree")
        box.classList.remove("activefor")
        box.classList.remove("activefive")
        box.classList.remove("activezero")
        box.classList.add("activetwoo")
    }else  if (rnd == "3"){
        img.setAttribute('src', fototree)
        box.style.width = "500px"
        box.style.height = "500px"
        box.classList.remove("activetwoo")
        box.classList.remove("activeone")
        box.classList.remove("activefor")
        box.classList.remove("activefive")
        box.classList.remove("activezero")
        box.classList.add("activethree")
    }else  if (rnd == "4"){
        img.setAttribute('src', fotofor)
        box.style.width = "350px"
        box.style.height = "350px"
        box.classList.remove("activetwoo")
        box.classList.remove("activeone")
        box.classList.remove("activethree")
        box.classList.remove("activefive")
        box.classList.remove("activezero")
        box.classList.add("activefor")
    }else  if (rnd == "5"){
        img.setAttribute('src', fotofive)
        box.style.width = "150px"
        box.style.height = "150px"
        box.classList.remove("activetwoo")
        box.classList.remove("activeone")
        box.classList.remove("activethree")
        box.classList.remove("activefor")
        box.classList.remove("activezero")
        box.classList.add("activefive")
    }else  if (rnd == "0"){
        img.setAttribute('src', fotozero)
        box.style.width = "250px"
        box.style.height = "250px"
        box.classList.remove("activetwoo")
        box.classList.remove("activeone")
        box.classList.remove("activethree")
        box.classList.remove("activefor")
        box.classList.remove("activefive")
        box.classList.add("activezero")
    }
    console.log(rnd);
}