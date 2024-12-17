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
    // console.log(this.document.querySelector("body").offsetWidth);
    if (this.scrollY > 0) {
        header.style.backgroundColor = "#fff";
        header_lang.style.borderColor = "#000";
        header_lang_ul.style.borderColor = "#000"
        this.document.querySelector(".dropdown").style.visibility = "visible";
        this.document.querySelector(".dropdown").style.opacity = "1";
    } else if (this.scrollY == 0) {
        header.style.backgroundColor = "transparent";
        if (this.document.querySelector("body").offsetWidth <= 767.98) {
            header_lang.style.borderColor = "#fff";
        }
        header_lang_ul.style.borderColor = "transparent"
        this.document.querySelector(".dropdown").style.visibility = "hidden";
        this.document.querySelector(".dropdown").style.opacity = "0"
    } else {
        header.style.backgroundColor = "transparent";
        if (this.document.querySelector("body").offsetWidth <= 767.98) {
            header_lang.style.borderColor = "#fff";
        }
        header_lang_ul.style.borderColor = "transparent"
        this.document.querySelector(".dropdown").style.visibility = "hidden";
        this.document.querySelector(".dropdown").style.opacity = "0"
    }
});



AOS.init({
    duration: 1200,
})
AOS.init();
AOS.refresh();

//section_tabs (공연,지역,장르)
let section_tabs_li = document.querySelectorAll(".section_tabs ul>li");
let now; //현재 선택된 tabs

section_tabs_li.forEach((li) => {
    li.addEventListener("click", () => {
        for (let i = 0; i < section_tabs_li.length; i++) {
            section_tabs_li[i].classList.remove("on");
        }
        li.classList.add("on");
        change_now();
        let regional = document.querySelector(".sec03 .container .regional");
        let performance = document.querySelector(".sec03 .container .performance");
        let genre = document.querySelector(".sec03 .container .genre");
        if (now.dataset.id == "지역") {
            // regional.style.display = "block";
            // performance.style.display = "none";
            // genre.style.display = "none";
            regional.classList.remove("hidden");
            performance.classList.add("hidden");
            genre.classList.add("hidden")
        } else if (now.dataset.id == "공연") {
            // regional.style.display = "none";
            // performance.style.display = "block";
            // genre.style.display = "none";
            regional.classList.add("hidden");
            performance.classList.remove("hidden");
            genre.classList.add("hidden")
        } else if (now.dataset.id == "장르") {
            // regional.style.display = "none";
            // performance.style.display = "none";
            // genre.style.display = "block";
            regional.classList.add("hidden");
            performance.classList.add("hidden");
            genre.classList.remove("hidden")
        }
    })
})


function change_now() {
    section_tabs_li.forEach((li) => {
        if (li.classList.contains("on")) {
            now = li; //li 태그형으로 가져옴
        }
    })
}
//section_tabs 공연,장르,지역 부분 끝



//slide 부분
let banner = [
    {
        id: 1,
        cate: "K클래식",
        h3: "K 클래식",
        p: "전 세계를 무대로 활약중인<br>예술가를 만나는",
        img: "./img/performance-img001.jpg"
    },
    {
        id: 2,
        cate: "또 한 번 빛나는",
        h3: "또 한번 빛나는",
        p: "다시 기억해야 할 공연과 <br> 주목해야 할 지역단체의 공연",
        img: "./img/performance-img002.jpg"
    },
    {
        id: 3,
        cate: "가을음악회",
        h3: "가을음악회",
        p: "주말 오후에 청와대에서 열리는 <br> 야외 음악회",
        img: "./img/performance-img003.jpg"
    },
    {
        id: 4,
        cate: "또 한 번 빛나는 무용",
        h3: "또 한번 빛나는 - 무용",
        p: "대표 현대무용 레퍼토리",
        img: "./img/performance-img004.jpg"
    },
    {
        id: 5,
        cate: "별들의 낭독회",
        h3: "별들의 낭독회",
        p: "대한민국 대표<br>배우들과 함께하는",
        img: "./img/performance-img005.jpg"
    },
    {
        id: 6,
        cate: "꿈을 잇다",
        h3: "꿈을 잇다",
        p: "어린이와 청소년을 위한<br>다채로운 공연",
        img: "./img/performance-img006.jpg"
    }
]


