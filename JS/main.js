//var f=[];
//var t=[];
/**if(document.getElementById('name').value!=null)
{
  var k = document.getElementById('id');
}*/
var f=[];
function process() {
  'use strict'
  //document.getElementById('final').innerHTML='<p>Hello</p>';
  var k=document.getElementById('name').value;
  var n=document.getElementById('number').value;
  f.push(k);
  document.getElementById('final').innerHTML='<p>'+f[0]+'</p>';
  //document.getElementById('final').innerHTML='<output name="x" for="name"></output>';
}
function show() {
  'use strict'
  document.getElementById('myform').style.visibility='visible';
  document.getElementById('newbtn').style.visibility='visible';
  //document.getElementById('btns').style.visiblity='hidden';
  document.getElementById('btns').style.visibility='hidden';
  document.getElementById('final').innerHTML='<output name="x" for="name"></output>';
  //document.getElementById('final').innerHTML='<p>'+k+'</p>';
}

function init() {
  'use strict'
  document.getElementById('btns').onclick=show;
  document.getElementById('newbtn').onclick=process;
  //document.getElementById('newbtn').visibility='hidden';
  //document.getElementById('final').innerHTML='<p>'+k+'</p>';

}
window.onload= init;
