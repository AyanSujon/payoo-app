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


// Toggling Features comon function
function handleToggle(id){
    const forms = document.getElementsByClassName("form");
    for(const form of forms){
        form.style.display = "none"
    }
    document.getElementById(id).style.display = "block"
}

// Function TO Toggle Buttom 
function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName("form-btn");
    // console.log(formBtns);
    for(const btn of formBtns){
        // console.log(btn)
        btn.classList.remove("border-[#0874F2]", "bg-[#0874f20d]")
        btn.classList.add("border-[#0808081a]")
    }
    document.getElementById(id).classList.remove("border-[#0808081a]");
    document.getElementById(id).classList.add("border-[#0874F2]", "bg-[#0874f20d]");
}

// Toggling Features 
document.getElementById("add-button").addEventListener("click", function(){
    handleToggle("add-money-parent");
    handleButtonToggle("add-button");
})
document.getElementById("cash-out-button").addEventListener("click", function(){
    handleToggle("cash-out-parent");
     handleButtonToggle("cash-out-button");
})

document.getElementById("transfer-money-button").addEventListener("click", function(){
    handleToggle("transfer-money-parent");
     handleButtonToggle("transfer-money-button");
})
document.getElementById("get-bonus-button").addEventListener("click", function(){
    handleToggle("get-bonus-parent");
    handleButtonToggle("get-bonus-button");
})
document.getElementById("pay-bill-button").addEventListener("click", function(){
    handleToggle("pay-bill-parent");
    handleButtonToggle("pay-bill-button");
})
document.getElementById("transactions-button").addEventListener("click", function(){
    handleToggle("transactions-parent");
    handleButtonToggle("transactions-button");
})