let slide = [
    {
        id: 1,
        img: "./img/thumb/K클래식/thumb-3666978547_ch3rO2Ig_ce1c3786cc71bb440726cf473a034b2457510bd3_355x502.png",
        cate: "K클래식",
        genre: "클래식",
        tit: "국립극장 K-클래식 패키지",
        day: "2024-10-22 ~ 2024-10-27",
        local: "국립극장 해오름극장",
        region: "서울",
        start: "2024-10-22",
        end: "2024-10-27",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 2,
        img: "./img/thumb/K클래식/thumb-3666978547_yfUOC9na_e6c373c5cf2b46f93055a78b3eea83f5a7154311_355x502.png",
        cate: "K클래식",
        genre: "클래식",
        tit: "국립심포니오케스트라 &#60;라흐마니노프 & 베토벤&#62;",
        day: "2024-10-22 ~ 2024-10-22",
        local: "국립극장 해오름극장",
        region: "서울",
        start: "2024-10-22",
        end: "2024-10-22",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 3,
        img: "./img/thumb/K클래식/thumb-3666978547_oNmSZniR_38bc155b65fc6917dcba796b93b25b839e08f7c7_355x502.png",
        cate: "K클래식",
        genre: "클래식",
        tit: "국립발레단 &#60;해설이 있는 전막 발레 돈키호테&#62;",
        day: "2024-10-23 ~ 2024-10-23",
        local: "국립극장 해오름극장",
        region: "서울",
        start: "2024-10-23",
        end: "2024-10-23",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 4,
        img: "./img/thumb/K클래식/thumb-3666978547_jNziaI5Y_ee395d16d409ee7c72ba255c9dfaae9840be09fa_355x502.png",
        cate: "K클래식",
        genre: "클래식",
        tit: "국립국악관현악단 &#60;격格, 한국의 멋&#62;",
        day: "2024-10-25 ~ 2024-10-25",
        local: "국립극장 해오름극장",
        region: "서울",
        start: "2024-10-25",
        end: "2024-10-25",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 5,
        img: "./img/thumb/K클래식/thumb-3666978547_fbW6GS5k_3f89e61a200b1a712ef62902b3b655ad8b091452_355x502.png",
        cate: "K클래식",
        genre: "클래식",
        tit: "국립오페라단 &#60;오페라 페스타&#62;",
        day: "2024-10-26 ~ 2024-10-26",
        local: "국립극장 해오름극장",
        region: "서울",
        start: "2024-10-26",
        end: "2024-10-26",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 6,
        img: "./img/thumb/K클래식/thumb-3666978547_zC9kd5cQ_45e5a98fa8c192300d90f85b7ad3d38e27402188_355x502.png",
        cate: "K클래식",
        genre: "클래식",
        tit: "KBS 교향악단 &#60;가을의 서정&#62;",
        day: "2024-10-27 ~ 2024-10-27",
        local: "국립극장 해오름극장",
        region: "서울",
        start: "2024-10-27",
        end: "2024-10-27",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 7,
        img: "./img/thumb/또_한_번_빛나는/thumb-1025909962_5OPMfDdp_4a40c2254b0d12ad8fbcc5950fbec90e6daecb24_355x502.jpg",
        cate: "또 한 번 빛나는",
        genre: "연극",
        tit: "극단 홍시 &#60;이별의 말도 없이&#62;",
        day: "2024-10-26 ~ 2024-10-27",
        local: "예술의전당 자유소극장",
        region: "서울",
        start: "2024-10-26",
        end: "2024-10-27",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 8,
        img: "./img/thumb/또_한_번_빛나는/thumb-3666978547_bwqsQ35K_9fec7b284d1e6c2d965890d6ae6404874b0fbe09_355x502.png",
        cate: "또 한 번 빛나는",
        genre: "연극",
        tit: "공상집단 뚱딴지&#60;코뿔소&#62;",
        day: "2024-10-31 ~ 2024-11-06",
        local: "예술의전당 자유소극장",
        region: "서울",
        start: "2024-10-31",
        end: "2024-11-06",
        host: "문화체육관광부 · 예술경영지원센터"

    },
    {
        id: 9,
        img: "./img/thumb/또_한_번_빛나는/thumb-3666978547_yupBHKlz_d4f3acede988801c4a7e47b9891d0fe37440c1a0_355x502.png",
        cate: "또 한 번 빛나는",
        genre: "연극",
        tit: "극단 파람불 &#60;옥이가 오면&#62;",
        day: "2024-11-08 ~ 2024-11-08",
        local: "예술의전당 자유소극장",
        region: "서울",
        start: "2024-11-08",
        end: "2024-11-08",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 10,
        img: "./img/thumb/또_한_번_빛나는/thumb-3666978547_GwWQDT5L_1a923cbea1622af5b4d07252fb8e25c34b3eea5f_355x502.png",
        cate: "또 한 번 빛나는",
        genre: "연극",
        tit: "안다미로아트컴퍼티 &#60;문&#62;",
        day: "2024-11-10 ~ 2024-11-10",
        local: "예술의전당 자유소극장",
        region: "서울",
        start: "2024-11-10",
        end: "2024-11-10",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 11,
        img: "./img/thumb/또_한_번_빛나는/thumb-3666978547_FDGAYX1r_23718c729acb0c5ad05bd351a3bc2d57e08bddf0_355x502.png",
        cate: "또 한 번 빛나는",
        genre: "연극",
        tit: "극단76 &#60;관객모독&#62;",
        day: "2024-10-04 ~ 2024-10-10",
        local: "예술의전당 자유소극장",
        region: "서울",
        start: "2024-10-04",
        end: "2024-10-10",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 12,
        img: "./img/thumb/또_한_번_빛나는/thumb-3666978547_tNvIyTVh_5362d38c01ea5d474304a317bd6e96136c375cae_355x502.png",
        cate: "또 한 번 빛나는",
        genre: "연극",
        tit: "극단 코너스톤 &#60;맹&#62;",
        day: "2024-10-17 ~ 2024-10-23",
        local: "예술의전당 자유소극장",
        region: "서울",
        start: "2024-10-17",
        end: "2024-10-23",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 13,
        img: "./img/thumb/가을음악회/thumb-3666978547_DmACW5Sz_19d3b914c5c047fd10744c44122134c1310a6515_355x502.png",
        cate: "가을음악회",
        genre: "뮤지컬",
        tit: "오오씨어터 &#60;토장군을 토장군을 찾아라!&#62;",
        day: "2024-10-19 ~ 2024-10-19",
        local: "청와대 헬기장 야외 가설무대",
        region: "서울",
        start: "2024-10-19",
        end: "2024-10-19",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 14,
        img: "./img/thumb/가을음악회/thumb-3666978547_BgENsotI_502046099f0260b5bd33b74ed3c4f42b45d9b25a_355x502.png",
        cate: "가을음악회",
        genre: "클래식",
        tit: "업사이클 뮤직 (Upcycle Music)",
        day: "2024-10-20 ~ 2024-10-20",
        local: "청와대 헬기장 야외 가설무대",
        region: "서울",
        start: "2024-10-20",
        end: "2024-10-20",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 15,
        img: "./img/thumb/가을음악회/thumb-1025909962_Yre1NSc6_3bd9a32dca737d0d034092ebfec222dbb1bccada_355x502.png",
        cate: "가을음악회",
        genre: "클래식",
        tit: "고성현 & 이 마에스트리",
        day: "2024-10-19 ~ 2024-10-19",
        local: "청와대 헬기장 야외 가설무대",
        region: "서울",
        start: "2024-10-19",
        end: "2024-10-19",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 16,
        img: "./img/thumb/가을음악회/thumb-3666978547_AOUp9cfg_d21076217a265498798b2c5e0c6103c392f23c94_355x502.png",
        cate: "가을음악회",
        genre: "국악",
        tit: "문화기획 갯마당 &#60;솟아라, 솟아라&#62;",
        day: "2024-10-20 ~ 2024-10-20",
        local: "청와대 헬기장 야외 가설무대",
        region: "서울",
        start: "2024-10-20",
        end: "2024-10-20",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 17,
        img: "./img/thumb/가을음악회/thumb-3666978547_4Coe5vAt_d3c62e427564c6a2689fe165b9852365e4ecffb3_355x502.png",
        cate: "가을음악회",
        genre: "국악",
        tit: "(사)한국전통예술단 아울 &#60;어사매 풍류열전&#62;",
        day: "2024-10-20 ~ 2024-10-20",
        local: "청와대 헬기장 야외 가설무대",
        region: "서울",
        start: "2024-10-20",
        end: "2024-10-20",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 18,
        img: "./img/thumb/가을음악회/thumb-3666978547_OoYKtfFR_aed5fa63ebb098941facb6db974808e63e1cb918_355x502.png",
        cate: "가을음악회",
        genre: "국악",
        tit: "헤이스트링 &#60;지금, 기분 좀 낼게요&#62;",
        day: "2024-10-20 ~ 2024-10-20",
        local: "청와대 헬기장 야외 가설무대",
        region: "서울",
        start: "2024-10-20",
        end: "2024-10-20",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 19,
        img: "./img/thumb/가을음악회/thumb-3666978547_uTC5tL20_cf70b7d16da5f7cf2a238a4393f162b234dc7785_355x502.png",
        cate: "가을음악회",
        genre: "국악",
        tit: "추다혜차지스",
        day: "2024-10-20 ~ 2024-10-20",
        local: "청와대 헬기장 야외 가설무대",
        region: "서울",
        start: "2024-10-20",
        end: "2024-10-20",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 20,
        img: "./img/thumb/가을음악회/thumb-3666978547_bnxFeEuQ_e776606f94a72c1764f0ace51a65205edb0bae1a_355x502.png",
        cate: "가을음악회",
        genre: "국악",
        tit: "힐금",
        day: "2024-10-20 ~ 2024-10-20",
        local: "청와대 헬기장 야외 가설무대",
        region: "서울",
        start: "2024-10-20",
        end: "2024-10-20",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 21,
        img: "./img/thumb/가을음악회/thumb-3666978547_JHt4GWgj_9270420fb7f3f85df954860db16a04d500bfc8f5_355x502.png",
        cate: "가을음악회",
        genre: "국악",
        tit: "첼로가야금",
        day: "2024-10-20 ~ 2024-10-20",
        local: "청와대 헬기장 야외 가설무대",
        region: "서울",
        start: "2024-10-20",
        end: "2024-10-20",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 22,
        img: "./img/thumb/가을음악회/thumb-3666978547_SQwqCHe2_c4fb4d4d64b631a49347db18941ea55a22a81e32_355x502.png",
        cate: "가을음악회",
        genre: "연극",
        tit: "극단이루마 &#60;당신이 좋아&#62;",
        day: "2024-10-19 ~ 2024-10-19",
        local: "청와대 헬기장 야외 가설무대",
        region: "서울",
        start: "2024-10-19",
        end: "2024-10-19",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 23,
        img: "./img/thumb/또_한_번_빛나는_무용/thumb-3666978547_opGXJUZP_b6807873ea31f88ff5cd7a05704cbc604a20c302_355x502.png",
        cate: "또 한 번 빛나는 무용",
        genre: "무용",
        tit: "안애순컴퍼니 &#60;척 Cheok&#62;",
        day: "2024-10-22 ~ 2024-10-23",
        local: "명동예술극장",
        region: "서울",
        start: "2024-10-22",
        end: "2024-10-23",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 24,
        img: "./img/thumb/또_한_번_빛나는_무용/thumb-3666978547_ONXVhvPF_157bff72d4c5daacbcd1b31b7412ac7717a22b65_355x502.png",
        cate: "또 한 번 빛나는 무용",
        genre: "무용",
        tit: "그들의 논쟁 & 이야기의 탄생",
        day: "2024-10-25 ~ 2024-10-26",
        local: "명동예술극장",
        region: "서울",
        start: "2024-10-25",
        end: "2024-10-26",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 25,
        img: "./img/thumb/또_한_번_빛나는_무용/thumb-3666978547_UV8AbIau_8e532d1e61e695b0d6a325c9ba14cd2dab949999_355x502.png",
        cate: "또 한 번 빛나는 무용",
        genre: "무용",
        tit: "오! 오필리아 오필리아 & The Day Before",
        day: "2024-11-08 ~ 2024-11-09",
        local: "명동예술극장",
        region: "서울",
        start: "2024-11-08",
        end: "2024-11-09",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 26,
        img: "./img/thumb/별들의/thumb-3666978547_ctZKDAvo_cfbc8f0e3a0356f951fdf38e5a01b126e8649336_355x502.png",
        cate: "별들의 낭독회",
        genre: "기타",
        tit: "별들의 낭독회 &#60;게릴라 씨어터&#62;",
        day: "2024-11-01 ~ 2024-11-03",
        local: "명동예술극장",
        region: "서울",
        start: "2024-11-01",
        end: "2024-11-03",
        host: "문화체육관광부 · 예술경영지원센터, 국립증앙극장, 국립극단, 예술의전당"
    },
    {
        id: 27,
        img: "./img/thumb/꿈을_잇다/thumb-3666978547_Jp3QeNfL_7300d9ca8f73ab3583aefa3c201f168b53399a53_355x502.png",
        cate: "꿈을 잇다",
        genre: "기타",
        tit: "서계동 &#60;꿈을 잇다&#62;",
        day: "2024-10-12 ~ 2024-10-25",
        local: "서계동 앞마당",
        region: "서울",
        start: "2024-10-12",
        end: "2024-10-25",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 28,
        img: "./img/thumb/꿈을_잇다/thumb-3666978547_1XZK285D_fa3b5c93f45ed7492b254b3556b5936407c0f915_355x502.png",
        cate: "꿈을 잇다",
        genre: "연극",
        tit: "꿈의 극단 &#60;오즈의 마법사&#62;",
        day: "2024-10-12 ~ 2024-10-19",
        local: "서계동 앞마당",
        region: "서울",
        start: "2024-10-12",
        end: "2024-10-19",
        host: "문화체육관광부 · 예술경영지원센터 · 한국문화예술교육진흥원"
    },
    {
        id: 29,
        img: "./img/thumb/꿈을_잇다/thumb-3666978547_pnFYtr83_d45c13bb93f44ecdc3cea602271c3e7cfd3748f3_355x502.png",
        cate: "꿈을 잇다",
        genre: "국악",
        tit: "유희스카 &#60;니나노 판서트 유희스카&#62;",
        day: "2024-10-12 ~ 2024-10-12",
        local: "서계동 앞마당",
        region: "서울",
        start: "2024-10-12",
        end: "2024-10-12",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 30,
        img: "./img/thumb/꿈을_잇다/thumb-3666978547_0KNL6ZUf_6137d5703506ff256b28c80d663444a36946561e_355x502.png",
        cate: "꿈을 잇다",
        genre: "기타",
        tit: "연희점추리 &#60;사자놀이패 등장이요!&#62;",
        day: "2024-10-12 ~ 2024-10-12",
        local: "서계동 앞마당",
        region: "서울",
        start: "2024-10-12",
        end: "2024-10-12",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 31,
        img: "./img/thumb/꿈을_잇다/thumb-3666978547_SfnCx7dz_ea20724e6d852de2acbf283d4197ee774c084449_355x502.png",
        cate: "꿈을 잇다",
        genre: "기타",
        tit: "놀플러스 &#60;놀플레이 (NOPLAY)&#62;",
        day: "2024-10-19 ~ 2024-10-19",
        local: "서계동 앞마당",
        region: "서울",
        start: "2024-10-19",
        end: "2024-10-19",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 32,
        img: "./img/thumb/꿈을_잇다/thumb-3666978547_FHPhmg4E_bc620351b8cd9698191ffdf7973df389ce035b73_355x502.jpg",
        cate: "꿈을 잇다",
        genre: "기타",
        tit: "2024 배우 잇다 오디션 (ACA 2024)",
        day: "2024-10-25 ~ 2024-10-25",
        local: "서계동 극단터 앞마당",
        region: "서울",
        start: "2024-10-25",
        end: "2024-10-25",
        host: "문화체육관광부 · 예술경영지원센터 · 한국문화예술교육진흥원"
    },
    {
        id: 33,
        img: "./img/thumb/전국_주요_연계행사/thumb-3666978547_qeYDk8Nc_0ef49c213f9597f598d227549b2cb19596ed0345_355x502.jpg",
        cate: "전국 주요 연계행사",
        genre: "국악",
        tit: "[김해] 경셩유행가 - 판을 나온 소리",
        day: "2024-10-18 ~ 2024-10-18",
        local: "김해문화의 전당 누리",
        region: "경남",
        start: "2024-10-18",
        end: "2024-10-18",
        host: ""
    },
    {
        id: 34,
        img: "./img/thumb/전국_주요_연계행사/thumb-3666978547_Kc3J8rgf_caa8c694a17e0a12864bb3e05f19e3b93882223b_355x502.jpg",
        cate: "전국 주요 연계행사",
        genre: "무용",
        tit: "&#60;프로젝트 손(A LA MAIN) 감동 그대로&#62;",
        day: "2024-10-27 ~ 2024-10-27",
        local: "광화문 세종문화회관 야외공간 세뜨락",
        region: "서울",
        start: "2024-10-27",
        end: "2024-10-27",
        host: "-"
    },
    {
        id: 35,
        img: "./img/thumb/전국_주요_연계행사/thumb-3666978547_nkrdCUNh_7bf19434ac66ee633d9dd4a7b0097ae6d45714ed_355x502.png",
        cate: "전국 주요 연계행사",
        genre: "무용",
        tit: "사포의 공간탐색 프로젝트3 간이역",
        day: "2024-10-18 ~ 2024-10-19",
        local: "서도역 영상촬영장",
        region: "전북",
        start: "2024-10-18",
        end: "2024-10-19",
        host: "문화체육관광부 · 예술경영지원센터"
    },
    {
        id: 36,
        img: "./img/thumb/전국_주요_공연/1.png",
        cate: "전국 주요 공연",
        genre: "국악",
        tit: "전통 Holic",
        day: "2024-11-28 ~ 2024-11-28",
        local: "김천시문화예술회관",
        region: "경북",
        start: "2024-11-28",
        end: "2024-11-28",
        host: ""
    },
    {
        id: 37,
        img: "./img/thumb/전국_주요_공연/2.jpg",
        cate: "전국 주요 공연",
        genre: "뮤지컬",
        tit: "뮤지컬 리지",
        day: "2024-09-14 ~ 2024-12-01",
        local: "두산아트센터 연강홀",
        region: "서울",
        start: "2024-09-14",
        end: "2024-12-01",
        host: "㈜SBS · ㈜쇼노트"
    },
    {
        id: 38,
        img: "./img/thumb/전국_주요_공연/3.jpg",
        cate: "전국 주요 공연",
        genre: "클래식",
        tit: "2024 Blue House Concert 블루하우스 콘서트",
        day: "2024-10-26 ~ 2024-10-26",
        local: "청와대춘추관 2층",
        region: "서울",
        start: "2024-10-26",
        end: "2024-10-26",
        host: "청와대문화재단"
    },
    {
        id: 39,
        img: "./img/thumb/전국_주요_공연/4.jpg",
        cate: "전국 주요 공연",
        genre: "클래식",
        tit: "국립오페라단 정기공연 오페라 &#60;탄호이저&#62;",
        day: "2024-10-17 ~ 2024-10-20",
        local: "예술의전당 오페라극장",
        region: "서울",
        start: "2024-10-17",
        end: "2024-10-20",
        host: "국립오페라단 · 파이낸셜뉴스신문(주)"
    },
    {
        id: 40,
        img: "./img/thumb/전국_주요_공연/6.jpg",
        cate: "전국 주요 공연",
        genre: "클래식",
        tit: "2024 국립합창단 &#60;국제합창축제Ⅰ&#62;",
        day: "2024-10-03 ~ 2024-10-03",
        local: "예술의전당 콘서트홀",
        region: "서울",
        start: "2024-10-03",
        end: "2024-10-03",
        host: "국립합창단"
    },
    {
        id: 41,
        img: "./img/thumb/전국_주요_공연/5.jpg",
        cate: "전국 주요 공연",
        genre: "클래식",
        tit: "국립오페라 스튜디오 청년교육단원과 함께하는 오페레타&#60;박쥐&#62;",
        day: "2024-10-11 ~ 2024-10-12",
        local: "국립극장 해오름극장",
        region: "서울",
        start: "2024-10-11",
        end: "2024-10-12",
        host: "국립극장 · (재)국립오페라단"
    },
    {
        id: 42,
        img: "./img/thumb/전국_주요_공연/6.jpg",
        cate: "전국 주요 공연",
        genre: "클래식",
        tit: "2024 국립합창단 &#60;국제합창축제II&#62;",
        day: "2024-10-04 ~ 2024-10-04",
        local: "예술의전당 콘서트홀",
        region: "서울",
        start: "2024-10-04",
        end: "2024-10-04",
        host: "국립합창단"
    },
    {
        id: 43,
        img: "./img/thumb/전국_주요_공연/7.jpg",
        cate: "전국 주요 공연",
        genre: "클래식",
        tit: "뻔뻔(FUNFUN)한 클래식",
        day: "2024-10-16 ~ 2024-11-09",
        local: "한국효문화진흥원 지하1층 공연장",
        region: "대전",
        start: "2024-10-16",
        end: "2024-11-09",
        host: "한국효문화진흥원"
    },
    {
        id: 44,
        img: "./img/thumb/전국_주요_공연/8.jpg",
        cate: "전국 주요 공연",
        genre: "국악",
        tit: "재비의 국악챌린지: 당신의 선택은?",
        day: "2024-11-09 ~ 2024-11-09",
        local: "수원SK아트리움 대공연장",
        region: "경기",
        start: "2024-11-09",
        end: "2024-11-09",
        host: "수원특례시 · 수원문화재단, 수원SK아트리움, 어쿠스틱앙상블 재비"
    },
    {
        id: 44,
        img: "./img/thumb/전국_주요_공연/9.jpg",
        cate: "전국 주요 공연",
        genre: "뮤지컬",
        tit: "24세종시즌 김성녀의 뮤지컬모노드라마 &#60;벽 속의 요정&#62;",
        day: "2024-10-31 ~ 2024-11-10",
        local: "세종문화회관 S씨어터",
        region: "서울",
        start: "2024-10-31",
        end: "2024-11-10",
        host: "(재)세종문화회관 · 극단미추"
    },
    {
        id: 45,
        img: "./img/thumb/전국_주요_공연/10.jpg",
        cate: "전국 주요 공연",
        genre: "연극",
        tit: "연극 시차",
        day: "2024-10-29 ~ 2024-11-16",
        local: "두산아트센터 Space111",
        region: "서울",
        start: "2024-10-29",
        end: "2024-11-16",
        host: "두산아트센터"
    },
]

