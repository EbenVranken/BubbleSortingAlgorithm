let arr = [];
let embeddableString = "";
const check = document.getElementById("lTs");
const time = document.getElementById("time");
const outputElem = document.getElementById("output");

function genArr() {
    let arrLen = document.getElementById("arrLen").value;

    embeddableString = "";
    arr = [];
    for (i = 0; i < arrLen; i++) {
        arr.push(Math.floor(Math.random() * arrLen +1));
    }
    Output();
}

function Output() {
    document.getElementById("output").innerHTML = "";

    embeddableString = "";

    for (i = 0; i < arr.length; i++) {
        embeddableString += "<td style='border: 1px solid hsl(" + arr[i] + ",100%,50%);'>" + arr[i] + "</td>";
    }
    outputElem.innerHTML = embeddableString;
}

function bubbleSort() {

    var start = new Date().getTime();

    if(check.checked)
    {
        for (i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length - 1; j++) {
                if (arr[j] < arr[j + 1]) {
                    var a = arr[j]
                    var b = arr[j + 1]
                    arr[j] = b
                    arr[j + 1] = a
                }
            }
        }        
    } else {
        for (i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    var a = arr[j]
                    var b = arr[j + 1]
                    arr[j] = b
                    arr[j + 1] = a
                }
            }
        }
    }

    Output();
    var end = new Date().getTime();
    var time = end - start;
    time.innerHTML = 'Execution time: ' + time + "ms";
}