
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

}

navLink.forEach(n => n.addEventListener('click', linkAction))



const navLink2 = document.querySelectorAll('.nav___link')

function linkAction2(){
    // active link
    navLink2.forEach(n => n.classList.remove('active2'))
    this.classList.add('active2')

}

navLink2.forEach(n => n.addEventListener('click', linkAction2))



const selected = document.querySelector(".selected");
const optionContainer = document.querySelector(".option-container");
const optionList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionContainer.classList.toggle("active");
});


optionList.forEach(o => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionContainer.classList.remove("active");
    });
  });



const selected2 = document.querySelector(".selected2");
const optionContainer2 = document.querySelector(".option-container2");
const optionList2 = document.querySelectorAll(".option2");

selected2.addEventListener("click", () => {
    optionContainer2.classList.toggle("active");
});


optionList2.forEach(c => {
    c.addEventListener("click", () => {
      selected2.innerHTML = c.querySelector("label").innerHTML;
      optionContainer2.classList.remove("active");
    });
  });