let maps = [
    {
        name: "국립극장 해오름극장",
        iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12652.43004947493!2d126.98211553955075!3d37.5525307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca301a7b0e587%3A0xa439927a45f1cbb6!2z6rWt66a96re57J6lIO2VtOyYpOumhOq3ueyepQ!5e0!3m2!1sko!2skr!4v1732889999851!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
        name: "예술의전당 자유소극장",
        iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25329.707181548263!2d126.97784237910157!3d37.479290299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca11741751e55%3A0x5a08e36b6e145f80!2z7J6Q7Jyg7IaM6re57J6l!5e0!3m2!1sko!2skr!4v1732889605310!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
        name: "청와대 헬기장 야외 가설무대",
        iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12647.049676156103!2d126.96062603955076!3d37.58421180000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3948bffdf19%3A0xf769faebf5bf840c!2z7LKt7JmA64yAIO2XrOq4sOyepQ!5e0!3m2!1sko!2skr!4v1732889975500!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
        name: "명동예술극장",
        iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12652.491895729381!2d126.94929183955077!3d37.55216640000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca38fc96186ef%3A0x146206a940b55623!2z6rWt66a96re564uoIOuqheuPmeyYiOyIoOq3ueyepQ!5e0!3m2!1sko!2skr!4v1732889935913!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
        name: "서계동 앞마당",
        iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12652.491895729381!2d126.94929183955077!3d37.55216640000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca26560e69fbb%3A0x79e6457279d7cce7!2z7ISc7Jq47Yq567OE7IucIOyaqeyCsOq1rCDshJzqs4Trj5k!5e0!3m2!1sko!2skr!4v1732889906526!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
        name: "서계동 극단터 앞마당",
        iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12652.491895729381!2d126.94929183955077!3d37.55216640000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca26560e69fbb%3A0x79e6457279d7cce7!2z7ISc7Jq47Yq567OE7IucIOyaqeyCsOq1rCDshJzqs4Trj5k!5e0!3m2!1sko!2skr!4v1732889906526!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
        name: "김해문화의 전당 누리",
        iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26067.658636332326!2d128.85715915868565!3d35.24487669106666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568c770e461a6b9%3A0x1d197848058e90bb!2z6rmA7ZW066y47ZmU7J2Y7KCE64u5!5e0!3m2!1sko!2skr!4v1732889422916!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
        name: "광화문 세종문화회관 야외공간 세뜨락",
        iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12649.03481736661!2d126.95813343955076!3d37.5725254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2eb4d3089f9%3A0xdc83747259b1898d!2z7IS47KKF66y47ZmU7ZqM6rSA!5e0!3m2!1sko!2skr!4v1732889829761!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
        name: "서도역 영상촬영장",
        iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25988.417322545138!2d127.29441047910157!3d35.49062260000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356e2bddda3c6005%3A0x50dad6530d1d307f!2z6rWsIOyEnOuPhOyXrSDsmIHsg4HstKzsmIHsnqU!5e0!3m2!1sko!2skr!4v1732889785516!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
        name: "김천시문화예술회관",
        iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25777.31417984817!2d128.05364167910156!3d36.13821329999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565989994991c91%3A0x9cfbb86bf3a11d66!2z6rmA7LKc7IucIOusuO2ZlOyYiOyIoO2ajOq0gA!5e0!3m2!1sko!2skr!4v1732889742338!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
        name: "두산아트센터 연강홀",
        iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25294.152969548875!2d126.94384617910156!3d37.584054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3214a8d69cf%3A0xac411423c2f2a404!2z65GQ7IKw7JWE7Yq47IS87YSw!5e0!3m2!1sko!2skr!4v1732889671760!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
        name: "청와대춘추관 2층",
        iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25294.152969548875!2d126.94384617910156!3d37.584054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca34b379e4f15%3A0x278396bcfa6c8c08!2z7LKt7JmA64yAIOy2mOy2lOq0gA!5e0!3m2!1sko!2skr!4v1732889634183!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
        name: "예술의전당 오페라극장",
        iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25329.707181548263!2d126.97784237910157!3d37.479290299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca11a4018d209%3A0xdf93b7c7ab38a690!2z7JiI7Iig7J2Y7KCE64u5!5e0!3m2!1sko!2skr!4v1732889545947!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
        name: "예술의전당 콘서트홀",
        iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25329.707181548263!2d126.97784237910157!3d37.479290299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca11a4018d209%3A0xdf93b7c7ab38a690!2z7JiI7Iig7J2Y7KCE64u5!5e0!3m2!1sko!2skr!4v1732889545947!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
        name: "한국효문화진흥원 지하1층 공연장",
        iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25728.790843759!2d127.34798867910158!3d36.28565120000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654e781c7168b5%3A0xd81adee53c16318!2z7ZWc6rWt7Zqo66y47ZmU7KeE7Z2l7JuQ!5e0!3m2!1sko!2skr!4v1732889529339!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
        name: "수원SK아트리움 대공연장",
        iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25387.12054302659!2d126.95146697910157!3d37.30958699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5d308d69abcb%3A0xc604c718e9952f7d!2z7IiY7JuQU0vslYTtirjrpqzsm4A!5e0!3m2!1sko!2skr!4v1732889474328!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
        name: "세종문화회관 S씨어터",
        iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12649.03481736661!2d126.95813343955076!3d37.5725254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2eb4d3089f9%3A0xdc83747259b1898d!2z7IS47KKF66y47ZmU7ZqM6rSA!5e0!3m2!1sko!2skr!4v1732889829761!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
        name: "두산아트센터 Space111",
        iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25294.152969548875!2d126.94384617910156!3d37.584054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3214a8d69cf%3A0xac411423c2f2a404!2z65GQ7IKw7JWE7Yq47IS87YSw!5e0!3m2!1sko!2skr!4v1732889671760!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },

]
function printbanner(object) {
    let banners = object.map((v) => {
        return `
        <div class="swiper-slide perform${v.id} banner" data-cate="${v.cate}"'>
            <a class="cursor_over">
                <img src="${v.img}" alt="img00${v.id}">
                    <div class="txt_box">
                        <p>
                            ${v.p}
                        </p>
                        <h3>${v.h3}</h3>
                        <i class="xi-arrow-right"></i>
                    </div>
            </a>
        </div>`
    }).join("");

    let swiper = document.querySelector(".sec03 .performance .tabArea_box .swiper .swiper-wrapper");
    swiper.innerHTML = banners;
    addSlideClickEvent();
}
printbanner(banner);

