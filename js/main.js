// * последовательное появление блоков при скроле
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".introduction__item");
for (let elm of elements) {
  observer.observe(elm);
}
// * аккордеон
$(".options__item-header").on("click", function (e) {
  e.stopPropagation();
  if (!$(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).parent().find(".options__item-dropdown").slideUp(300);
    $(this).parent().removeClass("active");
  }
  $(this).toggleClass("active");
  $(this).parent().prev().toggleClass("active_above");
  $(this).parent().find(".options__item-dropdown").slideToggle(300);
  $(this).parent().toggleClass("active");
});

// * анимация печатной машинки
// const letters = split(animatable);
// setTimeout(() => letters.forEach((span) => (span.style.opacity = 1)), 0);

// function split(element) {
//   element.style.wordBreak = "break-word";

//   const letters = element.innerText.split("").map((letter, i) => {
//     const span = document.createElement("span");
//     span.innerHTML = letter !== " " ? letter : "&nbsp;";
//     span.style.opacity = 0;
//     span.style.transitionDelay = 0.05 * i + "s";
//     return span;
//   });

//   element.innerHTML = "";
//   element.append(...letters);
//   return letters;
// }

// * плавный скролл на якоря

$("body").on("click", '[href*="#"]', function (e) {
  var fixed_offset = 100;
  if (!$(this.hash).length) return;
  $("html,body")
    .stop()
    .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});
