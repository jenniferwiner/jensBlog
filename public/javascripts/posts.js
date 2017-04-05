$(document).ready(() => {
  $(".delete").click(() => {
    let postId = $(event.target).attr('data-id')
    $.ajax({
      url: `/posts/${postId}`,
      method: 'delete',
      success: (result) => {
        console.log('Success!')
        window.location.href = '/posts'
      },
      error: (err) => {
        console.error('Error: ', err)
      }
    });
  });

  $(".edit").click(() => {
    let postId = $(event.target).attr('data-id');
    let title = $("#editedTitle").val();
    let body = $("#editedBody").val();

    $.ajax({
      url: `/posts/${postId}`,
      type: 'put',
      data: { title, body },
      success: (result) => {
        console.log('My first update!');
        window.location.href = '/posts';
      },
      error: (err) => {
        console.log('Error: ', err);
      }
    });
  });
});
