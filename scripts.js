const modal = {
  open() {
    //abrir modal
    //adcionar a class active ao modal
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    //fechar modal
    //retirar a class active ao modal
    document.querySelector(".button.cancel").classList.remove("active");
  },
};

const transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -5000,
    date: "23/01/2022",
  },
  {
    id: 2,
    description: "Website",
    amount: 500000,
    date: "23/01/2022",
  },
  {
    id: 3,
    description: "Internet",
    amount: -20000,
    date: "23/01/2022",
  },
];

const Transaction = {
  incomes() {
    //somar as entradas
  },
  expenses() {
    //soma as saídas
  },
  total() {
    //entradas - saídas
  },
};

//Colocar os dados das trasações do js no html

const DOM = {
    
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index){
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        console.log(tr.innerHTML);

        DOM.transactionsContainer.appendChild(tr);
    },
    innerHTMLTransaction(transaction) {
        const html = `
        <td class="description">${transaction.description}</td>
        <td class="expense">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover Transação" />
        </td>
        `;

        return html;
    }
};

transactions.forEach((transaction) => DOM.addTransaction(transaction))

