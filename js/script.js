//slider
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");
let slider = document.querySelectorAll("#slider");
var sliderIndex = 0;

nextBtn.onclick = () => {
  sliderIndex++;
  if (sliderIndex >= slider.length) {
    sliderIndex = 0;
  }

  let activeSlide = document.querySelector("#slider.active");
  if (activeSlide) {
    activeSlide.classList.remove("active");
  }
  slider[sliderIndex].classList.add("active");
};

//next
prevBtn.onclick = () => {
  if (sliderIndex <= 0) {
    sliderIndex = slider.length;
  }
  sliderIndex--;

  let activeSlide = document.querySelector("#slider.active");
  if (activeSlide) {
    activeSlide.classList.remove("active");
  }
  slider[sliderIndex].classList.add("active");
};

//slider2
let prevBtn2 = document.querySelector("#prev2");
let nextBtn2 = document.querySelector("#next2");
let slider2 = document.querySelectorAll("#slider2");
var sliderIndex2 = 0;

nextBtn2.onclick = () => {
  sliderIndex2++;
  if (sliderIndex2 >= slider2.length) {
    sliderIndex2 = 0;
  }

  let activeSlide2 = document.querySelector("#slider2.active");
  if (activeSlide2) {
    activeSlide2.classList.remove("active");
  }
  slider2[sliderIndex2].classList.add("active");
};

//next
prevBtn2.onclick = () => {
  if (sliderIndex2 <= 0) {
    sliderIndex2 = slider2.length;
  }
  sliderIndex2--;

  let activeSlide2 = document.querySelector("#slider2.active");
  if (activeSlide2) {
    activeSlide2.classList.remove("active");
  }
  slider2[sliderIndex2].classList.add("active");
};

//custom select box
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML =
    `<img class="img-r" src="img/svg-icon/sort-two.svg"/> ` +
    selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
        and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

//seaech function
// let search = document.querySelector(".search");
let search_form = document.querySelector(".search-frm");
let search_field = document.querySelector(".search-field");
let search_btn_top = document.querySelector(".search-btn-top");
let search_close = document.querySelector(".search-close");

search_btn_top.onclick = () => {
  search_form.classList.add("active");
  search_field.classList.add("active");
  search_btn_top.classList.add("active");
  search_close.classList.add("active");
};
search_close.onclick = () => {
  search_field.classList.remove("active");
  search_btn_top.classList.remove("active");
  search_close.classList.remove("active");
  search_form.classList.remove("active");
};

//tap to top btn
const tap_top_btn = document.querySelector(".tap-toTop");

window.onscroll = function () {
  let posHight = document.documentElement.scrollHeight;
  let pos = window.scrollY;

  if (pos > posHight - 2500) {
    tap_top_btn.classList.add("active");
  } else {
    tap_top_btn.classList.remove("active");
  }
};

tap_top_btn.onclick = function () {
  document.documentElement.scrollTop = 0;
};

// onscroll animation
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.15)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      //hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
