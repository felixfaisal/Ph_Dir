//var f=[];
//var t=[];
/**if(document.getElementById('name').value!=null)
{
  var k = document.getElementById('id');
}*/

var f=[];
var l=[];
function remove() {
  var e=this.value;
  //alert(e);
  if(f.length==1 || e==0){
    f.shift();
    l.shift();
  }
  else{
  f.splice(e,e);
  l.splice(e,e);
  }
  //alert(f);
  var hi= document.getElementById('final');
  var ki= document.getElementById(e);
  hi.removeChild(ki);
}

function process() {
  'use strict'
  //document.getElementById('final').innerHTML='<p>Hello</p>';
  document.getElementById('myform').style.display='none';
  document.getElementById('newbtn').style.display='none';
  document.getElementById('btns').style.display='block';
  var k=document.getElementById('name').value;
  var n=document.getElementById('number').value;
  f.push(k);
  l.push(n);
  var p1 = document.getElementById("final");
  var header1 = document.createElement('th');
  var header2 = document.createElement('th');
  var row1 = document.createElement('tr');
  var theader1 = document.createTextNode('Name');
  var theader2 = document.createTextNode('Number');
  header1.appendChild(theader1);
  header2.appendChild(theader2);
  row1.appendChild(header1);
  row1.appendChild(header2);
  p1.appendChild(row1);
  //var table = document.createElement('table');
  for(let i=f.length-1;i>=0;i--){
  //var h='<p>'+f[i]+'</p><br>';
    var row = document.createElement('tr');
    var data = document.createElement('td');
    var data1 = document.createElement('td');
    var data2 = document.createElement('td');
    var button =document.createElement('button');
    button.type='submit';
    button.value=i;
    var buttont = document.createTextNode('Delete');
    button.appendChild(buttont);
    var newtext = document.createTextNode(f[i]);
    var number = document.createTextNode(l[i]);
    data.appendChild(newtext);
    data1.appendChild(number);
    row.appendChild(data);
    row.appendChild(data1);
    row.id=i;
    button.onclick=remove;
    row.appendChild(button);

    //table.appendChild(row);
  //document.getElementById('final').innerHTML='<p>'+f[i]+'</p>';
  //document.getElementById('final').innerHTML='<output name="x" for="name"></output>';
    //var p1 = document.getElementById("final");
    p1.appendChild(row);
  }

}
function show() {
  'use strict'
  document.getElementById('myform').style.display='block';
  document.getElementById('newbtn').style.display='block';
  //document.getElementById('btns').style.visiblity='hidden';
  document.getElementById('btns').style.display='none';
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
