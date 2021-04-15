function submit()
{
s_no = document.getElementById('students_no').value
f_no = document.getElementById('faculty_no').value

s_no = parseFloat(s_no)
f_no = parseFloat(f_no) -5 

if(s_no == 0 || f_no ==0)
{
	alert("Zero is not allowed");
}

else
{
	sfr = s_no / f_no ;
	document.getElementById('result').innerHTML = sfr.toFixed(2);
}




}