import dummyApi from './dummy-api';

const submitButton = document.getElementById('submit-button');
const commentInputElm = document.getElementById('comment');
const commentListElm = document.getElementById('comment-list');

submitButton.addEventListener('click', () => {
  const comment = commentInputElm.value;
  dummyApi.postComment(comment).then(result => {
    const li = document.createElement('li');
    const postedTime = new Date().toLocaleString();
    li.innerText = `${postedTime} ${comment}`;
    commentListElm.appendChild(li);
  });
});
