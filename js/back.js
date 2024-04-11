let backBtn=document.querySelector(".history_back")
// console.log(back)

backBtn.addEventListener("click",function(b){
    b.preventDefault()
    history.back()
})
