const openDropdownsBtn = document.getElementById("open-dropdowns");

const openAllDropdowns = () => {
  
  const dropdownEls = document.querySelectorAll('main > section > div');
  const dropdownSubEls = document.querySelectorAll(
    "main > section > div > div > div"
    );
    
  if (openDropdownsBtn.textContent == "Open Dropdowns") {
    dropdownEls.forEach((element) => {
      element.setAttribute("class", "collapse_show");
    });

    dropdownSubEls.forEach((element) => {
      element.setAttribute("class", "collapse_show");
    });

    openDropdownsBtn.textContent = "Close Dropdowns";
  } else {
    dropdownEls.forEach((element) => {
      element.setAttribute("class", "collapse");
    });

    dropdownSubEls.forEach((element) => {
      element.setAttribute("class", "collapse");
    });

    openDropdownsBtn.textContent = "Open Dropdowns";
  };
    
  // console.log(dropdownEls);
  // console.log(dropdownSubEls)
};

openDropdownsBtn.addEventListener('click', openAllDropdowns);

const scrollTopBtn = document.querySelector("#scroll-top");

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

scrollTopBtn.addEventListener("click", scrollToTop);

const closeCornerCardBtn = document.getElementById("close-corner-card");
const cornerCardListEl = document.getElementById("corner-util-card");

const closeCard = () => {
  cornerCardListEl.setAttribute('style', 'display:none');
}

closeCornerCardBtn.addEventListener('click', closeCard);