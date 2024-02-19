var i = 0;
var vanBan = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar dolor ut imperdiet congue. Nunc vel eleifend ipsum. Praesent in facilisis leo';
var tocDo = 50;
function typeWriter() {
   if (i < vanBan.length) {
     document.getElementById("hieu_ung_danh_chu").innerHTML += vanBan.charAt(i);
     i++;
     setTimeout(typeWriter, tocDo );
   }
 }