$(document).ready(() => {
  
  $('.item').click((e) => {
    $(e.currentTarget).addClass('bg-[#ea4c89]');
    $(e.currentTarget).addClass('shadow-pink-500');
    $(e.currentTarget).siblings().removeClass('bg-[#ea4c89]');
    $(e.currentTarget).siblings().removeClass('shadow-pink-500');
  });
  
  $('.copy-link').click((e) => {
    // Change button text to indicate it's copied
    $(e.currentTarget).text('Copied!');
    
    // Create a hidden input field
    let $tempInput = $("<input>");
    $("body").append($tempInput);
    
    // Set input value to the text you want to copy
    $tempInput.val($(e.currentTarget).siblings('p').text()).select();
    
    // Execute copy command
    document.execCommand("copy");
    
    // Remove the temporary input
    $tempInput.remove();
  });
  
});
