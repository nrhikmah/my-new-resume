function average(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += parseInt(array[i])
    }
    var avg = sum / array.length;
    return avg;
}

function median(array) {
    var half = Math.floor(array.length / 2);

    array.sort(function(a, b) { return a - b; });

    if (array.length % 2) {
        return array[half];
    } else {
        return (array[half - 1] + array[half]) / 2.0;
    }

};

function min(array) {
    return Math.min(...array);
}

function max(array) {
    return Math.max(...array);
}

function hitung() {

    var input1 = (document.getElementById("input1").value);
    var input2 = (document.getElementById("input2").value);
    var input3 = (document.getElementById("input3").value);
    var input4 = (document.getElementById("input4").value);
    var input5 = (document.getElementById("input5").value);

    let array = [input1, input2, input3, input4, input5]

    document.getElementById("hasil1").innerHTML = average(array);
    document.getElementById("hasil2").innerHTML = median(array);
    document.getElementById("hasil3").innerHTML = min(array);
    document.getElementById("hasil4").innerHTML = max(array);
}


function resetButton() {
    document.getElementById("myForm").reset();
    document.getElementById("hasil1").innerHTML = " ";
    document.getElementById("hasil2").innerHTML = " ";
    document.getElementById("hasil3").innerHTML = " ";
    document.getElementById("hasil4").innerHTML = " ";
}