function addSlideClickEvent() {
    let slides = document.querySelectorAll(".sec03 .swiper-slide");

    slides.forEach((s) => {
        s.addEventListener("click", () => {
            let cate = s.dataset.cate;
            changetab2(cate); // cate 값으로 탭 변경
        });
    });
}

function changetab2(cate) {
    let tabs = document.querySelectorAll(".sec03 .performance .tabArea .tabArea_head .tab li");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("on");
    }

    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].dataset.id == cate) {
            tabs[i].classList.add("on")
            changeslide_performance(cate, slide);
        }
    }
}

function changetab_performance() {
    let tabs = document.querySelectorAll(".sec03 .performance .tabArea .tabArea_head .tab li")
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {

            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove("on");
            }
            if (!(tab.classList.contains("on"))) {
                tab.classList.add("on")
            }

            let tab_id = tab.dataset.id;
            if (tab_id == "전체") {
                printbanner(banner);
            }
            else {
                changeslide_performance(tab_id, slide);
            }
        })
    })
}
changetab_performance();


//slide 출력 부분
function changeslide_performance(category, object) {
    let slides = object.filter((v) => v.cate == category).map((v) => {
        return `
         <div class="swiper-slide K${v.id}">
            <a class="cursor_over">
                <img src="${v.img}" alt="slide_img${v.id}">
            </a>
            <div class="txt-box">
                <span class="category">${v.genre}</span>
                <div class="title">
                    <h3>${v.tit}</h3>
                </div>
                <p class="day">${v.day}</p>
                <p class="local">${v.local}</p>
                <a href="#" target="_blank">더보기</a>
            </div>
        </div>
        `
    }).join("");

    let swiper = document.querySelector(".sec03 .tabArea_box .swiper .swiper-wrapper");
    swiper.innerHTML = slides;
}


let swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    autoplay: {  // 자동 슬라이드 설정 , 비 활성화 시 false
        delay: 3000,   // 시간 설정
        disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },

    slidesPerView: 1.5,
    loop: true,
    spaceBetween: 30,
    breakpoints: {
        577: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1681: {
            slidesPerView: 5,
        },
    },
    observer: true,
    observeParents: true,
});
//swiper끝


function changetab_regional() {
    let tabs = document.querySelectorAll(".sec03 .regional .tabArea .tabArea_head .tab li")
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {

            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove("on");
            }
            if (!(tab.classList.contains("on"))) {
                tab.classList.add("on")
            }

            let tab_id = tab.dataset.id;
            console.log(tab_id);
            changeslide_regional(tab_id, slide)
        })
    })
}

changetab_regional();

function changeslide_regional(reg, object) {
    if (reg == "전체") {
        let slides = object.map(v => {
            return `
            <li>
                <div class="item marker_list item_${v.id}}">
                    <p class="thumb">
                        <span style="background-image: url(${v.img});"></span>
                    </p>
                    <div class="info">
                        <h4>
                            <strong class="cate">${v.genre}</strong>
                            ${v.tit}
                        </h4>
                        <hr>
                        <p class="date">${v.day}</p>
                        <p class="addr">${v.local}</p>
                        <hr>
                        <div class="more_btn">
                            <a href="#" class="more link_btn" target="_blank">
                                공식 홈페이지
                            </a>
                            <a href="#" class="more" target="_blank">
                                더보기
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            `
        }).join("");
        let ul = document.querySelector(".sec03 .program_wrap .program_list ul");
        ul.innerHTML = slides;

    }
    else {
        let slides = object.filter((v) => v.region == reg).map((v) => {
            return `
            <li>
                <div class="item marker_list item_${v.id}}">
                    <p class="thumb">
                        <span style="background-image: url(${v.img});"></span>
                    </p>
                    <div class="info">
                        <h4>
                            <strong class="cate">${v.genre}</strong>
                            ${v.tit}
                        </h4>
                        <hr>
                        <p class="date">${v.day}</p>
                        <p class="addr">${v.local}</p>
                        <hr>
                        <div class="more_btn">
                            <a href="#" class="more link_btn" target="_blank">
                                공식 홈페이지
                            </a>
                            <a href="#" class="more" target="_blank"> 
                                더보기
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            `
        }).join("");
        let ul = document.querySelector(".sec03 .program_wrap .program_list ul");
        ul.innerHTML = slides;

    }
    updateproleng();
    changemap();
}

