

// to display content each key is pressed
function displayContent(content){
    calculatorScreen.value += content
}

function allClear(){
    calculatorScreen.value =""
}

function evaluateExpr(){
    calculatorScreen.value = eval(calculatorScreen.value)
}

function removeLast(){
    calculatorScreen.value = calculatorScreen.value.slice(0,-1)
}