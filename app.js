function loadProjects() {
    $('.dark-button, .projectsLink').click(event => {
      $('.bio').hide();
      $('.projects').show();
      $('.about').hide();
    })
}

function loadAbout() {
  $('.aboutMe').click(event => {
    $('.projects').hide();
    $('.bio').hide()
    $('.about').show();
  })
}

function loadBio() {
  $('.name').click(event => {
    $('.bio').show();
    $('.aboutMe').show();
    $('.about').hide();
    $('.projects').hide();
    $('.projectsLink').show();
  })
}

loadAbout();
loadProjects();
loadBio();