changeslide_regional("전체", slide);

function updateproleng() {
    let leng = document.querySelectorAll(".sec03 .program_wrap .program_list ul li").length;
    let program_cnt = document.querySelector(".sec03 .program_wrap .program_list h3 #program_cnt");
    program_cnt.textContent = `(${leng})`;
}

function changemap() {
    let selected = document.querySelectorAll(".sec03 .program_wrap .program_list ul li");
    selected.forEach(item => {
        item.addEventListener("click", () => {
            let addr = item.querySelector(".item .info .addr");
            console.log(addr.textContent);
            let map = document.querySelector(".sec03 .program_wrap .program_map #map div");
            let s_map = maps.map((v) => v).filter((v) => v.name == addr.textContent);
            console.log(s_map[0].iframe)
            map.innerHTML = `${s_map[0].iframe}`;
        })
    })
}

function filterList() {
    let input = document.querySelector('.sec03 .hd_a_stx').value;
    let listItem = document.querySelectorAll("#area_html li");

    let visibleCount = 0;

    listItem.forEach(item => {
        let itemcontent = item.querySelector(".info h4");
        if (itemcontent.textContent.includes(input)) {
            item.classList.remove('hidden');
            visibleCount++;
        } else {
            item.classList.add('hidden');
        }
    });

    // Update the count
    document.getElementById('program_cnt').textContent = `(${visibleCount})`;
}

