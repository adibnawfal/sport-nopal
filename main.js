// initialize product data on first load

if (typeof Storage !== "undefined") {
  if (!sessionStorage.products) {
    const products = [
      {
        id: 1,
        title: "Nike Pegasus FlyEase",
        type: "running",
        details: "Men's Easy On/Off Road Running Shoes",
        price: 519,
        description:
          "Let the Nike Pegasus FlyEase, a balanced and energised ride for any run, foot contained, while underfoot Air adds a pop to your step as you transition from heel to toe. Nike FlyEase technology acts as a strap, helping secure the fit. Your trusted workhorse with wings is back. Time to fly.",
        color: "Bright Spruce/Valerian Blue/Peach Cream/Light Crimson",
        model: "DJ7381-300",
        src1: "./src/images/products/1/1.png",
        src2: "./src/images/products/1/2.png",
        src3: "./src/images/products/1/3.png",
        src4: "./src/images/products/1/4.png",
        src5: "./src/images/products/1/5.png",
        src6: "./src/images/products/1/6.png",
        mostPopular: true,
      },
      {
        id: 2,
        title: "Nike Phantom GT2 Elite FG",
        type: "football",
        details: "Firm-Ground Football Boot",
        price: 1079,
        description:
          "Building off the Phantom GT, the Nike Phantom GT2 Elite FG features an updated design and raised patterning to help create optimal spin to control the flight of the ball. Off-centre lacing provides a clean strike zone for skilful dribbling, passing and shooting.",
        color: "Football Grey/Light Marine/Volt/Blackened Blue",
        model: "CZ9890-054",
        src1: "./src/images/products/2/1.png",
        src2: "./src/images/products/2/2.png",
        src3: "./src/images/products/2/3.png",
        src4: "./src/images/products/2/4.png",
        src5: "./src/images/products/2/5.png",
        src6: "./src/images/products/2/6.png",
        mostPopular: false,
      },
      {
        id: 3,
        title: "Nike Blazer Low '77 Premium",
        type: "lifestyle",
        details: "Men's Shoes",
        price: 399,
        description:
          "Bring the spook factor to the scariest night of the year. With shadowy branding and ghoulish green accents, your wardrobe staple goes all out this Halloween. With its plush collar and durable design, you'll never want to take them off—don't say we didn't warn you.",
        color: "Phantom/Ghost Green/Scream Green/Phantom",
        model: "DQ7671-001",
        src1: "./src/images/products/3/1.png",
        src2: "./src/images/products/3/2.png",
        src3: "./src/images/products/3/3.png",
        src4: "./src/images/products/3/4.png",
        src5: "./src/images/products/3/5.png",
        src6: "./src/images/products/3/6.png",
        mostPopular: false,
      },
      {
        id: 4,
        title: "Nike Pegasus Trail 3",
        type: "running",
        details: "Men's Trail-Running Shoes",
        price: 545,
        description:
          "Find your wings with an off-road run. The Nike Pegasus Trail 3 has the same comfort you love, with a design that nods to the classic Pegasus look. Nike React foam delivers responsive cushioning while tough traction helps you stay moving through rocky terrain. More support around the midfoot helps you feel secure on your journey.",
        color: "Dark Beetroot/Black/Bright Crimson/Wheat",
        model: "DA8697-600",
        src1: "./src/images/products/4/1.png",
        src2: "./src/images/products/4/2.png",
        src3: "./src/images/products/4/3.png",
        src4: "./src/images/products/4/4.png",
        src5: "./src/images/products/4/5.png",
        src6: "./src/images/products/4/6.png",
        mostPopular: true,
      },
      {
        id: 5,
        title: "Nike Blazer Mid '77 Premium",
        type: "lifestyle",
        details: "Men's Shoes",
        price: 489,
        description:
          "Styled for the '70s. Loved in the '80s. Classic in the '90s. Ready for the future. The Nike Blazer Mid gets you ready for wintertime with a cosy collar that pairs perfectly with your favourite seasonal jumper.",
        color: "Sail/Midnight Navy/Gum Medium Brown/Sail",
        model: "DQ7672-100",
        src1: "./src/images/products/5/1.png",
        src2: "./src/images/products/5/2.png",
        src3: "./src/images/products/5/3.png",
        src4: "./src/images/products/5/4.png",
        src5: "./src/images/products/5/5.png",
        src6: "./src/images/products/5/6.png",
        mostPopular: false,
      },
      {
        id: 6,
        title: "Zoom Freak 4 'Bahamas'",
        type: "basketball",
        details: "Basketball Shoes",
        price: 589,
        description:
          "Giannis is an incessant storm of stamina and skill that keeps coming at opponents for 4 quarters or more. The forward-thinking design of his latest signature shoe helps propel you down the court in a lightweight fit that moves with you. It can handle quick changes in direction on both sides of the floor, giving you side-to-side stability and multi-directional traction as you Euro step to the hoop. This special design is inspired by 1 of Giannis's favourite holiday go-to's.",
        color: "Action Grape/Summit White/Black/Pinksicle",
        model: "DO9680-500",
        src1: "./src/images/products/6/1.png",
        src2: "./src/images/products/6/2.png",
        src3: "./src/images/products/6/3.png",
        src4: "./src/images/products/6/4.png",
        src5: "./src/images/products/6/5.png",
        src6: "./src/images/products/6/6.png",
        mostPopular: true,
      },
      {
        id: 7,
        title: "Nike React Infinity Run Flyknit 3",
        type: "running",
        details: "Men's Road Running Shoes",
        price: 639,
        description:
          "Still our most tested shoe, made to help you stay after those lofty running goals. The Nike React Infinity Run 3 feels soft and stable, providing a smooth ride that will carry you through routes—both long and short. A breathable upper is made to feel contained, yet flexible. We even added more cushioning around the heel and ankle for a supportive sensation. Keep running, we've got you.",
        color: "Obsidian/White/Light Crimson/Bright Spruce",
        model: "DH5392-401",
        src1: "./src/images/products/7/1.png",
        src2: "./src/images/products/7/2.png",
        src3: "./src/images/products/7/3.png",
        src4: "./src/images/products/7/4.png",
        src5: "./src/images/products/7/5.png",
        src6: "./src/images/products/7/6.png",
        mostPopular: false,
      },
      {
        id: 8,
        title: "Air Jordan 5 Retro Low PSG",
        type: "lifestyle",
        details: "Men's Shoes",
        price: 889,
        description:
          "Jordan and Paris Saint-Germain come together again, this time with an update to the AJ5. This low-top pair looks fresh while featuring the best elements from the original, like lace toggles, rich leather and the iconic WWII Mustang fighter plane-inspired graphic. The stamped PSG logo on the heel subtly reps your favourite club.",
        color: "Pumice/Black/Plum Eclipse/Game Royal",
        model: "DX6325-204",
        src1: "./src/images/products/8/1.png",
        src2: "./src/images/products/8/2.png",
        src3: "./src/images/products/8/3.png",
        src4: "./src/images/products/8/4.png",
        src5: "./src/images/products/8/5.png",
        src6: "./src/images/products/8/6.png",
        mostPopular: true,
      },
      {
        id: 9,
        title: "Nike Zoom Mercurial Superfly 9",
        type: "football",
        details: "Firm-Ground Football Boot",
        price: 1209,
        description:
          "Kylian Mbappé's explosiveness, plus his twitchy change of direction, puts him firmly in the world class of finishers. With nods to his heritage, this boot is made to help you play just like KM—with blinding pace and purpose. We added a Zoom Air unit, made specifically for football, and grippy texture up top for exceptional touch, so you can dominate in the waning minutes of a match—when it matters most.",
        color: "Dark Beetroot/University Blue/Vivid Purple/Metallic",
        model: "DO9342-694",
        src1: "./src/images/products/9/1.png",
        src2: "./src/images/products/9/2.png",
        src3: "./src/images/products/9/3.png",
        src4: "./src/images/products/9/4.png",
        src5: "./src/images/products/9/5.png",
        src6: "./src/images/products/9/6.png",
        mostPopular: false,
      },
      {
        id: 10,
        title: "Nike MC Trainer 2",
        type: "trainingngym",
        details: "Men's Training Shoes",
        price: 279,
        description:
          "The Nike MC Trainer 2 can help you shift from circuit training in the weight room to the Astroturf for quick-twitch conditioning, seamlessly. It's a multi-purpose power that combines versatility, stability and longevity, so you can stay locked in on the physical task at hand. From back squats to sprint repeats, it can help support the rigours of your diverse training programme without having to make a pit stop to grab more gear for your workout.",
        color: "Armoury Navy/Cerulean/White/Barely Green",
        model: "DO9342-694",
        src1: "./src/images/products/10/1.png",
        src2: "./src/images/products/10/2.png",
        src3: "./src/images/products/10/3.png",
        src4: "./src/images/products/10/4.png",
        src5: "./src/images/products/10/5.png",
        src6: "./src/images/products/10/6.png",
        mostPopular: false,
      },
      {
        id: 11,
        title: "KD15 EP",
        type: "basketball",
        details: "Basketball Shoes",
        price: 709,
        description:
          "Kevin Durant thrives on big games. When the stakes are high, he'll play every minute if it means getting a crucial victory. The KD15 is ready to go the distance. Lighter than his previous signature shoe, it helps you stay bouncy and comfortable at crunch time. The ride is as smooth as KD's pull-up jumper and the cushioning is as plush as his right-to-left crossover in traffic, so that you can feel contained when your team needs you the most. This version is made for outdoor court use with its extra-durable rubber outsole.",
        color: "Multi-Colour/Multi-Colour",
        model: "DO9827-900",
        src1: "./src/images/products/11/1.png",
        src2: "./src/images/products/11/2.png",
        src3: "./src/images/products/11/3.png",
        src4: "./src/images/products/11/4.png",
        src5: "./src/images/products/11/5.png",
        src6: "./src/images/products/11/6.png",
        mostPopular: false,
      },
      {
        id: 12,
        title: "Nike Metcon 8 FlyEase",
        type: "trainingngym",
        details: "Men's Easy On/Off Training Shoes",
        price: 579,
        description:
          "You chase the clock, challenging and encouraging each other all in the name of achieving goals and making gains. Our go-to model for training relies on a lighter, more breathable upper than our previous edition to complement our standards of durability and comfort, so that you can float through your cardio, power through your lifts and dominate your workouts. This version has a collapsible heel that lets you step in without using your hands; then it snaps back up to secure your foot.",
        color: "Mint Foam/Volt/Ghost Green/Cave Purple",
        model: "DO9388-300",
        src1: "./src/images/products/12/1.png",
        src2: "./src/images/products/12/2.png",
        src3: "./src/images/products/12/3.png",
        src4: "./src/images/products/12/4.png",
        src5: "./src/images/products/12/5.png",
        src6: "./src/images/products/12/6.png",
        mostPopular: false,
      },
      {
        id: 13,
        title: "Zion 2 PF",
        type: "basketball",
        details: "Men's Basketball Shoes",
        price: 519,
        description:
          "Channel new levels of speed and power in shoes designed for Zion and built for ballers at any level. An adjustable strap up top helps lock your foot in place while a firm midsole supports high-paced play. A wider outsole provides extra stability—perfect for playing on outdoor courts. And the Zion 2 has more Air cushioning than its predecessor, so you'll get into the clouds easier and land softer.",
        color: "White/Volt/Dynamic Turquoise/Black",
        model: "DM0858-107",
        src1: "./src/images/products/13/1.png",
        src2: "./src/images/products/13/2.png",
        src3: "./src/images/products/13/3.png",
        src4: "./src/images/products/13/4.png",
        src5: "./src/images/products/13/5.png",
        src6: "./src/images/products/13/6.png",
        mostPopular: false,
      },
      {
        id: 14,
        title: "Nike Free Metcon 4 AMP",
        type: "trainingngym",
        details: "Training Shoes",
        price: 529,
        description:
          'Whether you\'re rising with the roosters or squeezing in a late-night circuit session, these shoes help you stay fresh. They have an updated "chain-link" mesh that cools and flexes as you speed through agility drills, while support on the midfoot and heel helps brace you for your heaviest sets in the weight room.',
        color: "Dark Smoke Grey/Smoke Grey/Light Smoke Grey/Black",
        model: "DZ6326-001",
        src1: "./src/images/products/14/1.png",
        src2: "./src/images/products/14/2.png",
        src3: "./src/images/products/14/3.png",
        src4: "./src/images/products/14/4.png",
        src5: "./src/images/products/14/5.png",
        src6: "./src/images/products/14/6.png",
        mostPopular: false,
      },
      {
        id: 15,
        title: "Nike Phantom GT2",
        type: "football",
        details: "Firm-Ground Football Boot",
        price: 899,
        description:
          "Building off the Phantom GT, the Nike Phantom GT2 Elite FG features an updated design and raised patterning to help create optimal spin to control the flight of the ball. Off-centre lacing provides a clean strike zone for skilful dribbling, passing and shooting.",
        color: "Laser Orange/Total Orange/Bright Crimson/Black",
        model: "CZ9889-808",
        src1: "./src/images/products/15/1.png",
        src2: "./src/images/products/15/2.png",
        src3: "./src/images/products/15/3.png",
        src4: "./src/images/products/15/4.png",
        src5: "./src/images/products/15/5.png",
        src6: "./src/images/products/15/6.png",
        mostPopular: false,
      },
    ];

    sessionStorage.setItem("products", JSON.stringify(products));
  }
} else {
  alert("Sorry, your browser does not support web storage...");
}

