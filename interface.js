var date_string;
function formatAMPM() {
    var der = new Date();
    var DD = ("0" + der.getDate()).slice(-2);
    var MM = ("0" + (der.getMonth() + 1)).slice(-2);
    var YYYY = der.getFullYear();
    var hh = ("0" + der.getHours()).slice(-2);
    var mm = ("0" + der.getMinutes()).slice(-2);
    var ss = ("0" + der.getSeconds()).slice(-2);
    date_string = YYYY + "-" + MM + "-" + DD + " "+ hh + ":" + mm + ":" + ss;
    document.getElementById("timing").innerHTML = date_string;
    setTimeout('formatAMPM()',1000)
}
formatAMPM();
  $(function(){
		   $('#menu1').hide();
			$('#menu').on('click', function(){
				$('#sidebar').css('width','230px')
				$('#sidebar').css('display','block');
				$('#menu').hide();
				$('#menu1').show();
        })
			$('#menu1').on('click', function(){
				$('#sidebar').hide();
				$('#sidebar').css('width','0')
				$('#menu').show();
				$('#menu1').hide();
    })
}())
function start(){
$('#welcomePage').fadeOut(2000)
document.getElementById('welcomePage').style.display = "none";
setTimeout('logIn()',1000)
}
setTimeout('start()',300);
function logIn (){
    $('#mainPage').fadeIn(2000)
document.getElementById('mainPage').style.display = "";
document.getElementById('add').style.display = "";
document.getElementById('menuBar').style.display = "";
//document.getElementById('backArrow').style.display = "none";
}
//document.querySelector("#page-top > header > div.container.text-center.my-auto > h1");

// calculate page starts here ....

$(function(){
	 alle = [];
	$('#calculateButton').on('click',function(){
		$('#calculatePage').fadeIn(1000);
		$('#mainPage').css('display','none');
		$('#aboutPage').css('display','none');
		$('#calculatePage').css('display','block');
	    $('#sidebar').css('display','none');
		$('#add').css('display','none');
	})
	var ee = itemList.value;
 var c = Math.random();
    var s = Math.floor(c*1000);
    var v = 'ann'+ s;
    var aa = document.getElementsByClassName('longpressCls');
    for(var i = 0; i < aa.length;i++){
        alle.push(aa[i].value);
    }
   var  ee = itemList.value;
//	 var f = chooseIcons.innerHTML;
    dispCntedvehi.innerHTML = defaltDiv.innerHTML + `<p><div class="input-group mb-3 rounded mt-5" id=`+v+s+`><div class="input-group-prepend"><span class="input-group-text fa fa-biking p-3 fa-1x text-white longpressCls" data-long-press-delay="2000" style="background: #0F0096 !important"> `+ee+`</span></div><input type="number" class="form-control p-3 text-white allcounters" id=`+v+` value="0" readonly data-long-press-delay="2000" style="height:73px; text-align:center; font-size:40px;background:#0F0096 !important"><div class="input-group-append" id=`+v+`></div></div></p>`;
    document.getElementById('dispCntedvehi').style.display= "block";     
//	dispCntedvehi.innerHTML += `<span class="input-group-text fa fa-biking p-3 fa-1x text-white longpressCls"  data-long-press-delay="2000" style="background: #0F0096 !important"> `+`</span></div><input type="number" class="form-control p-3 text-white allcounters" value="0" readonly data-long-press-delay="2000" style="height:73px; text-align:center; font-size:40px;background:#0F0096 !important">`;
//	 var aa = document.getElementsByClassName('longpressCls');
    for(var i = 0; i < aa.length;i++){
        alle.push(aa[i].value);
    }
})

// calculate page ends here ....

// about page begins ....
$(function(){
	$('#aboutButton').on('click',function(){
		$('#aboutPage').fadeIn(1000);
		$('#mainPage').css('display','none');
		$('#aboutPage').css('display','block');
		$('#calculatePage').css('display','none');
		 $('#sidebar').hide(200);
		$('#add').css('display','none');
	})
})
// about page ends ....


// exit page starts from here.....

$(function(){
	$('#exitbutton').on('click',function(){
		$('#add,#mainPage,#welcomePage,#menuBar,#aboutPage,#calculatePage,#sidebar').css('display','none');
		$('#exitPage').fadeIn(1000);
		localStorage.Edate += JSON.stringify(date_string) + '<br />';
	})
})

$(function(){
	$('#exit').on('click', function(){
		$('exitPage').fadeOut(1000);
		$('exitPage').css('display','none');
		setTimeout('goodBye()', 2000);
		$('#add,#mainPage,#welcomePage,#menuBar,#aboutPage,#calculatePage,#sidebar,#exampleModal').css('display','none');
			})
})
goodBye = () =>{
	close();
}
// exit page ends here.....


// History Page starts here 

$(function(){
	$('#histbtn').on('click',function(){
		$('#histPage').fadeIn(1000);
		 $('#sidebar').hide();
		$('#histPage').css('display','block');
		$('#exitPage').css('display','none');
		$('#exitModal').css('display','none');
		$('#menuBar').css('display','none');
		$('#mainPage').css('display','none');
		$('#aboutPage').css('display','none');
		$('#add').css('display','none');
			$('#exampleModal').hide()
		$('#welcomePage').css('display','none');
		$('#calculatePage').css('display','none');
	})
})

// History Page ends here

$(function(){
	$('#allContainer').on('click',function(){
	$('#sidebar').css('display','none')
	})
})
backToMainPage = () =>{
	$('#mainPage').fadeIn(1000);
	document.getElementById('mainPage').style.display = "";
	document.getElementById('calculatePage').style.display = "none";
	document.getElementById('add').style.display = "";
	$('#aboutPage').css('display','none');	
}

	function countMe(evt){
		inlineCheckbox1.value++;
	}
