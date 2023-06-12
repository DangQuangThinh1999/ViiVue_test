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
                .map(
                  (item) =>
                    `  
                <div class="wrapper_circle" style="left:${item.styles.left};top:${item.styles.top}">
                    <div class="circle" style="height:${item.styles.height};width:${item.styles.width}">
                       <div class="content"> 
                            <h1>${item.content}</h1>
                        </div>
                    </div>
                </div>`
                )
                .join("")}
          `;
}
// Render the UI
let appText = document.querySelector("#data_text");
appText.innerHTML = dataText(data);
let appImage = document.querySelector("#data_images");
appImage.innerHTML = dataImage(circles);
