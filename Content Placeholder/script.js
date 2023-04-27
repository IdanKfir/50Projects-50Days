const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_text = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=476&q=80" alt="" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML =
    ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, odit.';
  profile_img.innerHTML =
    '  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  name.innerHTML = 'John Doe';
  date.innerHTML = 'Oct 01, 2023';

  animated_bgs.forEach((bg) => bg.classList.remove('animted-bg'));
  animated_bg_text.forEach((bg) => bg.classList.remove('animted-bg-text'));
}
