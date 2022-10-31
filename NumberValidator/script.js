let phoneOne = /^0032\s*\d\s*\d{3}\s*\d{2}\s*\d{2}$/;
let phoneTwo = /^0\d\s*\d{3}\s*\d{2}\s*\d{2}$/
let phoneThree = /^\+32\s*\d\s*\d{3}\s*\d{2}\s*\d{2}$/
let email = /^(\w|\-|\_)*\@(\w|\-|\_)*\.(be|com)$/

function getMsgPhone()
{
  var message = document.getElementById("phoneBox").value;
  
  return message;
}
function getMsgEmail()
{
  var message = document.getElementById("emailBox").value;
  
  return message;
}

function telephoneCheck(str) 
{
 if (phoneOne.test(str) || phoneTwo.test(str) || phoneThree.test(str))
 {
   return true;
 }
 else
 {
   return false;
 }
 
}

function emailCheck(str) 
{
  if (email.test(str))
  {
    return true;
  }
  else
  {
    return false;
  }
  
}

document.getElementById("phoneButton").onclick = function()
{
    if (telephoneCheck(getMsgPhone()) == true)
    {
        document.getElementById("phoneResult").textContent = 'OK!';
        document.getElementById("phoneResult").style.color = 'rgb(140, 179, 105)'
        document.getElementById("phoneResult").style.fontSize = '30px';
    }
    else
    {
        document.getElementById("phoneResult").textContent = 'Please enter a valid phone number';
        document.getElementById("phoneResult").style.color = 'rgb(243, 66, 19)';
        document.getElementById("phoneResult").style.fontSize = '15px'
    }
};

document.getElementById("emailButton").onclick = function()
{
    if (emailCheck(getMsgEmail()) == true)
    {
        document.getElementById("emailResult").textContent = 'OK!';
        document.getElementById("emailResult").style.color = 'rgb(140, 179, 105)'
        document.getElementById("emailResult").style.borderColor = '#747320';
        document.getElementById("emailResult").style.fontSize = '30';
    }
    else
    {
        document.getElementById("emailResult").textContent = 'Please enter a valid e-mail';
        document.getElementById("emailResult").style.color = 'rgb(243, 66, 19)';
        document.getElementById("emailResult").style.borderColor = '';
        document.getElementById("emailResult").style.fontSize = '15'
    }
};