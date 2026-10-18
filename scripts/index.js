function calculateDiscount() {
    //Prompt for get price
    let inputPrice = prompt("Enter a price tag (for example: $49.99)", "$");

    //If cancel
    if (!inputPrice) return;

    //Remove $ and convert to number (number or parseFloat)
    let priceWithoutDoller = inputPrice.replace("$", "").trim();
    let priceNumber = Number(priceWithoutDoller);

    //If wrong input
    if (isNaN(priceNumber) || priceWithoutDoller === "") {
        alert ("Please enter a valid price (e.g. $49.99 or 50)");
        return;
    };

    //Calculate 10%
    let discountAmount = priceNumber * 0.10;
    let discountedPrice = priceNumber - discountAmount;

    //Show on the consol

    let showOldPrice = `Original Price: $${priceNumber.toFixed(2)}`;
    let showDiscount = `Discount: ($${discountAmount.toFixed(2)})`;
    let showNewPrice = `Your new price: $${discountedPrice.toFixed(2)}`;
    
    console.log(showOldPrice)
    console.log(showNewPrice);

    //Show on the HTML
    document.getElementById("originalPrice").textContent = showOldPrice;
    document.getElementById("discount").textContent = showDiscount;
    document.getElementById("finalPrice").textContent = showNewPrice;
    
    //Enable resultBox
    document.getElementById("resultBox").style.display = "Block";

}