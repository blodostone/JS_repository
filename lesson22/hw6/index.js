const elem = document.querySelectorAll('.btn');

function handleClick(event) {
    console.log(event.target.textContent);
}
elem[0].addEventListener("click", handleClick);
elem[1].addEventListener("click", handleClick);