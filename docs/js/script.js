// ここにJavaScriptを記述していきます。
const top_button =document.getElementById("read-more");
top_button.addEventListener("click",()=>{
    var moretext=document.getElementById("more-text");
    
    if(moretext.style.display ==="none"){
        moretext.style.display ="flex";
        top_button.textContent = "閉じる"; // ボタンのテキストを変更
    }
    else{
        moretext.style.display="none";
        top_button.textContent ="もっと詳しく";
    }
});


//modal
const apply_form_short =document.getElementById("short");
const apply_form_middle =document.getElementById("middle");
const apply_form_long =document.getElementById("long");


const modal=document.getElementById("apply-modal");
const apply_form=document.getElementById("apply-form");




document.addEventListener("DOMContentLoaded", () => {
    const apply_type_text=document.getElementById("apply_type_text");
    apply_form_short.addEventListener("click",()=>{
    if(apply_type_text){
        try{
            apply_type_text.textContent = "[短期集中2週間コース]";        
            modal.classList.add("active");
            apply_form.classList.add("active");
            console.log("hello")
        } catch (error) {
           // classList が利用できない場合は className を使用
            modal.className += " active";
            apply_form.className += " active";
        }
    }
    else{
        console.error();
    }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const apply_type_text=document.getElementById("apply_type_text");
    apply_form_middle.addEventListener("click",()=>{
    if(apply_type_text){
        try{
            apply_type_text.textContent = "[通常1ヶ月コース]";        
            modal.classList.add("active");
            apply_form.classList.add("active");
            console.log("hello")
        } catch (error) {
           // classList が利用できない場合は className を使用
            modal.className += " active";
            apply_form.className += " active";
        }
    }
    else{
        console.error();
    }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const apply_type_text=document.getElementById("apply_type_text");
    apply_form_long.addEventListener("click",()=>{
    if(apply_type_text){
        try{
            apply_type_text.textContent = "[土日開発2ヶ月コース]";        
            modal.classList.add("active");
            apply_form.classList.add("active");
            console.log("hello")
        } catch (error) {
           // classList が利用できない場合は className を使用
            modal.className += " active";
            apply_form.className += " active";
        }
    }
    else{
        console.error();
    }
    });
});


//close
const modal_close =document.getElementById("modal-close");

modal_close.addEventListener("click", ()=>{
    modal.classList.remove("active");
    apply_form.classList.remove("active");
});




// <!-- Students -->  //

document.querySelectorAll(".carousel-indicators li").forEach(function(indicator){
    indicator.addEventListener("click",function(){
        const numbers=[0,1,2];
        var slideTo = this.getAttribute("data-slide-to");
        console.log(slideTo);
        for(let i=0;i<3;i++){
            if(slideTo == i){
                let number=String(i+1);
                let others=numbers.filter(number=>number !==i);
                console.log(others[1])
                let re_number1 =String(others[0]+1);
                let re_number2 =String(others[1]+1);
                console.log(".student-box:nth-child("+number+")");
                document.querySelector(".student-box:nth-child("+number+")").classList.add("students_active");
                document.querySelector(".student-box:nth-child("+re_number1+")").classList.remove("students_active");
                document.querySelector(".student-box:nth-child("+re_number2+")").classList.remove("students_active");
            }
        }
    });
});