// logic to handle data

const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const checkBox = document.getElementById("checkBox");

var emailValidate = false;
var passwordValidate = false;

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
  });
}

function checkInputs() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Looks like this is not an email");
  } else {
    emailValidate = true;
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Password must contain at least 8 characters");
  } else if (passwordValue.length > 15) {
    setErrorFor(password, "Password must not exceed 15 characters");
  } else {
    passwordValidate = true;
    setSuccessFor(password);
  }

  if (form.className === "form register") {
    if (!checkBox.checked) {
      alert("You must accept the terms and condition in order to proceed.");
    }
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function setErrorFor(input, message) {
  const formBox = input.parentNode.parentNode;
  formBox.className = "formBox error";

  const p = formBox.querySelector("p");
  p.innerText = message;
}

function setSuccessFor(input) {
  const formBox = input.parentNode.parentNode;
  formBox.className = "formBox";

  if (emailValidate === true && passwordValidate === true) {
    if (form.className === "form register") {
      alert("Successfully register.");
      window.location.href = "./login.html";
    } else {
      alert("Successfully log in.");
      window.location.href = "./index.html";
    }
  }
}

function showPass() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

function twoDecimal(num) {
  return parseFloat(Math.round(num * 100) / 100).toFixed(2);
}

function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function showProduct() {
  if (typeof Storage !== "undefined") {
    if (sessionStorage.products && sessionStorage.id) {
      const products = JSON.parse(sessionStorage.getItem("products"));
      const id = sessionStorage.id;
      const rm = "RM";
      const color = "Colour Shown: ";
      const model = "Model: ";
      sessionStorage.size = "UK 6";

      products
        .filter((find) => find.id === parseInt(id))
        .map((data) => {
          document.title = data.title;
          document.getElementById("dataTitle").innerText = data.title;
          document.getElementById("dataDetails").innerText = data.details;
          document.getElementById("dataPrice").innerText = rm.concat(
            numberWithCommas(data.price)
          );
          document.getElementById("dataDescription").innerText =
            data.description;
          document.getElementById("dataColor").innerText = color.concat(
            data.color
          );
          document.getElementById("dataModel").innerText = model.concat(
            data.model
          );
          document.getElementById("src1").src = data.src1;
          document.getElementById("src2").src = data.src2;
          document.getElementById("src3").src = data.src3;
          document.getElementById("src4").src = data.src4;
          document.getElementById("src5").src = data.src5;
          document.getElementById("src6").src = data.src6;
        });
    } else {
      alert("Sorry, cannot retrieve product data...");
    }
  } else {
    alert("Sorry, your browser does not support web storage...");
  }
}

function getId(id) {
  if (typeof Storage !== "undefined") {
    sessionStorage.id = id;
    window.location.href = "./product.html";
  } else {
    alert("Sorry, your browser does not support web storage...");
  }
}

function getProduct() {
  if (typeof Storage !== "undefined") {
    if (sessionStorage.products) {
      const products = JSON.parse(sessionStorage.getItem("products"));
      const rm = "RM";

      products.forEach((prod) => {
        const prodCard = document.createElement("button");
        const cardImg = document.createElement("img");
        const title = document.createElement("p");
        const description = document.createElement("p");
        const details = document.createElement("p");
        const price = document.createElement("p");

        prodCard.className = "prodCard";
        cardImg.className = "image";
        title.className = "title";
        description.className = "description";
        details.className = "details";
        price.className = "price";

        prodCard.appendChild(cardImg);
        prodCard.appendChild(title);
        prodCard.appendChild(description);
        prodCard.appendChild(details);
        prodCard.appendChild(price);

        prodCard.id = prod.id;
        prodCard.setAttribute("onclick", "getId(this.id)");
        cardImg.src = prod.src2;
        title.innerText = prod.title;
        description.innerText = prod.details;
        details.innerText = "Price";
        price.innerText = rm.concat(numberWithCommas(prod.price));

        document.getElementById("row").appendChild(prodCard);
      });
    } else {
      alert("Sorry, cannot retrieve product data...");
    }
  } else {
    alert("Sorry, your browser does not support web storage...");
  }
}

function getPopular() {
  if (typeof Storage !== "undefined") {
    if (sessionStorage.products) {
      const products = JSON.parse(sessionStorage.getItem("products"));
      const rm = "RM";

      products
        .filter((find) => find.mostPopular === true)
        .map((data) => {
          const card = document.createElement("button");
          const cardImg = document.createElement("img");
          const title = document.createElement("p");
          const description = document.createElement("p");
          const details = document.createElement("p");
          const price = document.createElement("p");

          card.className = "card";
          cardImg.className = "image";
          title.className = "title";
          description.className = "description";
          details.className = "details";
          price.className = "price";

          card.appendChild(cardImg);
          card.appendChild(title);
          card.appendChild(description);
          card.appendChild(details);
          card.appendChild(price);

          card.id = data.id;
          card.setAttribute("onclick", "getId(this.id)");
          cardImg.src = data.src2;
          title.innerText = data.title;
          description.innerText = data.details;
          details.innerText = "Price";
          price.innerText = rm.concat(numberWithCommas(data.price));

          document.getElementById("mostPopular").appendChild(card);
        });
    } else {
      alert("Sorry, cannot retrieve product data...");
    }
  } else {
    alert("Sorry, your browser does not support web storage...");
  }
}

function isCartProduct() {
  if (typeof Storage !== "undefined") {
    if (sessionStorage.cartProduct) {
      const cartProduct = JSON.parse(sessionStorage.getItem("cartProduct"));
      const cartLength = cartProduct.length;
      var subtotal = 0;
      var delivery = 10;
      var discount = 0;
      var totalPayment = 0;

      cartProduct.forEach((prod, index) => {
        const prodBox = document.createElement("div");
        const detailBox = document.createElement("div");
        const prodImg = document.createElement("img");
        const textBox = document.createElement("div");
        const textTopBox = document.createElement("div");
        const prodTitleBox = document.createElement("div");
        const prodTitle = document.createElement("p");
        const prodSize = document.createElement("p");
        const size = document.createElement("span");
        const prodQtyBox = document.createElement("div");
        const removeQty = document.createElement("input");
        const numQty = document.createElement("div");
        const addQty = document.createElement("input");
        const prodTotalBox = document.createElement("div");
        const prodTotalTitle = document.createElement("p");
        const prodTotal = document.createElement("p");
        const prodEditBox = document.createElement("div");
        const edit = document.createElement("button");
        const remove = document.createElement("button");
        const moveToWishlist = document.createElement("button");
        const saveForLater = document.createElement("button");
        const line = document.createElement("div");

        prodBox.className = "prodBox";
        detailBox.className = "detailBox";
        textBox.className = "textBox";
        textTopBox.className = "textTopBox";
        prodTitleBox.className = "prodTitleBox";
        prodTitle.className = "prodTitle";
        prodSize.className = "prodSize";
        size.className = "size";
        prodQtyBox.className = "prodQtyBox";
        removeQty.className = "removeQty";
        numQty.className = "numQty";
        addQty.className = "addQty";
        prodTotalBox.className = "prodTotalBox";
        prodTotalTitle.className = "prodTotalTitle";
        prodTotal.className = "prodTotal";
        prodEditBox.className = "prodEditBox";
        line.className = "line";

        prodBox.appendChild(detailBox);
        prodBox.appendChild(line);
        detailBox.appendChild(prodImg);
        detailBox.appendChild(textBox);
        textBox.appendChild(textTopBox);
        textBox.appendChild(prodEditBox);
        textTopBox.appendChild(prodTitleBox);
        textTopBox.appendChild(prodQtyBox);
        textTopBox.appendChild(prodTotalBox);
        prodTitleBox.appendChild(prodTitle);
        prodTitleBox.appendChild(prodSize);
        prodQtyBox.appendChild(removeQty);
        prodQtyBox.appendChild(numQty);
        prodQtyBox.appendChild(addQty);
        prodTotalBox.appendChild(prodTotalTitle);
        prodTotalBox.appendChild(prodTotal);
        prodEditBox.appendChild(edit);
        prodEditBox.appendChild(remove);
        prodEditBox.appendChild(moveToWishlist);
        prodEditBox.appendChild(saveForLater);

        prodImg.src = prod.src;
        prodTitle.innerText = prod.title;
        prodSize.innerText = "Size : " + prod.size;
        numQty.innerText = "1";
        prodTotalTitle.innerText = "Total";
        prodTotal.innerText = "RM" + numberWithCommas(twoDecimal(prod.price));
        edit.innerText = "Edit";
        edit.id = prod.id;
        edit.setAttribute("onclick", "getId(this.id)");
        remove.innerText = "Remove";
        remove.id = prod.index;
        remove.setAttribute("onclick", "removeProduct(this.id)");
        moveToWishlist.innerText = "Move to Wishlist";
        saveForLater.innerText = "Save for Later";
        removeQty.type = "checkbox";
        addQty.type = "checkbox";

        document.getElementById("addProduct").appendChild(prodBox);

        subtotal += prod.price;
      });

      document.getElementById("cartLength").innerText = cartLength + " Items";
      document.getElementById("subtotal").innerText =
        "RM" + numberWithCommas(twoDecimal(subtotal));
      document.getElementById("sumSubtotal").innerText =
        "RM" + numberWithCommas(twoDecimal(subtotal));

      if (cartLength >= 5) {
        delivery = 0;
        document.getElementById("deliveryCharges").innerText = "Free";
      } else {
        document.getElementById("deliveryCharges").innerText = "RM10.00";
      }

      if (cartLength >= 5 && cartLength <= 10) {
        discount = subtotal * 0.05;
        document.getElementById("discount").innerText = "Discount 5%";
      } else if (cartLength >= 10) {
        discount = subtotal * 0.15;
        document.getElementById("discount").innerText = "Discount 15%";
      }

      totalPayment = subtotal - discount + delivery;
      document.getElementById("discountPrice").innerText = "-RM" + discount;
      document.getElementById("totalPayment").innerText = numberWithCommas(
        twoDecimal(totalPayment)
      );
    }
  } else {
    alert("Sorry, your browser does not support web storage...");
  }
}

function addCartProduct() {
  if (typeof Storage !== "undefined") {
    if (sessionStorage.products && sessionStorage.id) {
      const products = JSON.parse(sessionStorage.getItem("products"));
      const id = sessionStorage.id;

      products
        .filter((find) => find.id === parseInt(id))
        .map((data) => {
          if (!sessionStorage.cartProduct) {
            const cartProduct = [
              {
                index: 0,
                id: data.id,
                title: data.title,
                src: data.src2,
                size: sessionStorage.size,
                price: data.price,
              },
            ];

            sessionStorage.setItem("cartProduct", JSON.stringify(cartProduct));
          } else {
            const cartProduct = JSON.parse(
              sessionStorage.getItem("cartProduct")
            );

            const newData = {
              index: cartProduct.length,
              id: data.id,
              title: data.title,
              src: data.src2,
              size: sessionStorage.size,
              price: data.price,
            };

            cartProduct.push(newData);
            sessionStorage.setItem("cartProduct", JSON.stringify(cartProduct));
          }
        });

      window.location.href = "./cart.html";
    } else {
      alert("Sorry, cannot retrieve product data...");
    }
  } else {
    alert("Sorry, your browser does not support web storage...");
  }
}

if (typeof Storage !== "undefined") {
  var sizeHeader = document.getElementById("size");
  if (sizeHeader) {
    var sizeDetails = sizeHeader.getElementsByClassName("details");
    for (var i = 0; i < sizeDetails.length; i++) {
      sizeDetails[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        sessionStorage.size = this.innerText;
      });
    }
  }
} else {
  alert("Sorry, your browser does not support web storage...");
}

function removeProduct(i) {
  if (typeof Storage !== "undefined") {
    if (sessionStorage.cartProduct) {
      const cartProduct = JSON.parse(sessionStorage.getItem("cartProduct"));
      const temp = [];
      var count = 0;

      cartProduct.forEach((data, index) => {
        if (index != i) {
          temp.push({
            index: count++,
            id: data.id,
            title: data.title,
            src: data.src,
            size: data.size,
            price: data.price,
          });
        }
      });

      sessionStorage.setItem("cartProduct", JSON.stringify(temp));
      console.log(JSON.parse(sessionStorage.getItem("cartProduct")));
      location.reload();
    } else {
      alert("Sorry, cannot retrieve product data...");
    }
  } else {
    alert("Sorry, your browser does not support web storage...");
  }
}
