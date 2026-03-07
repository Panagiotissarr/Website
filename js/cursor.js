// get cursor elements
let cursor = document.getElementById("cursor");
let cursorText = document.getElementById("cursor-text");

// create them automatically if missing
if (!cursor) {
  cursor = document.createElement("div");
  cursor.id = "cursor";
  cursor.className = "rounded";
  document.body.appendChild(cursor);
}

if (!cursorText) {
  cursorText = document.createElement("div");
  cursorText.id = "cursor-text";
  document.body.appendChild(cursorText);
}

// select all links and buttons
const links = document.querySelectorAll("a, button");
const hoverables = document.querySelectorAll(".hover-state");

const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

  if (mouseX > window.innerWidth - cursorText.clientWidth) {
    cursorText.style.left = -cursorText.clientWidth + "px";
  } else {
    cursorText.style.left = "50px";
  }

  if (mouseY > window.innerHeight - cursorText.clientHeight) {
    cursorText.style.top = -cursorText.clientHeight + "px";
  } else {
    cursorText.style.top = "50px";
  }
};

function updateTitle(titleText) {
  if (titleText) {
    cursorText.style.scale = 1;

    if (
      titleText.includes(".jpg") ||
      titleText.includes(".png") ||
      titleText.includes(".jpeg")
    ) {
      cursorText.style.backgroundImage = `url(${titleText})`;
      cursorText.innerHTML = "";
      cursorText.classList.add("image-view");
    } else {
      cursorText.style.backgroundImage = "none";
      cursorText.classList.remove("image-view");
      cursorText.innerHTML = titleText;
    }
  } else {
    cursorText.style.scale = 0;
  }
}

window.addEventListener("mousemove", moveCursor);

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("blur-mini");
    cursor.classList.add("cursor-grow");
    updateTitle(link.getAttribute("data-title"));
  });

  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("blur-mini");
    cursor.classList.remove("cursor-grow");
    updateTitle("");
  });
});

hoverables.forEach((hoverable) => {
  hoverable.addEventListener("mouseenter", () => {
    cursor.style.display = "none";
    document.body.style.cursor = "pointer";
  });

  hoverables.forEach((hoverable) => {
    hoverable.addEventListener("mouseleave", () => {
      cursor.style.display = "block";
      document.body.style.cursor = "none";
    });
  });
});
