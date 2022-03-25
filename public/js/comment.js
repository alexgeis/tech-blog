const commentHandler = async function (event) {
  event.preventDefault();

  const postId = document.querySelector('input[name="post-id"]').value;
  const comment = document.querySelector('textarea[name="comment-body"]').value;

  if (comment) {
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        postId,
        comment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    document.location.reload();
  }
};

document
  .querySelector("#new-comment-form")
  .addEventListener("submit", commentHandler);
