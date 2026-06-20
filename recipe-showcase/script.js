const trailer = document.getElementById("mouse-trailer");
const trailerIcon = document.getElementById("trailer-icon");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetWidth / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 3 : 1})`,
  };

  trailer.animate(keyframes, { duration: 800, fill: "forwards" });
};
window.onmousemove = (e) => {
  const interactable = e.target.closest(".image");
  interacting = interactable !== null;

  animateTrailer(e, interacting);

  if (interacting) {
    trailerIcon.className = "nf nf-md-arrow_top_right";
  } else {
    trailerIcon.className = "";
  }
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((el) => {
    if (el.isIntersecting) {
      el.target.classList.add("show");
    } else {
      el.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((entries) => {
  observer.observe(entries);
});

const interactableElements = document.querySelectorAll(".image");
interactableElements.forEach((element) => {
  element.addEventListener("click", () => {
    if (document.getElementsByClassName("moveup").length == 0) {
      hiddenElements.forEach((entries) => {
        if (entries !== element) {
          entries.classList.add("moveup");
        }
      });
    } else {
      hiddenElements.forEach((entries) => {
        if (entries !== element) {
          entries.classList.remove("moveup");
        }
      });
    }

    document.getElementById("details-box").classList.toggle("shift");

    const dish1 = document.getElementById("dish1").getBoundingClientRect();
    const currentTranslated = document.querySelector(".image.translated");

    if (currentTranslated && currentTranslated !== element) {
      currentTranslated.style.transform = "translate(0px, 0px)";
      currentTranslated.classList.remove("translated");
    }

    if (element.classList.contains("translated")) {
      element.style.transform = "translate(0px, 0px)";
      element.classList.remove("translated");
    } else {
      const imageRect = element.getBoundingClientRect();
      const offsetX = dish1.left - imageRect.left;
      const offsetY = dish1.top - imageRect.top;

      console.log("Offset X:", offsetX, "Offset Y:", offsetY);
      element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      element.classList.add("translated");
    }

    const dish1Ingredients = new Array(
      "150g fresh beef tenderloin",
      "250 ml baby arugula or watercress",
      "60ml shaved parmigiano-reggiano cheese",
      "salt and pepper",
      "1/8 teaspoon garlic (finely chopped)",
      "1 teaspoon mustard",
      "1 egg yolk",
      "1 pinch of sugar",
      "1 teaspoon of red whine vinegar",
      "2 tablespoons vegetable oil",
      "2 tablespoons olive oil",
      "1/2 teaspoon dried tarragon",
    );
    const dish2Ingredients = new Array(
      "4 cups water",
      "2 cups white rice",
      "2/3 cup soy sauce",
      "1/4 cup brown sugar",
      "1 tablespoon cornstarch",
      "1 tablespoon minced fresh ginger",
      "1 tablespoon minced garlic",
      "1/4 teaspoon red pepper flakes",
      "3 skinless, boneless chicken breast halves, thinly sliced",
      "2 tablespoons sesame oil, divided",
      "1 cup bamboo shoot & sun sprout",
      "1 onion, cut into large chunks",
      "1 cup sliced carrots",
      "1 can sliced water chestnuts, drained",
      "1 green bell perpper",
    );
    const dish3Ingredients = new Array(
      "1 tabespoons olive oil",
      "1 large boneless chicken breast",
      "salt/pepper",
      "2 tablespoons flour",
      "120g dry white  wine",
      "3 tablespoons butter",
      "3 cloves garlic",
      "2 tablespoons flour",
      "117.5g chicken broth",
      "242g half and half",
      "50g parmesan cheese",
      "1/2lb angel hair pasta",
      "parsley",
    );

    const dish1Recipe = new Array(
      "Place the tenderloin in the freezer, tightly wrapped, until partially frozen, about 2 hours",
      "In a bowl, whisk together the garlic, mustard, egg yolk, sugar and vinegar",
      "With a sharp chef's knife, cut the meat into thin slices",
      "Arrange the slices in a circle around the perimeter of a large cold plate",
      "Place the arugula in the center. Drizzle the meat and arugula with the dressing and sprinkle with cheese. Season with salt and pepper",
    );

    const dish2Recipe = new Array(
      "Bring water and rice to a boil in a saucepan over high heat. Reduce heat to medium-low, cover, and simmer until rice is tender, and liquid has been absorbed, 20 to 25 minutes.",
      "Meanwhile, combine soy sauce, brown sugar, and cornstarch in a medium glass or ceramic bowl; stir until smooth. Stir in ginger, garlic, and red pepper flakes; add chicken and stir to coat. Cover and marinate in the refrigerator for at least 15 minutes.",
      "Heat 1 tablespoon sesame oil in a wok or large skillet over medium-high heat. Add broccoli, onion, carrots, water chestnuts, and bell pepper; cook and stir until just tender, about 5 minutes. Transfer vegetables into a dish; set aside.",
      "Heat remaining 1 tablespoon sesame oil in the same wok or skillet over medium-high heat. Add chicken, reserving marinade, and cook until just browned, about 2 minutes per side; stir in vegetables and reserved marinade. Bring to a boil; cook and stir until chicken is no longer pink in the center and vegetables are tender, 5 to 7 minutes. Serve over rice.",
    );

    const dish3Recipe = new Array(
      "Slice the chicken in hald lengthwise. Pat each side dry. Season with salt/pepper. Sprikle each chicken slice with tbsp flour which prevents sticking.",
      "Heat olive oil to medium-high heat and cook chicken untill golden crust. Set aside and let it rest for 10 mins.",
      'Turn heat off. Add wine and set heat to medium. Clean side and bottom with clean spatula. The "font" will add more flavour to the sauce',
      "Start boiling water for pasta on the side",
      "Add the butter and garlic to the chicken and cook for 1 min. Add the flour and stir continuously for 2 mins, until the flour turn light brown, and the raw smell is cooked off.",
      "Add the chicken broth/half and half mixture in small splashes, stirring continuously.",
      "Reduce the heat and stir in the cheese. Cover partially",
      "Salt the boiling water and add the pasta. Cook no more than 4 minutes.",
      "Drain once cooked and reserve at least 1 cup of pasta water",
      "Add the pasta to the sauce and use tongs to gently toss to incorporate. Add the chicken and stir to continue.",
      "If desired, add pasta water, small splashes at a time, and gently toss until desired consistency is reached.",
      "Garnish with parsley and serve",
    );

    const ingredients = document.querySelector("#ingredients > ul");
    const recipe = document.querySelector("#recipe > ul");

    const ingredientArray = eval(`${element.id}Ingredients`);
    const recipeArray = eval(`${element.id}Recipe`);

    if (document.getElementsByClassName("shift").length !== 0) {
      for (const ingre in ingredientArray) {
        const node = document.createElement("li");
        const textnode = document.createTextNode(ingredientArray[ingre]);
        node.appendChild(textnode);
        ingredients.appendChild(node);
      }

      for (const reci in recipeArray) {
        const node = document.createElement("li");
        const textnode = document.createTextNode(recipeArray[reci]);
        node.appendChild(textnode);
        recipe.appendChild(node);
      }
    } else {
      ingredients.querySelectorAll("*").forEach((node) => {
        node.remove();
      });
      recipe.querySelectorAll("*").forEach((node) => {
        node.remove();
      });
    }
  });
});
