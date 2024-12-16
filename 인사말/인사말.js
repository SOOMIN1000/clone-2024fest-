// gnb 슬라이드
let lang = document.querySelector("#header div .gnb_side .lang");
lang.addEventListener("click", () => {
    let ul = lang.querySelector("ul");
    let li = ul.querySelectorAll("li");
    li.forEach(v => {
        if (v.style.height == "0px") {
            ul.style.visibility = "visible"
            v.style.height = "24px"
            v.style.overflow = "visible"
        } else {
            ul.style.visibility = "hidden"
            v.style.height = "0px"
            v.style.overflow = "hidden"
        }
    })
})
//gnb ham버튼 애니메이션
let ham = document.querySelector("#header div .gnb_side .ham");
let ham_icons = document.querySelectorAll("#header div .gnb_side .ham .ham_icon>div");
ham.addEventListener("click", () => {
    ham_icons.forEach((i) => {
        i.classList.toggle("coll")
    })
    let gnb = document.querySelector("#gnb");
    gnb.classList.toggle("gnb_on")

})
//header 색 변경
window.addEventListener('scroll', function (e) {
    let header = this.document.querySelector("#header");
    let header_lang = header.querySelector(".lang button");
    let header_lang_ul = header.querySelector(".lang ul");
    console.log(this.document.querySelector("body").offsetWidth);
    if (this.scrollY > 1) {
        header.style.backgroundColor = "#fff";
        header_lang.style.borderColor = "#000";
        header_lang_ul.style.borderColor = "#000"
    } else if (this.scrollY == 0) {
        header.style.backgroundColor = "transparent";
        header_lang_ul.style.borderColor = "transparent"
    } else {
        header.style.backgroundColor = "transparent";
        header_lang_ul.style.borderColor = "transparent"
    }
});
