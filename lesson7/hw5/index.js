function withdraw(clients, balances, client, amount) {
    console.log(clients, balances, client, amount);
    let result = 0;
    let sum = clients.forEach(function(itemSum, indexSum) {
        if (itemSum === client) {

            balances.forEach(function(balancesEach, indexEach) {

                if (indexSum === indexEach) {
                    if (balancesEach > amount) {
                        result = balancesEach - amount;
                    } else {
                        result = -1;
                    }
                }
            });
        }
    });
    return result;
}
const sum = withdraw(["Ann", "John", "User"], [1400, 87, -6], "Ann", 50);
console.log(sum);