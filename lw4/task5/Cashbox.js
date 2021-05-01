var Cashbox = {
  amount: 0,
  operationHistory: [],
  addPayment: function (payment) {
    if (this.validation(payment) || payment.amount <= 0) {
      console.log('amount not affected');
    } else {
      this.amount += payment.amount;
      var operation = `${this.dateTime()} - платёж на ${payment.amount} руб, операция: ${payment.info}`;
      this.operationHistory.push(operation);
      return `cashbox amount = ${this.amount}`;
    }
  },
  refundPayment: function (refund) {
    if (this.validation(refund) || this.amount - refund.amount < 0 || refund.amount <= 0) {
      console.log('amount not affected');
    } else {
      this.amount -= refund.amount;
      var operation = `${this.dateTime()} - возврат ${refund.amount} руб, операция: ${refund.info}`;
      this.operationHistory.push(operation);
      return `cashbox amount = ${this.amount}`;
    }
  },
  showHistory: function () {
    this.operationHistory.forEach((item, i) => console.log(`${i + 1}. ${item}`));
  },
  validation: (operation) => typeof (operation.amount) !== 'number' || typeof (operation.info) !== 'string',
  dateTime: function () {
    var date = new Date();
    var dateTime = {
      day: () => date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
      month: () => date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
      year: date.getFullYear(),
      hours: () => date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
      minutes: () => date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
    }
    var dateTimeString = `${dateTime.day()}.${dateTime.month()}.${dateTime.year} ${dateTime.hours()}:${dateTime.minutes()}`;
    return dateTimeString;
  },
};