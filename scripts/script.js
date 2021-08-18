const Modal = {
  open() {
    document.querySelector('.modal-overlay').classList.add('active')
  },
  close() {
    document.querySelector('.modal-overlay').classList.remove('active')
  },
}

const Transaction = {
  all: [
    {
      description: 'Luz',
      amount: -59935,
      date: '23/01/2021',
    },
    {
      description: 'Salário',
      amount: 550067,
      date: '30/01/2021',
    },
    {
      description: 'Internet',
      amount: -200075,
      date: '15/01/2021',
    },
    {
      description: 'Cursos',
      amount: -10000,
      date: '25/01/2021',
    },
    {
      description: 'Investimentos',
      amount: 10000,
      date: '10/01/2021',
    },
  ],
  add(transaction) {
    Transaction.all.push(transaction)
    App.reload()
  },

  remove(index) {
    Transaction.all.splice(index, 1)
    App.reload()
  },

  incomes() {
    let income = 0
    Transaction.all.forEach((transaction) => {
      if (transaction.amount > 0) {
        income += transaction.amount
      }
    })
    return income
  },

  expenses() {
    let expense = 0
    Transaction.all.forEach((transaction) => {
      if (transaction.amount < 0) {
        expense += transaction.amount
      }
    })
    return expense
  },

  total() {
    return Transaction.incomes() + Transaction.expenses()
  },
}

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'),
  addTransaction(transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)
    DOM.transactionsContainer.appendChild(tr)
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

  updateBalance() {
    document.getElementById('incomeDisplay').innerHTML = Utils.formartCurrency(
      Transaction.incomes()
    )
    document.getElementById('expenseDisplay').innerHTML = Utils.formartCurrency(
      Transaction.expenses()
    )
    document.getElementById('totalDisplay').innerHTML = Utils.formartCurrency(
      Transaction.total()
    )
  },
  clearTransactions() {
    DOM.transactionsContainer.innerHTML = ''
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

const App = {
  init() {
    Transaction.all.forEach((transaction) => {
      DOM.addTransaction(transaction)
    })
    DOM.updateBalance()
  },
  reload() {
    DOM.clearTransactions()
    App.init()
  },
}

const Form = {
  description: document.querySelector('input#description'),
  amount: document.querySelector('input#amout'),
  date: document.querySelector('input#date'),

  getValues() {
    return {
      description: Form.description.value,
      amount: Form.amount.value,
      date: Form.date.value,
    }
  },

  validateFileds() {
    const { description, amount, date } = Form.getValues()
    console.log(description)
  },

  submit(event) {
    event.preventDefault()
    // verificar se todos os campos foram preenchidos
    Form.validateFileds()
    // formatar os dados para salvar

    // salvar

    // limpar formulário

    // fechar modal

    // atualizar a aplicação
  },
}

App.init()

Transaction.add({
  description: 'Extra',
  amount: 30000,
  date: '17/08/2021',
})

//Transaction.remove(0)
