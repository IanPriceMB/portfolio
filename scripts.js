function Project(name, path, src, arr){
    this.title = name;
    this.image = path;
    this.source = src;
    this.skills = arr;
};

synopsis = {
   // wireFrame
   0: `My first ever project, my wireframe was based on using floats and basic CSS3 styling.`,
   // basicPortfolio
   1: `As my second project this was an extension of the idea behind the Basic Wireframe project. I used HTML5 and CSS3 skills to create a portfolio website design.`,
   // bootsPortfolio
   2: `This project was all about learning the Bootstrap library. As such, I recreated the same portfolio web design from my second project using Bootstrap.`,
   // hangman
   3: `As my fourth project this Hangman game served as my first introduction to JavaScript I also used some jQuery in the code just to practice recognizing the differences and similarities in their syntax.`,
   // monsterHunter
   4: `The challenge for this project was to learn more about jQuery and click events, as well as how to implement basic reusable functions for multiple parts of the same web page. From that challenge this game was born. I hope you like my 'monster' choices I was having some fun with them!`,
   // liri
   5: `This was my first application in Node.JS. If you don't want to download the whole github repo, there are screen shots in the README file on my github page. This application makes a few on-demand back end API calls to twitter, spotify, the OMDB API, and to a local file using ‘fs.readfile’, then displays selected information in the terminal.`,
   // shimBros
   6: `This project I went way above and beyond what I was asked to do. Instead of making a simple two player game lobby in Firebase, I wanted to be able to create infinite instances of game lobbies so that I could have as many two player games going at the same time as possible. I eventually got the infinite multiplayer functionality working just as long as two players (globally) don't share the same name. The game portion of this project is still a work in progress, as is the defensive code against name sharing.`,
   // FFX
   7: `I am extremely proud of this project. It was the first time I really felt like I got to do everything I wanted to do. I used timers, made my own (essentially) JSON object for the questions, added music - the works. If you are looking at this project and are also a Final Fantasy nut, then I challenge you to beat this game. There are 5 base levels and if you can clear all of them it summons a boss level (with ridiculous questions included).`,
   //giphy
   8: `This project is a series of  front-end API calls to the giphy API. You can click on the images to change their display states.`,
   //friendFinder
   9: `This project is an application that takes in user data and runs a some back end code to determine who the user's best friend is, and then returns the result to the front end. Full project useable only via cloning the repo.`,
   //Project 1
   p1: `This was my first group coding project. I was tasked with the styling of the website. In order to challenge myself I did the full styling by hand (without Bootstrap or Materialize) and included 11 different media query breakpoints.`,
   //Project 2
   p2: `This is one of the projects I am most proud of. I taught myself canvas, as well as how to create and implement custom event listeners with JavaScript. The premise was to create a coaching tool for the video game Overwatch where you could design strategies for all the different maps. The original build of this website included a fully functioning login system using passport js and bcrypt for password hashing, and all of the users were stored in a MySQL database with sequelize, but this was unessesary for the final build so it was removed.`,
}
const wireFrame = new Project ('Wireframe', 'wireframe.png', 'wireframe',  ['HTML5', 'CSS']);
const basicPortfolio = new Project ('Portfolio', 'basicPortfolio.png', 'basicPortfolio', ['HTML5', 'CSS']);
const bootsPortfolio = new Project ('Portfolio with Bootstrap', 'bootsPortfolio.png', 'bootstrapPortfolio', ['HTML5', 'Bootstrap']);
const hangman = new Project ('Hangman', 'hangman.png', 'hangman', ['HTML5', 'CSS', 'JavaScript', 'Bootstrap']);
const monsterHunter = new Project ('Monster Hunter', 'monsterHunter.png', 'monsterHunter', ['HTML5', 'CSS', 'JavaScript', 'jQuery']);
const liri = new Project ('Liri Node App', 'liriNodeApp.png', 'liriNodeApp', ['Node.JS', 'Terminal', 'JavaScript', 'API & AJAX calls']);
const shimBros = new Project ('Shimada Bros. RPS (Ongoing)', 'shimBros.png', 'shimBrosRPS', ['HTML5', 'CSS', 'JavaScript', 'Jquery', 'Adobe Photoshop', 'Adobe After Effects', 'Firebase', 'API & AJAX calls']);
const FFX = new Project ('Final Fantasty X Trivia', 'FFX.png', 'FFXTrivia', ['HTML5', 'CSS', 'JavaScript', 'Jquery']);
const giphy = new Project (`Giphy API Fun`, `giphy.png`, `giphyFun`, [`Front-end Ajax calls`, `Giphy API`, `CSS`, `Bootstrap`, `JavaScript`, `jQuery`])
const friendFinder =  new Project (`Friend Finder`, `friendFinder.png`, 'friendFinder', [`Bootstrap`, `JavaScript`, `jQuery`, `Express Server`, `Node JS`, `HTML and Server Routing`, `Front-end Ajax calls`, `Body parser`])

