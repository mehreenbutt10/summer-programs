var cardContainer = $('.card-container');
var summerbutton = $('.summer-opp-btn')
summerbutton.on("click", appendNewOpportunity);

function appendNewOpportunity() {
  
  cardContainer.append(`
    <div>
      <p class="new-opp-card">AI4ALL
        <i class="fa fa-heart" style="font-size:20px;color:black;"></i>
        <button class="delete">Remove</button>
      </p>
    </div>
    `);

    var completed = $('.delete');
    completed.on("click", remove);
}

function remove () {
  event.target.parentNode.remove()
}
