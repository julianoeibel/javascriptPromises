const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  

  const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
      resolve('Sunglasses order processed.')
    } else {
      reject('That item is sold out.')
    }
  }
  
  const promise = new Promise(myExecutor);
  
  function orderSunglasses() {
    return(promise);
  }
  
  const orderPromise = orderSunglasses();
  
  console.log(orderPromise);