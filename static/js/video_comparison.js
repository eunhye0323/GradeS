// Side-by-side video wipe slider (adapted from the Ref-NeRF / Nerfies project pages).
// Expects an MP4 whose left half is method A and right half is method B
// (i.e. the two clips concatenated horizontally), placed inside:
//   <div class="video-compare-container">
//     <video class="video" ... onplay="resizeAndPlay(this)"><source src="..."></video>
//     <canvas class="videoMerge"></canvas>
//   </div>

function playVids(videoId) {
  var video = document.getElementById(videoId);
  if (video) { resizeAndPlay(video); }
}

function resizeAndPlay(element) {
  var cv = element.parentElement.querySelector('.videoMerge');
  if (!cv) return;
  cv.width = element.videoWidth / 2;
  cv.height = element.videoHeight;
  element.play();
  element.style.height = '0px';  // hide the underlying <video>; draw on canvas instead
  drawCanvas(element, cv);
}

function trackPosition(element, evt) {
  var rect = element.getBoundingClientRect();
  var x = (evt.touches ? evt.touches[0].clientX : evt.clientX) - rect.left;
  element.dataset.position = Math.max(0, Math.min(1, x / rect.width));
}

function drawCanvas(video, canvas) {
  var mergeContext = canvas.getContext('2d');

  if (!canvas.dataset.bound) {
    canvas.dataset.bound = '1';
    canvas.dataset.position = 0.5;
    var move = function (e) { trackPosition(canvas, e); };
    canvas.addEventListener('mousemove', move);
    canvas.addEventListener('touchmove', move, { passive: true });
  }

  function step() {
    var pos = parseFloat(canvas.dataset.position || 0.5);
    var w = video.videoWidth / 2;
    var h = video.videoHeight;
    var splitX = Math.floor(w * pos);

    // left method (left half of the source)
    mergeContext.drawImage(video, 0, 0, splitX, h, 0, 0, splitX, h);
    // right method (right half of the source)
    mergeContext.drawImage(video, w + splitX, 0, w - splitX, h, splitX, 0, w - splitX, h);

    // divider line
    mergeContext.fillStyle = '#ffffff';
    mergeContext.fillRect(splitX - 1, 0, 2, h);

    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
