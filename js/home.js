// add-money-btn Function

const validPin = 1234;
document.getElementById("add-money-btn").addEventListener(
    "click", function(e){
        e.preventDefault()
        // console.log("add money Button clicked")
        const bank = document.getElementById("bank").value;
        const accountNumber = document.getElementById("account-number").value;
        const amount = parseInt(document.getElementById("add-amount").value);
        const pin = parseInt(document.getElementById("add-pin").value);
        // console.log(bank, accountNumber, amount, pin);

        const availableBalance = parseInt(document.getElementById("available-balance").innerText);
        // console.log(availableBalance);
        if(accountNumber.length <11){
            alert('Please provide valid account number');
            return;
        }
        if(pin !== validPin){
            alert("Please provide a valid pin number");
            return;
        }

        const totalNewAvailableBalance = amount + availableBalance;
        document.getElementById("available-balance").innerText = totalNewAvailableBalance; 
    }
)

// Cash Out Money Features
document.getElementById("withdraw-btn").addEventListener("click", function(e){
    e.preventDefault()
    // console.log(" withdrow button clicked");
    const amount = parseInt(document.getElementById("withdraw-amount").value);
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);
    // console.log(amount, availableBalance);
    const totalNewAvailableBalance = availableBalance - amount;
    // console.log(totalNewAvailableBalance);
    document.getElementById("available-balance").innerText = totalNewAvailableBalance;

})






// Toggling Features 

document.getElementById("add-button").addEventListener("click", function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})
document.getElementById("cash-out-button").addEventListener("click", function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"

})














