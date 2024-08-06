document.addEventListener("DOMContentLoaded", () => {
     const accordionItems = document.querySelectorAll(".accordion-items");


     accordionItems.forEach((item, index) => {
          const plusIcon= item.querySelector(".plus-icon");
          const minusIcon = item.querySelector(".minus-icon");
          const accordionContent=item.querySelector(".accordion-content");

          if(index === 0){
               plusIcon.style.display = "inline";
               accordionContent.style.display = "block";
               minusIcon.style.display = "none";
          } else {
               minusIcon.style.display = "none";
               accordionContent.style.display = "none";
          }

          plusIcon.addEventListener("click", () => {
               accordionContent.style.display = "block";
               plusIcon.style.display = "none";
               minusIcon.style.display = "inline";
          });

          minusIcon.addEventListener("click", () => {
               accordionContent.style.display = "none";
               plusIcon.style.display = "inline";
               minusIcon.style.display = "none";
          });
     });


});