const isCreditCardNumberValid = (cardNumber) => {
  var credit, creditArray;

  credit = cardNumber.replaceAll("-","");
  creditArray = credit.split("");
  console.log(credit);


  //isNan ile sayı dışında ki girişlerin kontrol edilmektedir.
  if (isNaN(credit)) {
    alert("Kart numaranız sadece rakamlardan oluşmalıdır.");
  } else if (credit.length !== 16) {   //girdinin uzunluğunu kontrol edilmektedir.
    alert("Girdiğiniz değerin uzunluğu 16 olmalıdır.");
  } else if (!checkUniqValue(creditArray)) {
    alert("Kredi kartı numaranızda en az 2 rakam farklı olmalıdır.");
  } else if (creditArray[creditArray.length - 1] % 2 !== 0) { //kart numarasının son hanesinin tek veya çift olma durumu kontrol edilmektedir.
    alert("Kart numaranızın son hanesi çift olmalıdır.");
  } else if (checkSum(creditArray) <= 16) {
    alert("Kart hanelerinizin toplamı 16'dan büyük olmalıdır.");
  } else {
    alert("İşlem Başarılı.");
  }
};

//Burada en az iki farklı rakam olma case'i kontrol edilmektedir.

function checkUniqValue(arr) {  
  let isDiff = false;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] != arr[i]) {
      isDiff = true;
      break;
    }
  }
  return isDiff;
}

var button = document.getElementById("button");
var card = document.getElementById("card");

button.addEventListener("click", () => {
  isCreditCardNumberValid(card.value);
});

card.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    isCreditCardNumberValid(card.value);
  }
});

//Kart numarasında bulunan hanelerinin toplamının 16'dan büyük olup olmadığı durum kontrol edilmektedir.
function checkSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}
