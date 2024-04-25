export function showToast(message, type = 'success') {
  Toastify({
    text: message,
    duration: 2500,
    // destination: "https://github.com/apvarun/toastify-js",
    // newWindow: true,
    // close: true,
    gravity: "bottom",
    position: "right",
    stopOnFocus: true,
    style: {
      background: type === 'error' ? 'red' : 'green',
    },
    // onClick: function(){} // Callback after click
  }).showToast();
}
