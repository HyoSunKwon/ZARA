
// nav 자바스크립트
const open=document.querySelector(".open_menu")
const nav=document.querySelector(".nav")
const close=document.querySelector(".close_btn")
const topnone=document.querySelector(".top_btn")


open.addEventListener("click",function(){
    nav.classList.add("on")
    document.querySelector("body").style.overflowY="hidden"
    // topnone.classList.add("on")
})
close.addEventListener("click", function(){
    nav.classList.remove("on")
    document.querySelector("body").style.overflowY="auto"
    // topnone.classList.remove("on")
})

const minus=document.querySelector(".plus_btn")
const onedepth=document.querySelectorAll(".onedepth")
// console.log(onedepth)
for(let n=0; n<onedepth.length; n++){
    onedepth[n].addEventListener("click", function(){
        if(onedepth[n].classList.contains("on")===false){
            for(let k=0; k<onedepth.length; k++){
                onedepth[k].classList.remove("on")
            }this.classList.add("on")
        }else{
            onedepth[n].classList.remove("on")
        }
        
    })
}




// TOP버튼 자바스크립트
const btnTop=document.querySelector("#top")

window.addEventListener("scroll", function(){
    let top=window.scrollY
    // console.log(top)
    if(top>300){
        btnTop.classList.add("active")
    }else{
        btnTop.classList.remove("active")
    }
})

btnTop.addEventListener("click", function(){
    window.scrollTo({top:0, behavior:"smooth"})
})

// header serch_btn 자바스크립트
const serchBtn=document.querySelector(".serch_btn")
const serch=document.querySelector(".serch_page_wrap")
const backBtn=document.querySelector(".back_btn_wrap")

serchBtn.addEventListener("click", function(){
    serch.classList.add("on")
    document.querySelector("body").style.overflowY="hidden"
})
backBtn.addEventListener("click", function(){
    serch.classList.remove("on")
    document.querySelector("body").style.overflowY="auto"
})



// 서브페이지_상품목록 자바스크립트
let pic=document.querySelectorAll(".pic")
let hart=true



// 버튼 클릭 자바스크립트
let click=document.querySelectorAll(".click")


for(let i=0; i<click.length; i++){
    click[i].addEventListener("click",function(){
        for(let k=0; k<click.length; k++){
            click[k].classList.remove("on")
            this.classList.add("on")
            // console.log(click)
        }
    })  
}


// 탭메뉴 클릭시 상품 이미지 변경
let bestList=document.querySelectorAll(".best_list")

for(let i=0; i<click.length; i++){
    click[i].addEventListener("click",function(){
        for(let k=0; k<bestList.length; k++){
            bestList[k].classList.remove("on")
        }
        bestList[i].classList.add("on")
    })
}


// 하트 클릭 자바스크립트
pic.forEach(function(el){
    el.addEventListener("click",function(){
    if(hart===true){
        el.setAttribute("src","./images/common/fullhart.svg")
        hart=false
    }else{
        el.setAttribute("src","./images/common/hart.svg")
        hart=true
    }
})
})






// 버튼 클릭 자바스크립트
let mainBtn=document.querySelectorAll(".click")


for(let i=0; i<click.length; i++){
    click[i].addEventListener("click",function(){
        for(let k=0; k<click.length; k++){
            click[k].classList.remove("on")
            this.classList.add("on")
            // console.log(click)
        }
    })  
}


const moreDelete=document.querySelector(".more_delete")
const serchList=document.querySelector("#delet")


moreDelete.addEventListener("click",function(){
    serchList.classList.add("on")
})















