const Modal = {
  open() {
    document.querySelector('.modal-overlay').classList.add('active')
  },
  close() {
    document.querySelector('.modal-overlay').classList.remove('active')
  },
}

const transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -59935,
    date: '23/01/2021',
  },
  {
    id: 2,
    description: 'Salário',
    amount: 550067,
    date: '30/01/2021',
  },
  {
    id: 3,
    description: 'Internet',
    amount: -200075,
    date: '15/01/2021',
  },
  {
    id: 4,
    description: 'Cursos',
    amount: -10000,
    date: '25/01/2021',
  },
  {
    id: 5,
    description: 'Investimentos',
    amount: 10000,
    date: '10/01/2021',
  },
]

const Transaction = {
  incomes() {
    // somar as entradas
  },
  expenses() {
    // somar as saídas
  },
  total() {
    // incomes - expenses
  },
}

const Grid = {
  transactionsContainer: document.querySelector('#data-table tbody'),
  addTransaction(transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = Grid.innerHTMLTransaction(transaction)
    Grid.transactionsContainer.appendChild(tr)
  },
  innerHTMLTransaction(transaction) {
    const CSSclass = transaction.amount > 0 ? 'income' : 'expense'

    const amount = Utils.formartCurrency(transaction.amount)

    const table = `
      <td class="description">${transaction.description}</td>
      <td class="${CSSclass}">${amount}</td>
      <td class="date">${transaction.date}</td>
      <td class="">
        <img src="./assets/minus.svg" alt="Remove transation image" />
      </td>
    `

    return table
  },
}

const Utils = {
  formartCurrency(value) {
    const signal = Number(value) < 0 ? '-' : ''

    value = String(value).replace(/\D/g, '')
    value = Number(value) / 100
    value = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    return signal + value
  },
}

transactions.forEach(function (transaction) {
  Grid.addTransaction(transaction)
})