const allProjects = 
    [
        wireFrame, basicPortfolio, bootsPortfolio, hangman, monsterHunter,
        liri, shimBros, FFX, giphy, friendFinder
    ];

$(document).ready(function(){
    for (let i = 0; i < allProjects.length; i++){
        $('#projects-div').prepend(`<div class='row' id='projectRow${i+1}'>`);
        $(`#projectRow${i+1}`).prepend(`<div class='media' id='projectDiv${i+1}'>`);
        $(`#projectDiv${i+1}`).append(`<a href='https://ianpricemb.github.io/${allProjects[i].source}' target='_blank' class='align-self-start mr-3' id='projectGitAnchor${i+1}'>`);
        $(`#projectGitAnchor${i+1}`).append(`<img src='pictures/${allProjects[i].image}' alt='${allProjects[i].title}'>`);
        $(`#projectRow${i+1}`).append(`<div class='media-body' id='mediaBody${i+1}'>`);
        $(`#mediaBody${i+1}`).append(`<h3 class='mt-0' id='projectTitle${i+1}'>`);
        $(`#projectTitle${i+1}`).text(allProjects[i].title);
        $(`#mediaBody${i+1}`).append(allProjects[i].skills.join(', '));
        $(`#mediaBody${i+1}`).append('<br><br>');
        $(`#mediaBody${i+1}`).append(synopsis[i]);
        $(`#mediaBody${i+1}`).append('<br><br>');
        $(`#mediaBody${i+1}`).append(`<a href='https://github.com/IanPriceMB/${allProjects[i].source}' target='_blank' class='webAnchor' id='projectWebAnchor${i+1}'>`);
        $(`#projectWebAnchor${i+1}`).text('Github repo here');
    }

    const projectOneSkills = ['CSS', 'Media Querys'];
    $('#projects-div').prepend(`<div class='row' id='projectRowProject1'>`);
    $('#projectRowProject1').prepend(`<div class='media' id='projectDivProject1'>`);
    $(`#projectDivProject1`).append(`<a href='https://kesimm.github.io/projectone' target='_blank' class='align-self-start mr-3' id='projectGitAnchorProject1'>`);
    $(`#projectGitAnchorProject1`).append(`<img src='pictures/JoBrew.png' alt='Joe Brew'>`);
    $(`#projectRowProject1`).append(`<div class='media-body' id='mediaBodyProject1'>`);
    $(`#mediaBodyProject1`).append(`<h3 class='mt-0' id='projectTitleProject1'>`);
    $(`#projectTitleProject1`).text('JoBrew');
    $(`#mediaBodyProject1`).append(projectOneSkills.join(', ')+"<br><br>"+synopsis.p1+"<br><br><a href='https://github.com/kesimm/projectone' target='_blank' class='webAnchor' id='projectWebAnchorProject1'>");
    $(`#projectWebAnchorProject1`).text('Github repo here');

    const projectTwoSkills = ['Full-Stack by myself', 'HTML5', 'CSS', 'JavaScript', 'Jquery', 'Canvas', 'Drag and Drop', 'Adobe Photoshop', 'Passport JS (Original Build)', 'Sequelize (Original Build)', 'MySQL (Original Build)'];
    $('#projects-div').prepend(`<div class='row' id='projectRowProject2'>`);
    $('#projectRowProject2').prepend(`<div class='media' id='projectDivProject2'>`);
    $(`#projectDivProject2`).append(`<a href='https://ianpricemb.github.io/overCoach/' target='_blank' class='align-self-start mr-3' id='projectGitAnchorProject2'>`);
    $(`#projectGitAnchorProject2`).append(`<img src='pictures/OverCoach.png' alt='Joe Brew'>`);
    $(`#projectRowProject2`).append(`<div class='media-body' id='mediaBodyProject2'>`);
    $(`#mediaBodyProject2`).append(`<h3 class='mt-0' id='projectTitleProject2'>`);
    $(`#projectTitleProject2`).text('Over Coach');
    $(`#mediaBodyProject2`).append(projectTwoSkills.join(', '));
    $(`#mediaBodyProject2`).append('<br><br>'+synopsis.p2+`<br><br>`);
    $(`#mediaBodyProject2`).append(`<a href='https://github.com/IanPriceMB/overCoach' target='_blank' class='webAnchor' id='projectWebAnchorProject2'>`);
    $(`#projectWebAnchorProject2`).text('Github repo here');
});

