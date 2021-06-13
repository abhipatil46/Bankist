const main_div = document.querySelector(".main");//div
const log_hedding = document.querySelector(".log-hedding");//h2
const login = document.querySelector(".account-login");//btn
const User_id = document.querySelector(".user");//input
const pin = document.querySelector(".pin");//input
const app = document.querySelector(".app");//div
const total_balance = document.querySelector(".totle-bal");//ammount(div)
const transfers = document.querySelector(".transfers");//div
const values = document.querySelector(".values");//div
const movements = document.querySelector(".movements");//div
const widraw = document.querySelector(".type-widrawal");//div
const movement_ammount = document.querySelector(".movement-ammount");//div(ammount)
const move_ammount = document.querySelector(".move-ammount");
// const deposit=document.querySelector(".deposit");//div
const dipo = document.querySelector(".type-diposite");//div
// const dipo_ammount = document.querySelector(".dipo-ammount");//div(ammount)
const trans_to = document.querySelector(".trans-to");//input
const money = document.querySelector(".money");//input
const money_send = document.querySelector(".money-send");//btn
const request = document.querySelector(".request");//input
const loan_request = document.querySelector(".loan-request");//Btn
const out_hedding=document.querySelector(".out-hedding");//span
const in_hedding=document.querySelector(".in-hedding");//span


const account1 = {
    owner: 'Abhi',
    transactions: [203, 450.6, 1000, -560, 400, -600, 100, 1000, 100],
    interesRate: 1.2,
    pin: 1111,
    username: 'abhi'
};
const account2 = {
    owner: 'Ram',
    transactions: [300, 1400, 1500, -500, 900, -300, 1900],
    interesRate: 2.2,
    pin: 2222,
    username: 'ram'
};

//Displaying transactons in Accounts..
const loginFunc = function () {
    if (User_id.value == account1.username && pin.value == account1.pin) {
        app.style = "opacity: 100%";
        log_hedding.innerHTML = `Welcome Back , ${account1.owner}`;

        const displayMovements = function (movement) {

            values.innerHTML = '';
            movement.forEach(function (mov, i) {

                const type = mov > 0 ? 'diposit' : 'widrawal';
                const html = `
                <div class="movements row">
                    <div class="type-${type} col-4"><span class="transact trans-${type}">${i + 1} ${type}</span></div>
                    <div class="movement-ammount col"><span>$${mov}</span></div>
                </div>
                `;
                values.insertAdjacentHTML("afterbegin", html);
            });
        };
        displayMovements(account1.transactions);


        // Showing IN & OUT data ... 
        const data=function(){
            let add=0
            let out=0
            for(let i=0;i<account1.transactions.length;i++){
                if(account1.transactions[i]>0){
                add+=account1.transactions[i];
                in_hedding.innerHTML=`$ ${add}`;
            }
                else{
                    out-=account1.transactions[i];
                    out_hedding.innerHTML=`$ ${out}`;
                }
            }
        }
        data();

    }
    else if (User_id.value == account2.username && pin.value == account2.pin) {
        app.style = "opacity: 100%";
        log_hedding.innerHTML = `Welcome Back , ${account2.owner}`;

        const displayMovements = function (movement) {

            values.innerHTML = '';

            movement.forEach(function (mov, i) {

                const type = mov > 0 ? 'diposit' : 'widrawal';

                const html = `
                <div class="movements row">
                    <div class="type-${type} col-4"><span class="transact trans-${type}">${i + 1} ${type}</span></div>
                    <div class="movement-ammount col"><span>$${mov}</span></div>
                </div>
                `;

                values.insertAdjacentHTML("afterbegin", html);
            });

        };
        displayMovements(account2.transactions);

        const data=function(){
            let add=0
            let out=0
            for(let i=0;i<account2.transactions.length;i++){
                if(account2.transactions[i]>0){
                add+=account2.transactions[i];
                in_hedding.innerHTML=`$ ${add}`;
            }
                else{
                    out-=account2.transactions[i];
                    out_hedding.innerHTML=`$ ${out}`;
                }
            }
        }
        data();

    }
}

//Requesting loan from bank,& returnning loan by adding '-' sign at ammount.
let req_loan = function () {
    if (User_id.value == account1.username && pin.value == account1.pin) {
        if (request.value != '' && request.value != 0) {
            requestAmmount = Number(request.value);
            account1.transactions.push(requestAmmount);
            loginFunc();
        }

    }
    else if (User_id.value == account2.username && pin.value == account2.pin) {
        if (request.value != '' && request.value != 0) {
            requestAmmount = Number(request.value);
            account2.transactions.push(requestAmmount);
            loginFunc();
        }
    }
}


//Upadating balance function;

let total = function () {
    let add = 0
    if (User_id.value == account1.username && pin.value == account1.pin) {
        for (let i = 0; i < account1.transactions.length; i++) {
            add += account1.transactions[i]
        }
    }
    else if (User_id.value == account2.username && pin.value == account2.pin) {
        for (let i = 0; i < account2.transactions.length; i++) {
            add += account2.transactions[i]
        }
    }
    total_balance.innerHTML = `$${add} EUR`;
}


// Transfering money from one account to another..

const trans_money=function(){
    let money_num=0;
    if(trans_to.value==account2.owner){
        money_num=Number(money.value);
        account1.transactions.push(-money_num);
        total();
        alert(`$${money_num} Money send to ${account2.owner} `);
        account2.transactions.push(money_num);
        loginFunc();
        trans_to.value=null;
        money.value=null;
    }
    else if(trans_to.value==account1.owner){
        money_num=Number(money.value);
        account2.transactions.push(-money_num);
        total();
        alert(`$${money_num} Money send to ${account2.owner} `);
        console.log(account1.transactions);
        account1.transactions.push(money_num);
        loginFunc();
        trans_to.value=null;
        money.value=null;
    }
    
}
const dataDiv=document.querySelector(".data");
//Data Display


