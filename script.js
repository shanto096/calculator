const result = document.getElementById("result-text")


let calculate =(number) => {
    // result.value = result.value + number;
    result.value += number;
}
function clr() {
    result.value = "";
} 

function del() {
    result.value = result.value.slice(0,-1)
}

function finalResult() {
    try {
        result.value = eval(result.value)
      } catch (error) {
        alert('Invalid Result')
      }
   
}

