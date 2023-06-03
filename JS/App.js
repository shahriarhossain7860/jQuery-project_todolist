$(document).ready(function() {
    // Handle form submission
    $('#todoForm').submit(function(e) {
      e.preventDefault(); // Prevent page refresh
  
      // Get the input value
      var inputValue = $('#todoInput').val();
  
      if (inputValue !== '') {
        // Create a new list item
        var listItem = $('<li class="list-group-item"></li>').text(inputValue);
  
        // Create a delete button
        var deleteButton = $('<button class="btn btn-danger btn-sm float-right">Delete</button>');
  
        // Add click event to delete button
        deleteButton.click(function() {
          $(this).parent().remove();
        });
  
        // Append delete button to list item
        listItem.append(deleteButton);
  
        // Append list item to todo list
        $('#todoList').append(listItem);
  
        // Clear input value
        $('#todoInput').val('');
      }
    });
  });
  