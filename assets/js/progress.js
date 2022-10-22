let last = 0;

const getProgress = () => Math.ceil((window.visualViewport.pageTop / (document.getElementById('main').offsetHeight - window.visualViewport.height)) * 100);

const createProgress = () => {
  let p = document.createElement('div');
  p.setAttribute('id', 'post-progress');
  p.style.width = getProgress() + '%';
  return p;
}

const viewportHandler = () => {
  let curr = getProgress();
  if (curr % 5 == 0 && curr != last) {
    progress.style.width = Math.min(getProgress(), 100) + '%';
    last = curr;
  }
}

let progress = createProgress();
document.getElementById('header').appendChild(progress);

window.addEventListener('scroll', viewportHandler);
