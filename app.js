const circles = [
  {
    content: "1000m<sup>2</sup>",
    styles: {
      height: "258px",
      width: "258px",
      left: "740px",
      top: "111px",
    },
  },
  {
    content: "10K+",
    styles: {
      height: "222px",
      width: "222px",
      left: "1046px",
      top: "231px",
    },
  },
  {
    content: "35+",
    styles: {
      left: "510px",
      top: "371px",
      height: "280px",
      width: "280px",
    },
  },
  {
    content: "20",
    styles: {
      height: "222px",
      width: "222px",
      left: "198px",
      top: "477px",
    },
  },
  {
    content: "400+",
    styles: {
      height: "218px",
      width: "218px",
      left: "402px",
      top: "683px",
    },
  },
];

const data = [
  {
    text: "Growth strategies to successfully transition into your target export countries ",
  },
  {
    text: "Optimization of your production organization and outsourcing your whole supply chain management",
  },
  {
    text: "Managing your set up as you solidify your foothold in Vietnam and beyond in ASEAN countries.",
  },
];
function dataText(props) {
  // If there are no wizards, show a message
  if (!props.length) {
    return `<p>Not data text</p>`;
  }

  // Otherwise, show a list
  return `
		<ul>
			${props
        .map(
          (item) =>
            `<li>          
                <span class="rectangle"></span>
                <span>${item.text}</span>     
            </li>`
        )
        .join("")}
		</ul>`;
}
function dataImage(props) {
  // If there are no wizards, show a message
  if (!props.length) {
    return `<p>Not data Image</p>`;
  }

  // Otherwise, show a list
  return `
         
              ${props
                .map((item, index) => {
                  const txt = item.content;
                  let numb = txt.match(/\d/g).join(""); // filter numbers
                  let text = "";
                  if (index === 0) {
                    text = txt
                      .split("")
                      .filter((value, index) => index > 3)
                      .join("");
                    numb = Math.floor(numb / 10);
                  }

                  text = txt.replace(numb, "");

                  console.log(numb, text);
                  return `  
                <div class="wrapper_circle" style="left:${item.styles.left};top:${item.styles.top}">
                    <div class="circle" style="height:${item.styles.height};width:${item.styles.width}">
                       <div class="content "> 
                            <h1>   
                            <span class="nbr">${numb}</span>     
                            <span>${text}</span>               
                            </h1>
                            
                        </div>
                    </div>
                </div>`;
                })
                .join("")}
          `;
}
// Render the UI
let appText = document.querySelector("#data_text");
appText.innerHTML = dataText(data);
let appImage = document.querySelector("#data_images");
appImage.innerHTML = dataImage(circles);

const textValue = document.querySelectorAll(".fancy");

textValue.forEach((text, index) => {
  const strText = text.textContent;
  const splitText = strText.split("");

  text.textContent = "";
  for (let i = 0; i < splitText.length; i++) {
    text.innerHTML +=
      `<span class=${index === 1 ? "blue" : "black"}>` +
      splitText[i] +
      "</span>";
  }

  let char = 0;
  let timer = setInterval(onTick, 15);

  function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
      complete();
      return;
    }
  }

  text.addEventListener("OnHover", onTick());
  function complete() {
    clearInterval(timer);
    timer = null;
  }
});
// -----------------------------------------------------------------

let words = document.querySelectorAll(".word");

let wordArray = []; //will store arrays of letters for each word
let currentWord = 0; //will store the index of the currently displayed word;
words[currentWord].style.opacity = 1;
const splitLetters = (word) => {
  let content = word.innerText;
  word.innerText = "";
  let letters = [];
  for (let i = 0; i < content.length; i++) {
    let letter = document.createElement("span");
    letter.className = "letter";
    letter.innerText = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  wordArray.push(letters);
};
for (let i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}
const animateLetterOut = (cw, i) => {
  setTimeout(function () {
    cw[i].className = "letter out";
  }, i * 80);
};

const animateLetterIn = (nw, i) => {
  setTimeout(function () {
    nw[i].className = "letter in";
  }, 340 + i * 80); // delay of 340, so that new letters ("design") start falling down once the first animation is completed.
};

const changeWord = () => {
  let cw = wordArray[currentWord]; // wordArray[0] gives us: [c,o,d,e]
  let nw =
    currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1]; // evals to wordArray[1] and gives us: [d,e,s,i,g,n]

  for (let i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i); // called for each letter of [c,o,d,e] with different i values, so we have a delay between each letter when they fade out.
  }

  for (let i = 0; i < nw.length; i++) {
    //for each letter inside [d,e,s,i,g,n]
    nw[i].className = "letter behind"; //we set initial position to the top
    nw[0].parentElement.style.opacity = 1; //we set the opacity to 1, but currently invisible due to overlow hidden.
    animateLetterIn(nw, i); //animates each letter as if they fall down from top.
  }
  //update currentWord index.
  currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
};
changeWord(); //initial call
setInterval(changeWord, 5000);

var speed = 10;

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr(id) {
  elt = document.querySelectorAll(id);
  elt.forEach((item) => {
    endNbr = Number(item.innerHTML);
    incNbrRec(0, endNbr, item);
  });
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
  console.log(endNbr);
  let count = endNbr >= 100 && endNbr % 100 === 0 ? 10 : 1;
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function () {
      //Delay a bit before calling the function again.
      incNbrRec(i + count, endNbr, elt);
    }, speed);
  }
}
incEltNbr(".nbr");