function countMe(evt){
		inlineCheckbox1.value++;
	}
// grab the element
//var el = document.getElementById('countNums');

// listen for the long-press event
//el.addEventListener('long-press', function(evt) {
//   inlineCheckbox1.value--;
//   console.log(evt.target);
//});
function clickTocount(evt){
		inlineCheckbox2.value++;
	}
// grab the element
//var elt = document.getElementById('countNume');

// listen for the long-press event
//elt.addEventListener('long-press', function(evt) {
//   inlineCheckbox2.value--;
//  console.log(evt.target);
//});
var fafa = '';

addEventListener('click', (event)=>{
	event.preventDefault();
	if( event.target.id == 'car1'){	
		fafa = '';
		fafa = 'fa fa-car';
		
	}
	if( event.target.id == 'car2'){	
		fafa = '';
		fafa = 'fa fa-bus-alt';
		
	}
	if( event.target.id == 'car3'){	
		fafa = '';
		fafa = 'fa fa-bicycle';
		
	}
	if( event.target.id == 'car4'){	
		fafa = '';
		fafa = 'fa fa-biking';
		
	}
	if( event.target.id == 'car5'){	
		fafa = '';
		fafa = 'fa fa-train';
	}
	if( event.target.id == 'car6'){	
		fafa = '';
		fafa = 'fa fa-truck ';
	}
//	console.log(JSON.stringify(event.target.className))
})
var	timpCap;
 function addItem(){
	 timpCap = date_string;
	 localStorage.timer =  timpCap;
	 console.log(timpCap);
	 $('#myModal').modal('hide');
     all = [];
	 var c = Math.random();
    var s = Math.floor(c*1000);
    var v = 'ann'+ s;
    var ar = document.getElementsByClassName('allcounters');
    for(var i = 0; i < ar.length;i++){
        all.push(ar[i].value);
    }
   var  e = itemList.value;
//	 var f = chooseIcons.innerHTML;
    defaltDiv.innerHTML += `<p><div class="input-group mb-3 rounded mt-5" id=`+v+s+`><div class="input-group-prepend"><span class="input-group-text ${fafa} p-3 fa-1x text-white longpressCls" onmouseup="generalCount(`+s+`)" data-long-press-delay="2000" style="background: #0F0096 !important"> `+e+`</span></div><input type="number" class="form-control p-3 text-white allcounters" id=`+v+` value="0" readonly onmouseup="generalCount(`+s+`)"  data-long-press-delay="2000" style="height:73px; text-align:center; font-size:40px;background:#0F0096 !important"><div class="input-group-append" id=`+v+`><span class="input-group-text fa fa-minus p-3 fa-1x text-white" style="background:#0F0096 !important" onclick="subInp(`+s+`)"></span></div></div></p>`;
    document.getElementById('defaltDiv').style.display= "block";
    
         for(var i = 0; i < ar.length;i++){
            ar[i].value = all[i];
        }      
}  
function clearall(){
    defaltDiv.innerHTML = "";
    showtot.value = "";
}
// function calc(){
// //    var items = Object.keys(localStorage);
// //    console.log(items)
// //     var vehicles = "vehicle" + items.length;
// //        console.log(vehicles)
// //    
// //    var obj = {
// //       'add': displaytext.value,
// //       cal: calculate.value
// //       }
// //   var ob= JSON.stringify(obj);
// //    localStorage.setItem(vehicles,ob);
//  n = document.getElementsByClassName('allcounters');
//  tot = 0;
//    for(var i = 0; i < n.length; i++){
//         if(parseInt(n[i].value)){
//             tot  += parseInt(n[i].value);
//         }
//     }
//   document.getElementById('showtot').value = tot;
// }
function generalCount(a){
   var me = 'ann' + a;
   console.log(me);
   document.getElementById(me).value = Number(document.getElementById(me).value)+1;
}
let subInp = b => {
   var rt = 'ann' + b;
   console.log(rt);
  var yy = document.getElementById(rt).value;
	if(yy > 0){
	document.getElementById(rt).value = Number(document.getElementById(rt).value)-1;
	}
}
let subDef =()=>{
	let bt = inlineCheckbox2.value;
	if(bt > 0){
		inlineCheckbox2.value--;
	}
}
let subDef2 =()=>{
	let bt = inlineCheckbox1.value;
	if(bt > 0){
		inlineCheckbox1.value--;
	}
}
let colorPicker = () =>{
	var colors = '0123456789ABCDEF';
	var t = '#';
	for (var i = 0; i < 6; i++){
		t += colors[Math.floor(Math.random)*16]
	}
	return t;
}
$('.setIcon').click(function(){
    $(this).find('span').removeClass('fa-biking').addClass('fa-car-alt')
});
//$("span").click(function(){
//    $(this).find("span").removeClass("fa-biking").addClass("fa-car-alt");
//});



var car1 = $('#car1');

//$('#chooseIcons').click(()=>{
//	$(this).each(function(){
//	console.log(($(this).closest('li').find('a>span')));
//	})	
//})

calc = () =>{
	var all = 0;
	var allinput = document.getElementsByClassName('allcounters');
for (var i = 0; i < allinput.length; i++) {
 all += Number(allinput[i].value);
}
 showtot.value = all;

}

$('document').ready( function () {
	$('#History').on('click', function(){
		$('#sidebar').css('display','none')
		result.innerHTML = localStorage.getItem('date');
	})
})


