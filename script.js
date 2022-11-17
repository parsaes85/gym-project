let navButton = document.querySelector('.nav-button')
navButton.addEventListener('click',e=>{
    navButton.classList.toggle('change')
})


let navMenu = document.querySelector('.nav-menu')
window.addEventListener('scroll',e=>{
    if(window.scrollY > 200){
        navMenu.classList.add('custom-navbar')
    }else{
        navMenu.classList.remove('custom-navbar')
    }
})

let awardText = document.querySelector('.award-text')
let awardImg = document.querySelector('.award-img')


window.addEventListener('scroll',e=>{
    if(window.innerWidth > 730){
        if(window.scrollY > 700){
            awardText.classList.add('from-right')
            awardImg.classList.add('from-left')
        }else{
            awardText.classList.remove('from-right')
            awardImg.classList.remove('from-left')
        }
    }
})


let galleryListCategory = document.querySelectorAll(".gallery-list-item")
let galleryImgs = document.querySelectorAll('.filter')

galleryListCategory.forEach(list=>{
    list.addEventListener('click',e=>{
        let value = list.getAttributeNode('data-filter').value

        switch (value){
            case "cat1":
                category('cat1')
                break;
            case "cat2":
                category('cat2')
                break;
            case "cat3":
                category('cat3')
                break;
            default:
                galleryImgs.forEach(img=>{
                    img.style.display = 'block'
                })
                break;
        }
        
        galleryListCategory.forEach(btn=>{
            btn.classList.remove('active-item')
        })
        list.classList.add('active-item')      
    })
})

function category (className){
    galleryImgs.forEach(img=>{
        if(img.classList.contains(className)){
            img.style.display = 'block'
        }else{
            img.style.display = 'none'
        }
    })
}

let card1 = document.querySelector('.card-1')
let card2 = document.querySelector('.card-2')
let card3 = document.querySelector('.card-3')



window.addEventListener('scroll',e=>{
    if(window.innerWidth > 992){
        if(window.scrollY > 4500){
            card1.classList.add('moveFromRight')
            card2.classList.add('moveFromBottom')
            card3.classList.add('moveFromLeft')
        }else{
            card1.classList.remove('moveFromRight')
            card2.classList.remove('moveFromBottom')
            card3.classList.remove('moveFromLeft')
        }
    }
})