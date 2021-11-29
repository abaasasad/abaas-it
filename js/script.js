var mainImge = document.getElementById("mainImge")
var smallImge = document.getElementsByClassName("small-img")

smallImge[0].onclick = function(){
  mainImge.src = smallImge[0].src;
}
smallImge[1].onclick = function(){
  mainImge.src = smallImge[1].src;
}
smallImge[2].onclick = function(){
  mainImge.src = smallImge[2].src;
}
smallImge[3].onclick = function(){
  mainImge.src = smallImge[3].src;
}

var noti = document.querySelector('h4');
	var select = document.querySelector('.select');
	var button = document.getElementsByTagName('button');
	for(var but of button){
		but.addEventListener('click', (e)=>{
			var add = Number(noti.getAttribute('data-count') || 0);
			noti.setAttribute('data-count', add +1);
			noti.classList.add('zero')

			// image --animation to cart ---//
			var image = e.target.parentNode.querySelector('img');
			var span = e.target.parentNode.querySelector('span');
			var s_image = image.cloneNode(false);
			span.appendChild(s_image);
			span.classList.add("active");
			setTimeout(()=>{
				span.classList.remove("active");
				span.removeChild(s_image);
			}, 500); 
			

			// copy and paste //
			var parent = e.target.parentNode;
			var clone = parent.cloneNode(true);
			select.appendChild(clone);
			clone.lastElementChild.innerText = "Buy-now";
			
			if (clone) {
				noti.onclick = ()=>{
					select.classList.toggle('display');
				}	
			}
		})
	}
desing

$("#click").click(function() {
   confirm("Thank you for your time! Your details have been submitted!");
});

// login

$("#login").click(function() {
   alert("welcome your profile!");
});

// signup

$("#signup").click(function() {
   alert("thank your Account is created");
});
