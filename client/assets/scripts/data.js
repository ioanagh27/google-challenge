const websites = [
    "http://www.amazon.co.uk/",
    "http://github.com/",
    "http://www.youtube.com/",
    "http://www.facebook.com/",
    "http://www.triwa.com/",
    "http://unsplash.com/",
    "http://www.nationalgeographic.com",
    "http://www.w3schools.com/",
    "http://getbootstrap.com/",
    "http://css-tricks.com/"
] 

function randPage() {
    let i = Math.round(Math.random() * (websites.length-1));
    window.location.href = websites[i];
    return false;

}
