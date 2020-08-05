const ols = document.querySelectorAll("ol");
const uls = document.querySelectorAll("ul");
const imgs = document.querySelectorAll("section#row");
const throughLine = function(event){
  const chosen = event.target;
  chosen.style.textDecoration = "line-through"
}

const vanish = function(event){
  const chosen = event.target;
  chosen.style.opacity = "0"
}

const compress = function(){
  const chosen = event.target;
  chosen.style.width = "0 px"
}

for (const li of ols){
  li.addEventListener('click',throughLine)
}

for (const li of uls){
  li.addEventListener('click',vanish)
}

for (const li of imgs){
  li.addEventListener('click',compress)
}
