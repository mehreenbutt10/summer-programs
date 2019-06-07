var allPrograms = [];
var cardContainer = $('.card-container');
var summerbutton = $('.summer-opp-btn');

// JSON.parse var allPrograms = localStorage.getItem('program')|| [];
var allPrograms = JSON.parse(localStorage.getItem('programs')) || [];

function appendAllPrograms() {
  allPrograms.forEach(function(opportunity){
    cardContainer.append(`
      <div class="row">
        <div class="col s8">
        <p class="new-opp-card">${opportunity.program}
          <i class="material-icons">favorite</i></p>
          </div>
          <div class="col s4">
          <p><button class="delete">Remove</button>
          <span class="priority"></span>
        </p>
        </div>
      </div>
      `);
  })
}
appendAllPrograms();
summerbutton.on("click", appendNewOpportunity);

function appendNewOpportunity(e) {
  e.preventDefault();
  var program = $(this).attr('id');

  cardContainer.append(`
    <div class="row">
      <div class="col s8">
      <p class="new-opp-card">${program}
        <i class="material-icons">favorite</i></p>
        </div>
        <div class="col s4">
        <p><button class="delete">Remove</button>
        <span class="priority"></span>
      </p>
      </div>
    </div>
    `);
    allPrograms.push({program: program});
    // console.log(allPrograms);
    //
    var allProgramsString = JSON.stringify(allPrograms);
    localStorage.setItem('programs', allProgramsString);
    console.log(localStorage);
    // // localStorage.clear();

    var completed = $('.delete');
    var urgent = $('.priority');

}

completed.on("click", remove);
function remove(event) {
  var toDotoDelete = event.target.parentNode.children[0].textContent;
  var indexToDelete = allPrograms.indexOf(toDotoDelete);
  allPrograms.splice(indexToDelete, 1);
  var toDoString = JSON.stringify(allPrograms);
  localStorage.setItem('programs', toDoString);
  event.target.parentNode.remove()
}

function timer() {
  var deadline = new Date("13 July 2019 12:00:00 GMT");
  deadline = (Date.parse(deadline) / 1000);

  var today = new Date();
  today = (Date.parse(today) / 1000);

  var timeLeft = deadline - today;
  var days = Math.floor(timeLeft / 86400);

  $(".priority").html(days + " days");


}
setInterval(function(){
  timer();
}, 1000);
