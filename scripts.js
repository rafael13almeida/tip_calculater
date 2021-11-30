function calculateTip(event){
event.preventDefault();
let bill = document.getElementById('bill').value;
let service = document.getElementById('service').value;
let numberOfPeople = document.getElementById('people').value;

if(bill == '' | service == 0){
    alert('Preencher todos os campos');
    return;
}

if (numberOfPeople == "" | numberOfPeople <= 1){
        numberOfPeople = 1;
        document.getElementById("each").style.display = "none";
}else {
    document.getElementById('each').style.display = "block";
}

let total = (bill * service) / numberOfPeople;
total = total.toFixed(2);
document.getElementById('tip').innerHTML = total;
document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener("submit", calculateTip);