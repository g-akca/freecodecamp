let inventory = [];

function findProductIndex(productName) {
  const lowerName = productName.toLowerCase();
  return inventory.findIndex(item => item.name == lowerName);
}

function addProduct(product) {
  const index = findProductIndex(product.name);
  const lowerName = product.name.toLowerCase();
  
  if (index != -1) {
    inventory[index].quantity += product.quantity;
    console.log(lowerName + " quantity updated");
  }
  else {
    inventory.push({ name: lowerName, quantity: product.quantity });
    console.log(lowerName + " added to inventory");
  }
}

function removeProduct(productName, quantity) {
  const index = findProductIndex(productName);
  const lowerName = productName.toLowerCase();

  if (index == -1) {
    console.log(lowerName + " not found");
    return;
  }

  let product = inventory[index];

  if (product.quantity < quantity) {
    console.log("Not enough " + lowerName + " available, remaining pieces: " + product.quantity);
  }
  else {
    product.quantity -= quantity;
    console.log("Remaining " + lowerName + " pieces: " + product.quantity);

    if (product.quantity == 0) inventory.splice(index, 1);
  }
}
