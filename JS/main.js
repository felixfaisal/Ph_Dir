//var f=[];
//var t=[];
/**if(document.getElementById('name').value!=null)
{
  var k = document.getElementById('id');
}*/
var f=[];
var l=[];
function process() {
  'use strict'
  //document.getElementById('final').innerHTML='<p>Hello</p>';
  document.getElementById('myform').style.visibility='hidden';
  document.getElementById('newbtn').style.visibility='hidden';
  document.getElementById('btns').style.visibility='visible';
  var k=document.getElementById('name').value;
  var n=document.getElementById('number').value;
  f.push(k);
  l.push(n);

  for(let i=f.length-1;i>=0;i--){

  //var h='<p>'+f[i]+'</p><br>';
    var table = document.createElement('table');
    var row = document.createElement('tr');
    var data = document.createElement('td');
    var newtext = document.createTextNode(f[i]);
    table.appendChild(row);
    table.appendChild(data);
    table.appendChild(newtext);
  //document.getElementById('final').innerHTML='<p>'+f[i]+'</p>';
  //document.getElementById('final').innerHTML='<output name="x" for="name"></output>';
    var p1 = document.getElementById("final");
    p1.appendChild(table);
  }
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
