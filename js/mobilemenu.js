// 取得元素
const hamburgerMenuIcon = document.getElementById('J_hamburger_menu-icon');
const mobileNav = document.getElementById('J_mobile-nav');
const mask = document.getElementById('J_mask');
const closeBtn = document.getElementById('J_close-btn');

function showAndHide(){  // 取得元素
    // 點擊漢堡選單icon，顯示移動端選單及黑色半透明遮罩
    hamburgerMenuIcon.addEventListener('click', function(){
    // 黑色半透明遮罩改為顯示
    mask.style.display = "block";
    // 移動端選單改為顯示
    mobileNav.style.display = "block";
    });

    // 移動端選單右上角X按鈕，點擊後關閉移動端選單及黑色半透明遮罩
    closeBtn.addEventListener('click', function(){
    // 黑色半透明遮罩改為關閉
    mask.style.display = "none";
    // 移動端選單改為關閉
    mobileNav.style.display = "none"; 
    });
};

showAndHide(); 

// 選單內容點擊後展開二階選單及控制小箭頭方向
// 用事件冒泡方式實現
const mobileMenu = document.getElementById('J_mobile-menu');
mobileMenu.addEventListener('click',function(event){
    // 取得被會被點擊的目標
    const target = event.target;
    // 判斷被點擊的目標是否為含有二階選單的正確目標
    if(target.tagName === 'H3'){
    // 取得點擊正確目標後的下一個元素(下一個元素 = 二階下拉選單)
    const dropdown = target.nextElementSibling;
    
    if(dropdown.style.display === "block"){
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
    }

    const img = target.querySelector('span img');
    if(img.getAttribute('src') === "https://raw.githubusercontent.com/tina801005/FM-01-02-intro-section-with-dropdown-navigation/refs/heads/master/images/icon-arrow-down.svg"){
    img.setAttribute('src', 'https://raw.githubusercontent.com/tina801005/FM-01-02-intro-section-with-dropdown-navigation/refs/heads/master/images/icon-arrow-up.svg');
    } else { 
    img.setAttribute('src', 'https://raw.githubusercontent.com/tina801005/FM-01-02-intro-section-with-dropdown-navigation/refs/heads/master/images/icon-arrow-down.svg') ;
    }
});