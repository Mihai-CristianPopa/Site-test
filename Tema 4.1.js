function liste(arr){
    const impare = arr.filter(el => el%2==1);
    const pare   = arr.filter(el => el%2==0);
    function listToMarkDown(list){
    let markDown = list.map(el => `<li>${el}</li>`).join("");
    return `<ul>${markDown}</ul>`;
    }
    const result = `<h1>impare</h1>${listToMarkDown(impare)} <h1>pare</h1>${listToMarkDown(pare)}`;
    document.write(result);
}

liste([1, 2, 3, 4, 5, 6, 7]);
// let simpleMessage = 'lalala';
// console.log(simpleMessage);


//L4.2

function removeDuplicates(array) {
  return array.filter((el, i) => array.indexOf(el) === i);
}

function removeDuplicates2(arr) {
  let dict = arr.reduce((acc, el) => {
    acc[(el, "_" + typeof el)] = el;
    return acc;
  }, {}); // sau cu []?
  return Object.values(dict);
}
document.write(removeDuplicates([2, 3, 4, 3, 5, 3, 4]));
// document.write(removeDuplicates2([2, 3, 4, 3, 5, 3, 4]));

//L4.3

function flar(arr) {
  return arr.reduce((acc, el) => {
    if (Array.isArray(el)) {
      return [...acc, ...el];
    } else {
      return [...acc, el];
    }
  }, []);
}
document.write(flat([[1, 2], [3], [4, 5, 6]]));

// L5.1
function anotimpuri() {
  const listElements = document.getElementsByTagName("li");
  for (let i = 0; i < listElements.length; i++) {
    const [season, emoji] = listElements[i].textContent.split(" ");
    const next =
      listElements.nextElementSibling?.textContent ||
      listElements[i].parentElement.firstElementChild;
    listElements.textContent = `${emoji} Anotimpul ${i} (urmat de ${
      next?.textContent || ""
    }) `;
  }
}
setTimeout(anotimpuri, 2000);

//L5.2
function addInfo(info, ...classes) {
  const list = document.querySelectorAll("article article");
  list.forEach((article) => {
    const p = document.createElement("p");
    p.textContent = info;
    p.className = classes.join(" ");
    article.append(p);
  });
}

window.onload = () => addInfo("ceva", "cls1", "cls2");

//L5.3

//3

function changeStyle(element) {
  element.style.color = "red";
}
function search() {
  const userInput = prompt("Cuvant si nr paragraf");
  const [word, number] = userInput.split(" ");
  const paragraph = document.querySelectorAll("p")[number - 1];
  if (!paragraph || !word) {
    alert("Ai grasit.");
    return;
  }
  const text = paragraph.textContent;
  let index = text.indexOf(word);
  let aparitii = 0;
  while (index !== -1) {
    aparitii++;
    index = text.indexOf(word, index + 1);
  }
  alert(`Numarul de aparitii pentru cuvantul ${word} este ${aparitii}`);
}

function init() {
  const button = document.querySelector("button");
  const p1 = document.querySelector("p:first-of-type");
  const p2 = document.querySelector("p:nth-of-type(2)");

  button.onclick = search;
  p1.onmouseover = () => changeStyle(p2);
  p2.onmouseover = () => changeStyle(p1);
}

window.onload = init;
