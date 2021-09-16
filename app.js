var initialPrice = document.querySelector("#initial-price")
var stocksQuantity = document.querySelector("#stocks-quantity")
var currentPrice = document.querySelector("#current-price")
var checkBtn = document.querySelector("#check-btn")
var result = document.querySelector("#result")

function showResult(str, colorr) {
    result.style.display = "block"
    result.style.color = colorr;
    result.innerHTML = str;
}

function profitLoss(ip, qty, currentP) {

    if (ip > currentP) {
        var loss = (ip - currentP) * qty;
        var lossPercentage = (loss / (ip*qty)) * 100;
        showResult(`oops!! your loss is ${loss.toFixed(2)} and loss Percentage is ${lossPercentage.toFixed(2)}%`, "#DC2626")

    } else if (currentP > ip) {
        var profit = (currentP - ip) * qty;
        var profitPercentage = (profit /(ip*qty)) * 100;
        showResult(`congratulations!! Your Profit is ${profit.toFixed(2)} and profit Percentage is ${profitPercentage.toFixed(2)}%`, "green")

    } else {
        showResult("No loss !!, No profit !!", "blue")
    }
}

function OnclickHandler() {
    if (initialPrice.value && stocksQuantity.value && currentPrice.value) {
        var ip = Number(initialPrice.value)
        var qty = Number(stocksQuantity.value)
        var currentP = Number(currentPrice.value)
        if(ip>0&&qty>0&&currentP>0)
        {
        profitLoss(ip, qty, currentP);
        }
        else{
            showResult("Enter values greator than zero!!", "red")
        }
    } else {
        showResult("Enter all the  values !!", "red")
    }
}

checkBtn.addEventListener("click", OnclickHandler)