function handleKeydown(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // 기본 동작(폼 제출) 방지
        filterList(); // 필터링 함수 호출
    }
}

// 장르부분
function changetab_genre() {
    let tabs = document.querySelectorAll(".sec03 .genre .tabArea .tabArea_head .tab li")
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {

            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove("on");
            }
            if (!(tab.classList.contains("on"))) {
                tab.classList.add("on")
            }

            let tab_id = tab.dataset.id;
            if (tab_id == "전체") {
                changeslide_genre("전체", slide);
            }
            else {
                changeslide_genre(tab_id, slide);
            }
        })
    })
}
changetab_genre();

function changeslide_genre(category, object) {
    let slides;
    let wrapper = document.querySelector(".sec03 .genre .tabArea_box .swiper-wrapper");
    wrapper.style.transform = "translate3d(0px,0,0)";
    swiper.autoplay = "start";
    if (category == "전체") {
        slides = object.map((v) => {
            return `
             <div class="swiper-slide slide${v.id} active">
                <a href="#" target="_blank" class="cursor_over">
                    <img src="${v.img}" alt="img${v.img}">
                </a>
                <div class="txt-box">
                    <span class="category">${v.genre}</span>
                    <div class="title">
                        <h3>${v.tit}</h3>
                    </div>
                    <p class="day">${v.day}</p>
                    <p class="local">${v.local}</p>
                    <a href="#" target="_blank">더보기</a>
                </div>
            </div>
            `
        }).join("");
    }
    else {
        slides = object.filter((v) => v.genre == category).map((v) => {
            return `
             <div class="swiper-slide slide${v.id} active">
                <a href="#" target="_blank" class="cursor_over">
                    <img src="${v.img}" alt="">
                </a>
                <div class="txt-box">
                    <span class="category">${v.genre}</span>
                    <div class="title">
                        <h3>${v.tit}</h3>
                    </div>
                    <p class="day">${v.day}</p>
                    <p class="local">${v.local}</p>
                    <a href="#" target="_blank">더보기</a>
                </div>
            </div>
            `
        }).join("");
    }

    let swipers = document.querySelector(".sec03 .genre .tabArea_box .swiper .swiper-wrapper");
    swipers.innerHTML = slides;
}
changeslide_genre("전체", slide);


function reinitializeSwiper() {
    if (swiper) {

    }
    swiper = new Swiper(".swiper", {
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 1.5,
        spaceBetween: 30,
        breakpoints: {
            577: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1681: {
                slidesPerView: 5,
            },
        },
        observer: true,
        observeParents: true,
    });
}

function filtergenre() {
    let input = document.querySelector('.sec03 .hd_g_stx').value;
    let listItem = document.querySelectorAll(".sec03 .genre .tabArea_box .swiper-slide");
    let wrapper = document.querySelector(".sec03 .genre .tabArea_box .swiper-wrapper");

    listItem.forEach(item => {
        let itemcontentcate = item.querySelector(".txt-box .category");
        let itemcontenttitle = item.querySelector(".txt-box .title h3");
        let itemcontentlocal = item.querySelector(".txt-box .local");
        if (itemcontentcate.textContent.includes(input) || itemcontenttitle.textContent.includes(input) || itemcontentlocal.textContent.includes(input)) {
            item.classList.remove('hidden');
            item.classList.add('active');
        } else {
            item.classList.add('hidden');
            item.classList.remove('active')
        }

        wrapper.style.transform = "translate3d(0px,0,0)";
    });

    let count = 0;
    listItem.forEach(item => {
        if (item.classList.contains("active")) {
            count++;
        }
    })

    if (count == 0) {
        if (!wrapper.querySelector(".not_list")) {
            let div = document.createElement("div");
            div.textContent = "2차 공연 오픈 (9.13)일에 공개됩니다."
            div.className = "not_list";
            wrapper.appendChild(div);
        }
    } else {
        if (wrapper.querySelector(".not_list")) {
            let div = wrapper.querySelector(".not_list")
            wrapper.removeChild(div);
        }
    }

    reinitializeSwiper();
}

function searchbyname_genre_place(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // 기본 동작(폼 제출) 방지
        filtergenre(); // 필터링 함수 호출
    }
}

