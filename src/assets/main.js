$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/woodmister1.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      addCourses(response.courses.completed);
    }
  });

  function addCourses(courses) {

  	var $badges = $('#badges');

  	courses.forEach(function(course) {

  		var $course = $('<div />', {
  			'class': 'course'
  		}).appendTo($badges);

  		$('<h3 />', {
  			text: course.title
  		}).appendTo($course);

  		$('<img />', {
  			src: course.badge
  		}).appendTo($course);

  		$('<a />', {
  			'class': 'btn btn-primary',
  			href: course.url,
  			target:'_blank',
  			text:'See Course'
  		}).appendTo($course);

  	})   	

  }

});
