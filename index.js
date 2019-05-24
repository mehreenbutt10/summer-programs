var cardContainer = $('.card-container');
var summerbutton = $('.summer-opp-btn');
var countDownDate = new Date("May 25, 2019 19:28:00").getTime();

summerbutton.on("click", appendNewOpportunity);

function appendNewOpportunity() {

  cardContainer.append(`
    <div>
      <p class="new-opp-card">AI4ALL
        <i class="fa fa-heart" style="font-size:20px;color:black;"></i>
        <button class="delete">Remove</button>
        <button class="priority">Priority</button>
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

var x = setInterval(function() {
  // Get today's date and time
  var today = new Date().getTime();
  // Find the distance between now and the count down date
  var timeLeft = countDownDate - today;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  // Display the result in the element with id="demo"
  document.getElementById("ai_timer").innerHTML = "Days Left: " + days;
   // If the count down is finished, write some text
  if (timeLeft < 0) {
    clearInterval(x);
    document.getElementById("ai_timer").innerHTML = "EXPIRED";
  }
}, 1000);
