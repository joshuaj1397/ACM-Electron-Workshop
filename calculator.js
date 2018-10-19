$(document).ready(function() {
  let display = $("#display")[0].innerHTML

  // Build an expression
  $(".expr").click(function(e) {
    display += e.currentTarget.value
  })

  // Delete some numbers
  $("#del").click(function() {
    display = display.substr(0, display.length-2)
  })

  // Clear all content in display
  $("#del").dblclick(function() {
    display = ""
  })

  // Evaluate an expression
  $("#calc").click(function() {
    try {
      display = eval(display)
    } catch (e) {
      setTimeout(function () {
        display = e
      }, 3*1000);
    }
  })
})
