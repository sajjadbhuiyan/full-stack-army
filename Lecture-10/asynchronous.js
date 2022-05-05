const takeOrder = (customer, callback) =>{
    console.log(`take order for ${customer}`)

    // callback means
    /* (customer) =>{
        processOrder(customer, (customer) =>{
            completeOrder(customer)
        })
    }) */
    callback(customer)
}


const processOrder = (customer, callback) =>{
    console.log(`processing order for ${customer}`)

    setTimeout(() => {
        console.log(`cooking completed`)
        console.log(`order processed for ${customer}`)
        /* (customer) =>{
            completeOrder(customer)
        }) */
        callback(customer)
    }, 3000);
}


const completeOrder = (customer) =>{
    console.log(`complete order for ${customer}`)
}

takeOrder("customer 1", (customer) =>{
    processOrder(customer, (customer) =>{
        completeOrder(customer)
    })
})


console.log("hello")





/* function main(){
    setTimeout(() =>{
        console.log("Something")
    }, 10)

    setTimeout(() => {
        console.log("Something first")
        test()
    }, 0);

    test()
}


function test(){
    console.log("test")
}

main() */