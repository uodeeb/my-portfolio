$('#comments-container').comments({
    profilePictureURL: 'https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png',
    getComments: function(success, error) {
      var commentsArray = [{
        id: 1,
        created: '2015-10-01',
        content: 'Lorem ipsum dolort sit amet',
        fullname: 'Simon Powell',
        upvote_count: 2,
        user_has_upvoted: false
      }];
      success(commentsArray);
    }
  });