var modal = document.getElementById("resumeModal");

var btn = document.getElementsByClassName("resume");

var span = document.getElementsByClassName("close")[0];

var dbtn = document.getElementsByClassName("dbutton");

btn[0].onclick = function() {
  $(modal).fadeIn('300');
  modal.style.display = "block";
};

btn[1].onclick = function() {
  $(modal).fadeIn('300');
  modal.style.display = "block";
};

span.onclick = function() {
  $(modal).fadeOut('300');
};

window.onclick = function(event) {
  if (event.target == modal) {
    $(modal).fadeOut('300');
  }
};

$(document).on("click",".dbutton",function(e){
  console.log("click");
  $(modal).fadeOut('300');
});

