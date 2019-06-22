const banner = document.querySelector('.banner');
const headline = document.querySelector('.headline');
const toggleList = document.getElementById('toggleList');
const container2 = document.querySelector('.container2');

banner.addEventListener('click', () => {
  if(headline.textContent == 'Night LIFE') {
    headline.textContent = 'Have a Good Time'
  } else {
    headline.textContent = 'Night LIFE'
  }
});

toggleList.addEventListener('click', () => {
  if (container2.style.display == 'none') {
    toggleList.textContent = 'Hide More Selection';
    container2.style.display = 'grid';
  } else {
    toggleList.textContent = 'More Selection';
    container2.style.display = 'none';
  }
});

const openSlideMenu = () => {
  document.getElementById('side-menu').style.width = '15em';
};
const closeSlideMenu = () => {
  document.getElementById('side-menu').style.width = '0';
}