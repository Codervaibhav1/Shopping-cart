
const itemname = document.querySelector("#name");
const itemprice = document.querySelector("#price");
let total = parseInt(document.querySelector("#total").innerText);
document.querySelector("#add-item").addEventListener("click", addItem);
const tbody = document.querySelector("table tbody");


function addItem() {
  if (itemname.value != "" && itemprice.value != "") {
    const row = document.createElement("tr");
    const itemnameTD = document.createElement("td");
    const itempriceTD = document.createElement("td");
    itempriceTD.classList.add("item-price");
    itemnameTD.innerText = itemname.value;
    itempriceTD.innerText = itemprice.value;

    row.appendChild(itemnameTD);
    row.appendChild(itempriceTD);
    tbody.appendChild(row);
    itemname.value = "";
    itemprice.value = "";

    const allPrice = document.querySelectorAll(".item-price");
    if (allPrice.length == 10) {
      document.querySelector("#add-item").removeEventListener("click");
    }
    this.total = 0;
    for (let itemprice of allPrice) {
      this.total += parseInt(itemprice.innerText);
    }
    document.querySelector("#total").innerText = this.total;
  }
 
}
