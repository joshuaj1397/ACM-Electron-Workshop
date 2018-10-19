$(document).ready(function() {
  let display = $("#display")[0]

  // Build an expression
  $(".expr").click(function(e) {
    display.innerHTML += e.currentTarget.value
  })

  // Delete some numbers
  $("#del").click(function() {
    display.innerHTML = display.innerHTML.substr(0, display.innerHTML.length-2)
  })

  // Clear all content in display
  $("#del").dblclick(function() {
    display.innerHTML = ""
  })

  // Evaluate an expression
  $("#calc").click(function() {
    try {
      display.innerHTML = eval(display.innerHTML)
    } catch (e) {
      setTimeout(function () {
        display.innerHTML = e
      }, 3*1000);
    }
  })
})