let swiper2 = new Swiper(".sec04 .swiper", {
    navigation: {
        nextEl: ".festival-next",
        prevEl: ".festival-prev",
    },
    slidesPerView: 1.5,
    spaceBetween: 0,
    loop: true,
    spaceBetween: 30,
    autoplay: {  // 자동 슬라이드 설정 , 비 활성화 시 false
        delay: 3000,   // 시간 설정
        disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    breakpoints: {
        577: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1681: {
            slidesPerView: 5,
        },
    },
});

// sec04 날짜 li 버튼 함수
let currentDate = new Date("2024-09-18");
const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
function formateDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function updateDates(startDate) {
    const listItem = document.querySelectorAll(".week li");
    listItem.forEach((item, index) => {
        const newDate = new Date(startDate);
        newDate.setDate(startDate.getDate() + index);

        const formattedDate = formateDate(newDate); //년-월-일
        const dayName = dayOfWeek[newDate.getDay()];//요일

        item.setAttribute("data-date", formattedDate);
        item.setAttribute("data-day", dayName);

        item.innerHTML = `
        ${formattedDate.slice(5, 7)}.${formattedDate.slice(8, 10)}<br>${dayName}
        <div class="overMonth">${formattedDate.slice(0, 7)}</div>
        `;
    });
}
document.querySelector(".sec04 .mails #prev").addEventListener("click", () => {
    currentDate.setDate(currentDate.getDate() - 16); // 16일 전으로 이동
    updateDates(currentDate);
    let selected_day = document.querySelector(".sec04 .mails .week li.on");
    slideday(selected_day.dataset.date, slide);
});

document.querySelector(".sec04 .mails #next").addEventListener("click", () => {
    currentDate.setDate(currentDate.getDate() + 16); // 16일 후로 이동
    updateDates(currentDate);
    let selected_day = document.querySelector(".sec04 .mails .week li.on");
    slideday(selected_day.dataset.date, slide);
});

let listItems = document.querySelectorAll(".week li");

// 각 <li>에 클릭 이벤트 추가
listItems.forEach(item => {
    item.addEventListener("click", () => {
        // 기존에 'on' 클래스가 있는 요소에서 제거
        document.querySelectorAll(".week li.on").forEach(li => {
            li.classList.remove("on");
        });

        // 클릭된 <li>에 'on' 클래스 추가
        item.classList.add("on");
        slideday(item.dataset.date, slide);
    });
});


function slideday(date, object) {

    let checkday = new Date(date);

    let banners = object.filter(v => {
        let s_date = new Date(v.start);
        let e_date = new Date(v.end);
        return (s_date <= checkday) && (e_date >= checkday)
    }).map((v) => {
        return `
        <div class="swiper-slide day_id${v.id}">
                <a href="#" target="_blank" class="cursor_over">
                    <div class="img">
                        <img src="${v.img}" alt="img${v.id}">
                    </div>
                </a>
            <div class="txt-box">
            <div class="tit">
                <h3>${v.tit}</h3>
            </div>
                <p class="day">${v.day}</p>
                <p class="loca">${v.local}</p>
                <a href="#" class="more cursor_over" target="_blank">더보기</a>
            </div>
        </div>`
    }).join("");

    let swiper = document.querySelector(".sec04 .swiper .swiper-wrapper");
    swiper.innerHTML = banners;
}

slideday("2024-09-18", slide);

// sec_instagram
let swiper3 = new Swiper(".sec_instagram .swiper", {
    navigation: {
        nextEl: ".instar-next",
        prevEl: ".instar-prev",
    },
    autoplay: {  // 자동 슬라이드 설정 , 비 활성화 시 false
        delay: 3000,   // 시간 설정
        disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },

    slidesPerView: 1.5,
    loop: true,
    spaceBetween: 30,
    breakpoints: {
        577: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1681: {
            slidesPerView: 5,
        },
    },

});

const imgElements = document.querySelectorAll('.sec_instagram .swiper .swiper-slide>a>.img');

imgElements.forEach(img => {
    const width = img.offsetWidth;
    img.style.height = `${width}px`;
});
AOS.refresh();

//youtube 시작
function close() {
    document.querySelector(".youtube-modal .txt .btn-close").addEventListener("click", () => {
        let show = document.querySelector(".show");
        let body = document.querySelector("body");
        body.style.overflow = "auto";
        show.style.display = "none";
    })
}

function clickyoutube() {
    let sec_youtube = document.querySelectorAll(".sec_youtube .container ul li");
    sec_youtube.forEach((list) => {
        list.addEventListener("click", () => {
            let id = list.dataset.id;
            showblock(id);
        })
    })
}
function showblock(dataid) {
    console.log(dataid);
    let show = document.querySelector(".show");
    if (dataid == 1) {
        let b = show.querySelector(".youtube-modal .txt b");
        let iframe = show.querySelector(".youtube-modal .contents iframe")
        b.textContent = "[2024 대한민국은 공연중] 전체프로그램";
        iframe.setAttribute('src', "https://www.youtube.com/embed/BRg8Xk2WRvQ?si=aLuVn54VntaRbSRZ");
        show.style.display = "block"
        let body = document.querySelector("body");
        body.style.overflow = "hidden";
        close();
    }
    else if (dataid == 2) {
        let b = show.querySelector(".youtube-modal .txt b");
        let iframe = show.querySelector(".youtube-modal .contents iframe")
        b.textContent = "전국 주요 연계행사 Teaser";
        iframe.setAttribute('src', "https://www.youtube.com/embed/329saQAExAI?si=aLuVn54VntaRbSRZ");
        show.style.display = "block"
        let body = document.querySelector("body");
        body.style.overflow = "hidden";
        close();
    } else {
        let b = show.querySelector(".youtube-modal .txt b");
        let iframe = show.querySelector(".youtube-modal .contents iframe")
        b.textContent = "예술의 전당 <또 한 번 빛나는> Teaser";
        iframe.setAttribute('src', "https://www.youtube.com/embed/2QwZgElkL-o?si=aLuVn54VntaRbSRZ");
        show.style.display = "block"
        let body = document.querySelector("body");
        body.style.overflow = "hidden";
        close();
    }
}

clickyoutube();

const dropdown = document.querySelector(".dropdown");
const button = dropdown.querySelector(".dropdown-btn");
const menu = dropdown.querySelector(".dropdown-menu");

// 드롭다운 토글
button.addEventListener("click", () => {
    dropdown.classList.toggle("showdrop"); // 클래스 추가/제거로 메뉴 보이기/숨기기
});

// 커서 스타일
function cursor() {
    document.body.style.cursor = 'none';
    document.addEventListener("mousemove", (e) => {
        // Get the mouse cursor coordinates
        const x = e.clientX;
        const y = e.clientY;
        // Move the cursor_div to the cursor coordinates
        const cursorDiv = document.getElementById("cursor_div");
        if (cursorDiv) {
            cursorDiv.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
}


// 첫 로드시 화면 크기 확인
if(window.innerWidth<767){
    document.querySelector("#cursor_div").style.display="none";
}
else
{
    cursor();
}

// 화면크기 변동 시 
window.addEventListener("resize",()=>{
    if(window.innerWidth>767){
        document.querySelector("#cursor_div").style.display="block";
        cursor();
    }else{
        document.querySelector("#cursor_div").style.display="none";
        document.body.style.cursor = 'default';
    }
})

// mouseover and mouseleave events 발동 시
document.querySelectorAll(".cursor_over").forEach(item => {
    item.addEventListener("mouseover", function() {
        document.querySelector('.inner_wrap').classList.add('on');
    });
    item.addEventListener("mouseleave", function() {
        document.querySelector('.inner_wrap').classList.remove('on');
    });
});

document.querySelectorAll(".cursor_blue").forEach(item => {
    item.addEventListener("mouseover", function() {
        document.querySelector('.inner_wrap').classList.add('blue');
    });
    item.addEventListener("mouseleave", function() {
        document.querySelector('.inner_wrap').classList.remove('blue');
    });
});

document.querySelectorAll("#map").forEach(item => {
    item.addEventListener("mouseover", function() {
        document.querySelector('.inner_wrap').style.display = 'none';
    });
    item.addEventListener("mouseleave", function() {
        document.querySelector('.inner_wrap').style.display = 'block';
    });
});

document.querySelectorAll(".sec02 .container .v_box .inner").forEach(item => {
    item.addEventListener("mouseover", function() {
        document.querySelector('.inner_wrap').style.display = 'none';
    });
    item.addEventListener("mouseleave", function() {
        document.querySelector('.inner_wrap').style.display = 'block';
    });
});
