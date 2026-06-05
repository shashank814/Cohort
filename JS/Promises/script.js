// Promise -> 

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
    console.log("Promise Pending Hai");
    
    let result = true
    setTimeout(function() {
        if(result) {
            console.log('value true');

            resolve()
        } else {
            console.log("value false");

            reject()
        }
    }, 3000)

})
p2.then(function() {
    console.log("Promise is fulfiiled"); 
})
.catch(function() {
    console.log("Promise is rejected"); 
})
.finally(function() {
    console.log("Promise END"); 
})


// Order food from zomato -> handling promises

function orderFood() {
    let myOrder = new Promise(function (resolve, reject) {
        console.log("You order is coming");
        
        let orderStatus = true;

        setTimeout(function() {
            if(orderStatus) {
                console.log("Delivery wale bhaiya aa gye hai");
                resolve()
            } else {
                reject()
            }
        }, 3000)
    })

    myOrder.then(function() {     // resolve -> run when order received
        console.log("Now make a payment");

        let paymentStatus = true

        return new Promise(function(res) {

        setTimeout(function() {
            if(paymentStatus) {
                res()
            } else {
                rej()
            }
        }, 3000)
        })
    })     
    .then(function() {
        console.log("Nacho");
    })
    .catch(function() {    // reject -> run when order failed
        console.log("Order failed");
        console.log("Complain kro");
    })
}

orderFood()

// Async Promises