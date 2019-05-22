var cardContainer = $('.card-container');

$('.summer-opp-btn').on("click", appendNewOpportunity);

function appendNewOpportunity() {
  cardContainer.append(`
    <div>
      <p class="new-opp-card">AI4ALL
        <i class="fa fa-heart" style="font-size:20px;color:black;"></i>
        <button>Remove</button>
      </p>
    </div>
    `)
}
