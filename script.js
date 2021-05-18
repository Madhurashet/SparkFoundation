let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
	var enterName1 = document.getElementById("enterName1").value;
	var enterName2 = document.getElementById("enterName2").value;
	var findUserBankAccount = enterName1 + "BankBalance";
   	var enterAmount = parseInt(document.getElementById("enterAmount").value);
	if (enterAmount >findUserBankAccount ) 
	{
     		alert("Insufficient Balance.")
   	} 
	else 
	{
      		
		var findRecipientAccount= enterName2+"BankBalance";
      		var finalAmount = parseInt(document.getElementById(findRecipientAccount).innerHTML) + enterAmount;
      		var myAccountBalance = parseInt(document.getElementById(findUserBankAccount).innerText) - enterAmount;
      		document.getElementById(findUserBankAccount).innerText = myAccountBalance
      		document.getElementById(findRecipientAccount).innerHTML = finalAmount;
      		alert(`$${enterAmount} is sent to recepient with Email-id ${enterName2}@gmail.com.`)
	      // transaction history
      		var createPTag = document.createElement("li");
      		var textNode = document.createTextNode(`$${enterAmount} is sent to recepient with Email-id ${enterName2}@email.com on ${Date()}.`);
      		createPTag.appendChild(textNode);
      		var element = document.getElementById("transaction-history-body");
      		element.insertBefore(createPTag, element.firstChild);
   	}
}
