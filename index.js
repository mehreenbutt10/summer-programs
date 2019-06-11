var summerbutton = $('.summer-opp-btn');
var cardContainer = $('.card-container');
var allPrograms = JSON.parse(localStorage.getItem('programs')) || [];

function appendAllPrograms() {

  allPrograms.forEach(function(program){
    cardContainer.append(`
      <div class="row">
        <p class="new-opp-card">${program}
          <i class="material-icons">favorite</i>
          <button class="complete">Complete</button>
          <span class="priority"></span>
        </p>
      </div>
      `);
  })
}
appendAllPrograms();

summerbutton.on("click", appendNewOpportunity);

function appendNewOpportunity() {
  var program = $(this).attr('id');

  cardContainer.append(`
    <div class="row">
      <p class="new-opp-card">${program}
        <i class="material-icons">favorite</i>
        <button class="complete">Complete</button>
        <span class="priority"></span>
      </p>
    </div>
    `);
    setStorage(program);
}
deadline();

function setStorage(program) {
  allPrograms.push(program);
  var programString = JSON.stringify(allPrograms);
  localStorage.setItem('programs', programString);
}

cardContainer.on("click", ".complete", completedApp)

// var completed = $('.delete');
// var urgent = $('.priority');
function completedApp(event) {
  var programToDelete = event.target.parentNode.children[0].textContent;
  var indexToDelete = allPrograms.indexOf(programToDelete);
  allPrograms.splice(indexToDelete, 1);
  var programString = JSON.stringify(allPrograms);
  localStorage.setItem('programs', programString);

  event.target.parentNode.remove()
}

function timer() {
  var deadline = new Date("10 July 2019 12:00:00 GMT");
  deadline = (Date.parse(deadline) / 1000);

  var today = new Date();
  today = (Date.parse(today) / 1000);

  var timeLeft = deadline - today;
  var days = Math.floor(timeLeft / 86400);

  var daysLeft = $(this).attr('.')
  $(".priority").html(days + " days");


}

function deadline() {
  setInterval(function(){
    timer();
  }, 1000);
}
