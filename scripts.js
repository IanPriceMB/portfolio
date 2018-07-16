function Project(name, path, src, arr){
    this.title = name;
    this.image = path;
    this.source = src;
    this.skills = arr;
}

var wireFrame = new Project ('Basic Wireframe', 'wireframe.png', 'wireframe',  ['HTML5', 'CSS']);
var basicPortfolio = new Project ('Basic Portfolio', 'basicPortfolio.png', 'basicPortfolio', ['HTML5', 'CSS']);
var bootsPortfolio = new Project ('Basic Portfolio with Bootstrap', 'bootsPortfolio.png', 'bootstrapPortfolio', ['HTML5', 'Bootstrap']);
var hangman = new Project ('Hangman', 'hangman.png', 'hangman', ['HTML5', 'CSS', 'JavaScript']);
var monsterHunter = new Project ('Monster Hunter', 'monsterHunter.png', 'monsterHunter', ['HTML5', 'CSS', 'JavaScript', 'jQuery']);
var liri = new Project ('Liri Node App', 'liriNodeApp.png', 'liriNodeApp', ['Node.JS', 'Terminal', 'JavaScript', 'API & AJAX calls']);
var shimBros = new Project ('Shimada Bros. RPS', 'shimBros.png', 'shimBrosRPS', ['HTML5', 'CSS', 'JavaScript', 'Jquery', 'Adobe Photoshop', 'Adobe After Effects', 'Firebase', 'API & AJAX calls'])
var FFX = new Project ('Final Fantasty X Trivia', 'FFX.png', 'FFXTrivia', ['HTML5', 'CSS', 'JavaScript', 'Jquery'])

var allProjects = 
    [
        wireFrame, basicPortfolio, bootsPortfolio, hangman, monsterHunter,
        liri, shimBros, FFX
    ]

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
        $(`#mediaBody${i+1}`).append('<br><br><br>');
        $(`#mediaBody${i+1}`).append(`<a href='https://github.com/IanPriceMB/${allProjects[i].source}' target='_blank' class='webAnchor' id='projectWebAnchor${i+1}'>`);
        $(`#projectWebAnchor${i+1}`).text('Gitbug repo here');
    }

    const projectOneSkills = ['CSS', 'Media Querys'];
    $('#projects-div').prepend(`<div class='row' id='projectRowProject1'>`);
    $('projectRowProject1').prepend(`<div class='media' id='projectDivProject1'>`);
    $(`projectDivProject1`).append(`<a href='https://kesimm.github.io/projectone' target='_blank' class='align-self-start mr-3' id='projectGitAnchorProject1'>`);
    $(`#projectGitAnchorProject1`).append(`<img src='pictures/JoBrew.png' alt='Joe Brew'>`);
    $(`projectRowProject1`).append(`<div class='media-body' id='mediaBodyProject1'>`);
    $(`#mediaBodyProject1`).append(`<h3 class='mt-0' id='projectTitleProject1'>`);
    $(`#projectTitleProject1`).text('JoBrew');
    $(`#mediaBodyProject1`).append(projectOneSkills.join(', '));
    $(`#mediaBodyProject1`).append('<br><br><br>');
    $(`#mediaBodyProject1`).append(`<a href='https://github.com/kesimm/projectone' target='_blank' class='webAnchor' id='projectWebAnchorProject1'>`);
    $(`#projectWebAnchorProject1`).text('Gitbug repo here');

    const projectTwoSkills = ['Full-Stack by myself', 'HTML5', 'CSS', 'JavaScript', 'Jquery', 'Canvas', 'Drag and Drop', 'Adobe Photoshop', 'Passport JS (Original Build)', 'Sequelize (Original Build)', 'MySQL (Original Build)'];
    $('#projects-div').prepend(`<div class='row' id='projectRowProject2'>`);
    $('projectRowProject2').prepend(`<div class='media' id='projectDivProject2'>`);
    $(`projectDivProject2`).append(`<a href='https://ianpricemb.github.io/overCoach/' target='_blank' class='align-self-start mr-3' id='projectGitAnchorProject2'>`);
    $(`#projectGitAnchorProject2`).append(`<img src='pictures/OverCoach.png' alt='Joe Brew'>`);
    $(`projectRowProject2`).append(`<div class='media-body' id='mediaBodyProject2'>`);
    $(`#mediaBodyProject2`).append(`<h3 class='mt-0' id='projectTitleProject2'>`);
    $(`#projectTitleProject2`).text('Over Coach');
    $(`#mediaBodyProject2`).append(projectTwoSkills.join(', '));
    $(`#mediaBodyProject2`).append('<br><br><br>');
    $(`#mediaBodyProject2`).append(`<a href='https://github.com/IanPriceMB/overCoach' target='_blank' class='webAnchor' id='projectWebAnchorProject2'>`);
    $(`#projectWebAnchorProject2`).text('Gitbug repo here');
});

