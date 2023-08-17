
// step 1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){ 
    // console.log('btn-deposit');
    // Step 2 get the deposit amount from the deposit input 
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount);

    const depositTotalElement = document.getElementById('deposit-total');    
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(previousDepositTotal);
    

    const currentDepositTotal = (previousDepositTotal + newDepositAmount);
    depositTotalElement.innerText = currentDepositTotal;
    // console.log(depositTotalElement.innerText);

    // balance
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = (previousBalanceTotal + newDepositAmount);
    balanceTotal.innerText = newBalanceTotal

    depositField.value = '';
})
