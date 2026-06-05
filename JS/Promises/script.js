// Promise -> A Promise is an object that says: "I don't have the result right now, but I promise to give it to you when I do."

async function data() {
    let response = await fetch('https://picsum.photos/v2/list')
    let data = await response.json()
    console.log(data);
}

data()

// Creating Promise

// Synchronous Promise
let p1 = new Promise(function(resolve, reject) {

    let val = true
    if(val) {
        console.log("Success");
    } else {
        console.log("Failure");
    }

})

let p2 = new Promise(function(resolve, reject) {
    console.log("Promise Pending hai...");
    
    let result = true;

    setTimeout(function() {
        if(result) {
            console.log("value true");
            resolve()
        } else {
            console.log("value false");
            reject()
        }
    }, 3000)
})
p2.then(function() {
    console.log("Promise is fulfilled...");
})
.catch(function() {
    console.log("Promise is rejected...");
})
.finally(function(){
    console.log("Promise END");
    
})

// Order food from zomato -> handling promises

function orderFood() {
    let myOrder = new Promise(function (resolve, reject) {
        console.log("You order is coming");
        
        let orderStatus = true;

        setTimeout(function() {
            if(orderStatus) {
                console.log("Delivery Done");
                resolve()
            } else {
                console.log("Order Cancelled");
                reject()
            }
        }, 3000)
    })

    myOrder.then(function() {     // resolve -> run when order received
        console.log("Making Payment");

        let paymentStatus = true

        return new Promise(function(res, rej) {

        setTimeout(function() {
            if(paymentStatus) {
                console.log("Payment Done...");
                res()
            } else {
                console.log("Payment Failed...");
                rej()
            }
        }, 3000)
        })
    }).then(function() {
        console.log("I am eating food...");

        let foodStatus = false
        return new Promise(function(res, rej) {
            setTimeout(function() {
                if(foodStatus) {
                    console.log("Pet bhar gya...");
                    res()
                } else {
                    console.log("Pet nhi bhara...");
                    rej()
                }
            }, 3000)
        })
    })
    .catch(function() {    // reject -> run when order failed
        console.log("Order Cancelled...");
    })
    .finally(function() {
        console.log("Process End");
    })
}

orderFood()

// Handling Promises

let p3 = fetch('https://fakestoreapi.com/products')

p3
  .then(function(data) {
    console.log("Data aa gya");
    return data.json()
})
  .then(function(myData) {
    console.log(myData);
})
  .catch(function() {
    console.log("Data nhi aaya");
})


async function dataLao() {
    try {
        let response = await fetch('https://fakestoreapi.com/products')

        let data = await response.json()

        data.forEach(function(elem) {
            console.log(elem.title);  
        })
    } catch (error) {
        console.error("Wrong URL");
    }
}
dataLao()