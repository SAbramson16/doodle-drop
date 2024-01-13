document.addEventListener('DOMContentLoaded', function () {
    const commentContent = document.getElementById('commentContent');
    const postCommentBtn = document.getElementById('postCommentBtn');
    const deleteCommentBtns = document.querySelectorAll('.delete-comment-btn');
  
    // Function to fetch comments and render on the page
    function fetchAndRenderComments() {
      fetch('/api/comments')
        .then(response => response.json())
        .then(comments => {
          const commentsContainer = document.getElementById('postedComments');
          commentsContainer.innerHTML = comments.map((comment, index) => `
            <div class="comment">
              ${comment}
              <button class="delete-comment-btn" data-index="${index}">Delete</button>
            </div>
          `).join('');
        });
    }
  
    // Fetch and render comments on page load
    fetchAndRenderComments();
  
    // Post a new comment
    postCommentBtn.addEventListener('click', function () {
      const content = commentContent.value;
      fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment: content }),
      })
      .then(() => {
        commentContent.value = '';
        fetchAndRenderComments();
      });
    });
  
    // Delete comment
    document.addEventListener('click', function (event) {
      if (event.target.classList.contains('delete-comment-btn')) {
        const index = event.target.getAttribute('data-index');
        fetch(`/api/comments/${index}`, {
          method: 'DELETE',
        })
        .then(() => fetchAndRenderComments());
      }
    });
  });
  