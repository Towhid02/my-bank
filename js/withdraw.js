// withdraw
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    

    const withdrawTotalElement = document.getElementById('withdraw-total');    
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    

    const currentWithdrawTotal = (previousWithdrawTotal + newWithdrawAmount);
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // console.log(withdrawTotalElement.innerText);

    withdrawField.value = '';

    const balanceElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal
})