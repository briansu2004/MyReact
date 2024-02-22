document.addEventListener('DOMContentLoaded', function () {
  var longContent = '';
  for (var i = 0; i < 100; i++) {
    longContent += '<p>This is a long line of text. </p>';
  }
  document.getElementById('dynamicContent').innerHTML = longContent;

  var scrollButton = document.getElementById('scrollButton');
  var dynamicContent = document.getElementById('dynamicContent');

  dynamicContent.addEventListener('scroll', function () {
    if (
      dynamicContent.scrollHeight - dynamicContent.scrollTop ===
      dynamicContent.clientHeight
    ) {
      scrollButton.disabled = false;
    } else {
      scrollButton.disabled = true;
    }
  });

  scrollButton.addEventListener('click', function () {
    dynamicContent.scrollTop = dynamicContent.scrollHeight;
    scrollButton.disabled = true;
  });
});
