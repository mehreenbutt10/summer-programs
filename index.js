var cardContainer = $('.card-container');
var summerbutton = $('.summer-opp-btn');


summerbutton.on("click", appendNewOpportunity);

function appendNewOpportunity() {

  cardContainer.append(`
    <div>
      <p class="new-opp-card">AI4ALL
        <i class="material-icons">favorite</i>
        <button class="delete">Remove</button>
        <span class="priority"></span>
      </p>
    </div>
    `);

    var completed = $('.delete');
    var urgent = $('.priority');
    completed.on("click", remove);
}

function remove () {
  event.target.parentNode.remove()
}

function timer() {
  var deadline = new Date("28 May 2019 12:00:00 GMT");
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
