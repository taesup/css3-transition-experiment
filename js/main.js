
$(document).ready(function() {
  setInterval(change, 1500);
  setInterval(vertChange, 1500);
  setInterval(diagChange, 1500);
});

function change() {
  if ($('#model').hasClass('change')) {
    $('#model').removeClass('change');
  }
  else {
    $('#model').addClass('change');
  }
}

function vertChange() {
  if ($('#vertModel').hasClass('vertChange')) {
    $('#vertModel').removeClass('vertChange');
  }
  else {
    $('#vertModel').addClass('vertChange');
  }
}

function diagChange() {
  if ($('#diagModel').hasClass('diagChange')) {
    $('#diagModel').removeClass('diagChange');
  }
  else {
    $('#diagModel').addClass('diagChange');
  }
}