document.getElementById('swap-theme-button').onclick = function() {
   var element = document.getElementById('test');

   var darkTheme = "rgb(32, 32, 32)";
   var lightTheme = "rgb(255, 255, 255)";
   var currentTheme = window.getComputedStyle(document.getElementById('test')).backgroundColor;

   if(currentTheme == darkTheme) {
      document.getElementById('test').style.backgroundColor = lightTheme;
      document.getElementById('test').style.color = "black";
      document.getElementById('swap-theme-button').innerHTML = "Dark Theme";
   } else {
      document.getElementById('test').style.backgroundColor = darkTheme;
      document.getElementById('test').style.color = "#adadad";
      document.getElementById('swap-theme-button').innerHTML = "Light Theme";
   }
}