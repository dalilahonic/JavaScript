'use strict';

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [
    5000, 3400, -150, -790, -3210, -1000, 8500, -30,
  ],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector(
  '.balance__value'
);
const labelSumIn = document.querySelector(
  '.summary__value--in'
);
const labelSumOut = document.querySelector(
  '.summary__value--out'
);
const labelSumInterest = document.querySelector(
  '.summary__value--interest'
);
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements =
  document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector(
  '.form__btn--transfer'
);
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector(
  '.form__btn--close'
);
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector(
  '.login__input--user'
);
const inputLoginPin = document.querySelector(
  '.login__input--pin'
);
const inputTransferTo = document.querySelector(
  '.form__input--to'
);
const inputTransferAmount = document.querySelector(
  '.form__input--amount'
);
const inputLoanAmount = document.querySelector(
  '.form__input--loan-amount'
);
const inputCloseUsername = document.querySelector(
  '.form__input--user'
);
const inputClosePin = document.querySelector(
  '.form__input--pin'
);

const transferContainer = document.querySelector(
  '.form--transfer'
);

function formatMovementDate(date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(
      Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)
    );

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = String(date.getMonth() + 1).padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
}

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const dispalyMovements = (acc, sort = false) => {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  // const movs = sort ? [...movements].sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(
      date,
      acc.locale
    );

    const formattedMov = formatCur(
      mov,
      acc.locale,
      acc.currency
    );

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
      ${i + 1} ${type}
    </div>
    <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formattedMov} ${type}</div>
    </div>
        `;

    containerMovements.insertAdjacentHTML(
      'afterbegin',
      html
    );
    //insertAdjacentHTML(position, text)

    /*
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->
*/
  });
};

const calcDisplayBalance = (acc) => {
  const balance = acc.movements.reduce(
    (accumulator, mov) => accumulator + mov,
    0
  );

  acc.balance = balance;
  // labelBalance.textContent = `${balance.toFixed(2)} EUR`;

  labelBalance.textContent = formatCur(
    balance,
    acc.locale,
    acc.currency
  );
};

// const calcDisplaySummary = (acc) => {
//   const incomes = acc.movements
//     .filter((mov) => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = `${incomes} EUR`;

//   const out = acc.movements
//     .filter((mov) => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = `${Math.abs(out)} EUR`;

//   const interest = acc.movements
//     .filter((mov) => mov > 0)
//     .map((deposit) => (deposit * acc.interestRate) / 100)
//     .filter((int) => int >= 1)
//     .reduce((acc, int) => acc + int, 0);

//   labelSumInterest.textContent = `${interest} EUR`;
// };

// const calcDisplaySummary = (acc) => {
//   const { movements, interestRate } = acc;

//   const summary = movements.reduce(
//     (summary, mov) => {
//       if (mov > 0) {
//         summary.incomes += mov;
//         const interest = (mov * interestRate) / 100;
//         if (interest >= 1) {
//           summary.interest += interest;
//         }
//       } else {
//         summary.out += mov;
//       }

//       return summary;
//     },
//     { incomes: 0, out: 0, interest: 0 }
//   );

//   labelSumIn.textContent = summary.incomes % 1 === 0 ? summary.incomes.toFixed(0) : summary.incomes.toFixed(2) + ' EUR';
//   labelSumOut.textContent = summary.out % 1 === 0 ? Math.abs(summary.out).toFixed(0) : Math.abs(summary.out).toFixed(2) + ' EUR';
//   labelSumInterest.textContent = summary.interest % 1 === 0 ? summary.interest.toFixed(0) : summary.interest.toFixed(2) + ' EUR';
// };

const calcDisplaySummary = (acc) => {
  const { movements, interestRate } = acc;

  let incomes = 0;
  let out = 0;
  let interest = 0;

  for (const mov of movements) {
    if (mov > 0) {
      incomes += mov;
      interest += (mov * interestRate) / 100;
    } else {
      out += mov;
    }
  }

  incomes = Number.isInteger(incomes)
    ? incomes.toFixed(0)
    : incomes.toFixed(2);
  out = Number.isInteger(out)
    ? Math.abs(out).toFixed(0)
    : Math.abs(out).toFixed(2);
  interest = Number.isInteger(interest)
    ? interest.toFixed(0)
    : interest.toFixed(2);

  labelSumIn.textContent = formatCur(
    incomes,
    acc.locale,
    acc.currency
  );
  labelSumOut.textContent = formatCur(
    out,
    acc.locale,
    acc.currency
  );
  labelSumInterest.textContent = formatCur(
    interest,
    acc.locale,
    acc.currency
  );
};

//.......................

// const user = 'Steven Thomas Williams';
// const username = user.toLowerCase().split(' ').map((word) => word[0]).join('');
// console.log(username); //stw

const createUserNames = (accs) => {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((word) => word[0])
      .join('');
  });
};

createUserNames(accounts);
// console.log(accounts);

const updateUI = (acc) => {
  dispalyMovements(acc);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(
      2,
      0
    );
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // Log out the user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    time--;
  };

  let time = 120;

  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

let currentAccount, timer;

// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 1;

btnLogin.addEventListener('click', (e) => {
  // prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  // if (currentAccount?.pin === Number(inputLoginPin.value)) {
  if (currentAccount?.pin === +inputLoginPin.value) {
    labelWelcome.textContent = `Welcome back ${currentAccount.owner
      .split(' ')
      .at(0)
      .trim()}`;
    containerApp.style.opacity = 1;

    // clear input fields
    // inputLoginPin.value = inputLoginUsername.value = '';
    // inputLoginPin.blur();
    // inputLoginUsername.blur();

    [inputLoginPin, inputLoginUsername].forEach((input) => {
      input.value = '';
      input.blur();
    });

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      // month: '2-digit', // 08
      month: 'numeric', // 8
      // month: 'long', // July
      year: 'numeric',
      // year: '2-digit' //23
      // weekday: 'long', // short, narrow
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // 'sr-Latn'

    // const locale = navigator.language;
    // console.log(locale );

    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = String(now.getMonth() + 1).padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const minutes = `${now.getMinutes()}`.padStart(2, 0);

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;

    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    startLogOutTimer();

    updateUI(currentAccount);
  } else {
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `The account doesn't exist, please try again`;
  }
});

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const reciverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  currentAccount.movementsDates.push(
    new Date().toISOString()
  );
  reciverAcc.movementsDates.push(new Date().toISOString());

  if (
    amount > 0 &&
    reciverAcc &&
    currentAccount.balance >= amount &&
    reciverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);

    updateUI(currentAccount);

    // reset the timer

    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some(
      (mov) => mov >= amount * 0.1
    )
  ) {
    setTimeout(() => {
      currentAccount.movements.push(amount);

      currentAccount.movementsDates.push(
        new Date().toISOString()
      );

      updateUI(currentAccount);
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2000);
    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', (e) => {
  e.preventDefault();

  const isInputValid =
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin;

  // if (
  //   inputCloseUsername.value === currentAccount.username &&
  //   Number(inputClosePin.value) === currentAccount.pin
  // )

  if (isInputValid) {
    const index = accounts.findIndex((acc) => {
      return (
        acc.username === currentAccount.username &&
        acc.pin === currentAccount.pin
      );
    });
    // const index = accounts.indexOf(currentAccount);

    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
  labelWelcome.textContent = 'Log in to get started';
});

let sortedState = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  dispalyMovements(currentAccount, !sortedState);
  sortedState = !sortedState;
});
