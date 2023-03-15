// Get the current path of the HTML page
var currentPath = window.location.pathname;

// Extract the current folder from the path
var currentFolder = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);

// Determine the correct image folder based on the current folder
// If the current folder is the root directory, use 'img/'
// Otherwise, use '../img/'
var imgFolder = currentFolder === '/' ? 'img/' : '../img/';

document.write('\
    <nav class="header">\
        <a class="header" href="/">Sort of School</a>\
        <a class="header" href="/donate">Donate</a>\
    </nav>\
    <ul class="social">\
        <li class="social">\
            <a class="social" href="https://www.youtube.com/@sortofschool">\
                <img class="social" src="' + imgFolder + 'youtube_logo.png">\
                Youtube\
            </a>\
        </li>\
        <li class="social">\
            <a class="social" href="https://patreon.com/sortofschool">\
                <img class="social" src="' + imgFolder + 'pt_logo.png">\
                Patreon\
            </a>\
        </li>\
        <li class="social">\
            <a class="social" href="https://github.com/sokolov-teach">\
                <img class="social" src="' + imgFolder + 'git_logo.png">\
                Github\
            </a>\
        </li>\
        <li class="social">\
            <a class="social" href="https://www.instagram.com/sortofschool/">\
                <img class="social" src="' + imgFolder + 'ig_logo.png">\
                Instagram\
            </a>\
        </li>\
        <li class="social">\
            <a class="social" href="https://twitter.com/sortofschool">\
                <img class="social" src="' + imgFolder + 'tw_logo.png">\
                Twitter\
            </a>\
        </li>\
        <li class="social">\
            <a class="social" href="mailto: sokolov.teach@gmail.com">\
                <img class="social" src="' + imgFolder + 'email.png">\
                E-mail\
            </a>\
        </li>\
    </ul>\
    <hr>\
');

