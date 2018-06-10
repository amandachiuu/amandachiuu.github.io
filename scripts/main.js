function main() {
  const activeLink = document.querySelectorAll(`header ul li a[href="${location.pathname}"]`);
  activeLink[0].classList.add("active");
}

document.addEventListener('DOMContentLoaded', main);
