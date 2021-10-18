function validate_form ( )
{
var Q1=document.getElementById("fio");
var Q2=document.getElementById("email");
var Q3=document.getElementById("phone");
var Q4=document.getElementById("letter");
var valid_tel=false;



if (!Q1.value)
	{
		document.querySelector("div.error_fio").style.visibility="visible";
		Q1.focus();
		return false;
	} else {document.querySelector("div.error_fio").style.visibility="Hidden";};

var str=document.getElementById("fio").value;
var cnt = 0,startpos=0;
while(str.indexOf(" ",startpos)>=0){
 cnt++;
 startpos=str.indexOf(" ",startpos)+1;
}
if (startpos<str.length) {
 cnt++;
}
if (cnt!=3) {document.querySelector("div.error_fio").style.visibility="visible";
		Q1.focus(); return false;} else {document.querySelector("div.error_fio").style.visibility="Hidden";};



if (!Q2.value)
	{
		document.querySelector("div.error_email").style.visibility="visible";
		Q2.focus();
		return false;
	} else {document.querySelector("div.error_email").style.visibility="Hidden";};



var em=document.getElementById("email").value;
var c = 0,start=0;
while(em.indexOf("@",start)>=0){
 c++;
 start=em.indexOf("@",start)+1;
}
if (c!=1) {
		document.querySelector("div.error_email").style.visibility="visible";
		Q2.focus(); return false;}else {document.querySelector("div.error_email").style.visibility="Hidden";};


if (!Q3.value)
	{
		document.querySelector("div.error_tele").style.visibility="visible";
		Q3.focus();
		return false;
	} else {document.querySelector("div.error_tele").style.visibility="Hidden";};
	
var tel=document.getElementById("phone").value;
 let regex = /^(\+7|\+3)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
 if (!regex.test(tel)){
	 document.querySelector("div.error_tele").style.visibility="visible";
	 Q3.focus(); return false;
 }
 else
	 {document.querySelector("div.error_tele").style.visibility="Hidden";}


	/*
var tel=document.getElementById("phone").value;
if ((tel.indexOf("+")=0) and (tel.indexOf("7")=1)) 
 {
 document.querySelector("div.error_tele").style.visibility="Hidden";}
else {document.querySelector("div.error_tele").style.visibility="visible";
Q3.focus(); return false;
}

*/
}