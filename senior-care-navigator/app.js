/* ============================================
   Senior Care Navigator — Filter Logic
   ============================================ */

(function () {
  "use strict";

  var filterButtons = document.querySelectorAll(".toggle-btn");
  var listingCards = document.querySelectorAll(".listing-card");
  var filterStatus = document.getElementById("filter-status");
  var noResults = document.getElementById("no-results");

  var statusLabels = {
    all: "All Facilities",
    "non-profit": "Non-Profit Facilities Only",
    "for-profit": "For-Profit Facilities Only",
  };

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = this.getAttribute("data-filter");

      // Update active button state
      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
        btn.setAttribute("aria-checked", "false");
      });
      this.classList.add("active");
      this.setAttribute("aria-checked", "true");

      // Filter cards
      var visibleCount = 0;
      listingCards.forEach(function (card) {
        if (filter === "all" || card.getAttribute("data-type") === filter) {
          card.classList.remove("hidden");
          visibleCount++;
        } else {
          card.classList.add("hidden");
        }
      });

      // Update status text
      filterStatus.textContent = statusLabels[filter] || "All Facilities";

      // Show/hide no-results message
      noResults.hidden = visibleCount > 0;
    });
  });
})();
