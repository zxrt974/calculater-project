function calculate(oprator) {
    // to get the value from the input
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    let result;

    // is nan used like if not in python to cheack if there is a value
    if(isNaN(num1) || isNaN(num2)) {
        alert('you have to enter the numbers');
        return
    }

    switch(oprator) {
        case '+' :
            result=num1+num2;
            break;
        case '-' :
            result=num1-num2;
            break;
        case '*' :
            result=num1*num2;
            break;
        case '/':
            if(num2 ==0) {
                alert('you cant divide on 0');
                return;
            }
            else{
                result=num1/num2;
                break;
            }
    }

      document.getElementById('result').innerText = `the result is: ${result}`;
}