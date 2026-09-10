//-------------Each button Display---------//

const buttonOne = document.getElementById("one")

buttonOne.addEventListener("click",function(){
    const displayNumber = document.querySelector(".number")

    displayNumber.textContent = displayNumber.textContent + 1
})

const buttonTwo = document.getElementById("two")

buttonTwo.addEventListener("click",function(){
    const displayNumber = document.querySelector(".number")

    displayNumber.textContent = displayNumber.textContent + 2
})

const buttonThree = document.getElementById("three")

buttonThree.addEventListener("click", function () {
    const displayNumber = document.querySelector(".number")

    displayNumber.textContent = displayNumber.textContent + 3
})

const buttonfour = document.getElementById("four")

buttonfour.addEventListener("click",function(){
    const displayNumber = document.querySelector(".number")

    displayNumber.textContent = displayNumber.textContent + 4
})

const buttonFive = document.getElementById("five")

buttonFive.addEventListener("click",function(){
    const displayNumber = document.querySelector(".number")

    displayNumber.textContent = displayNumber.textContent + 5
})

const buttonSix = document.getElementById("six")

buttonSix.addEventListener("click",function(){
    const displayNumber = document.querySelector(".number")

    displayNumber.textContent = displayNumber.textContent + 6
})

const buttonSeven = document.getElementById("seven")

buttonSeven.addEventListener("click",function(){
    const displayNumber = document.querySelector(".number")

    displayNumber.textContent = displayNumber.textContent + 7
})

const buttonEight = document.getElementById("eight")

buttonEight.addEventListener("click",function(){
    const displayNumber = document.querySelector(".number")

    displayNumber.textContent = displayNumber.textContent + 8
})

const buttonNine = document.getElementById("nine")

buttonNine.addEventListener("click",function(){
    const displayNumber = document.querySelector(".number")

    displayNumber.textContent = displayNumber.textContent + 9
})

const buttonZero = document.getElementById("zero")

buttonZero.addEventListener("click",function(){
    const displayNumber = document.querySelector(".number")

    displayNumber.textContent = displayNumber.textContent + 0
})

const buttonDoubleZero = document.getElementById("double-zero")

buttonDoubleZero.addEventListener("click",function(){
    const displayNumber = document.querySelector(".number")

    displayNumber.textContent = displayNumber.textContent + "0" + "0"
})

const buttonDot = document.getElementById("dot")

buttonDot.addEventListener("click",function(){
    const displayNumber = document.querySelector(".number")

    displayNumber.textContent = displayNumber.textContent + "."
})

const buttonDivide = document.getElementById("divide")

buttonDivide.addEventListener("click",function(){
    const displayNumber = document.querySelector(".number")

    displayNumber.textContent = displayNumber.textContent + "÷"
})

const buttonAddition = document.getElementById("addition")

buttonAddition.addEventListener("click",function(){
    const displayNumber = document.querySelector(".number")

    displayNumber.textContent = displayNumber.textContent + "+"
})

const buttonMultiplier = document.getElementById("multiplier")

buttonMultiplier.addEventListener("click",function(){
    const displayNumber = document.querySelector(".number")

    displayNumber.textContent = displayNumber.textContent + "×" 
})

const buttonSubstactor = document.getElementById("substractor")

buttonSubstactor.addEventListener("click",function(){
    const displayNumber = document.querySelector(".number")

    displayNumber.textContent = displayNumber.textContent + "-" 
})

const buttonPercentage = document.getElementById("percentage")

buttonPercentage.addEventListener("click",function(){
    const displayNumber = document.querySelector(".number")

    displayNumber.textContent = displayNumber.textContent + "%" 
})

const buttonFullClear = document.getElementById("ac")

buttonFullClear.addEventListener("click",function(){
    const displayNumber = document.querySelector(".number")

    displayNumber.textContent =  ""
})

const oneDigitDelete = document.getElementById("delete")

oneDigitDelete.addEventListener("click",function(){
    const displayNumber = document.querySelector(".number")

displayNumber.textContent =
    displayNumber.textContent.slice(0, displayNumber.textContent.length - 1)})

//--------------------------------END----------------------------------------//

        //-----------------HIGHER OPERATORS---------------------//

function calculateExpression(expression) {


while(expression.includes("×") || expression.includes("÷")){

for (let index = 0; index < expression.length; index++){


        if (expression[index] === "×" || expression[index] === "÷") {
            let start;
            let end;
            //-------------BACKWARD LOOP-----------------//
            for (let j = index - 1; j >= 0; j--){

                    if(expression[j] === "×" || expression[j] === "÷" ||
                     expression[j] === "+" || expression[j] === "-" ){
                        start = j + 1
                        break;
                    }

            }
            if(start === undefined){
                start = 0
            }
            //-----------------------------------//
            //-------------FORWARD LOOP----------------//
            for(let k = index + 1 ; k < expression.length ; k++){

                    if(expression[k] === "×" || expression[k] === "÷" ||
                     expression[k] === "+" || expression[k] === "-" && k !== index + 1){
                        end = k - 1
                        break;
                    }
            }
            if(end === undefined){
                end = expression.length - 1
            }
            //---------------------------------//
            //---------OPERATOR CALCULATION-----//
            const leftNumber = expression.slice(start, index);
            const rightNumber = expression.slice(index + 1, end + 1);

            const leftValue = Number(leftNumber)
            const rightValue = Number(rightNumber)

            let result;

            if (expression[index] === "×") {
                     result = leftValue * rightValue;
            }
                
            if(expression[index] === "÷" ){
                result = leftValue / rightValue
            }
            //-----------END-------------//
            //--------REPLACING-----------//
            const before = expression.slice(0, start);
            const after = expression.slice(end + 1);

            expression = before + result + after

            break;
    //------------------END----------------//

        }

}
}
        //------------------LOWER EXPRESSION-----------------------//

while(expression.includes("+")|| expression.slice(1).includes("-")){

    for(let index = 0; index < expression.length ; index++){

        
        if(expression[index] === "+" || expression[index] === "-" && index !==0){
            let end
            let start = index + 1;


            //-------------FORWARD LOOP----------------//
            for(let k = index + 1 ; k < expression.length ; k++){

                    if(expression[k] === "+" || expression[k] === "-" && k !== start){
                         end = k - 1
                        break;
                    }
            }
            if(end === undefined){
                end = expression.length - 1
            }
            //----------------------------------------------//
            //---------------OPERATOR CALCULATION------------------//
           const rightNumber = expression.slice(start, end + 1);
           const leftNumber = expression.slice(0, index);

           const rightValue = Number(rightNumber)
           const leftValue = Number(leftNumber)

            let result;

            if(expression[index] === "+"){
               result = leftValue + rightValue
            }

            if(expression[index] === "-"){
               result = leftValue - rightValue
            }

            //-----------------END----------------//
            //---------REPLACING------------------//

            const before = ""
            const after = expression.slice(end + 1);

            expression = before + result + after

            break;
            
            //-------------------END--------------//
        }

    }   

}
    return expression;
}

//---------------------EQUAL BUTTON--------------------//

const buttonEqual = document.getElementById("equal");

buttonEqual.addEventListener("click", function () {

    const displayNumber = document.querySelector(".number");

    let expression = displayNumber.textContent;

    expression = calculateExpression(expression);

    displayNumber.textContent = expression;

});