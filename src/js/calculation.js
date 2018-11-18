import TweenMax from 'gsap/src/uncompressed/TweenMax';

var app = new Vue({
  el: '#app',
  data: {
    inputSum: '75 000 ₽',
    sum: 75000,
    inputTime: '1 мес.',
    time: 1
  },
  computed: {
    rate() {
      if (this.sum < 300000)  return 8;
      if ((this.sum >= 300000) && (this.sum < 400000)) return 7;
      if ((this.sum >= 400000) && (this.sum < 500000)) return 6.5;
      if ((this.sum >= 500000) && (this.sum < 600000)) return 6;
      if (this.sum >= 600000) return 5.5;
    },
    rateOutput() {
      return `${this.rate}%`;
    },
    overpay() {
      return (this.sum / 100) * this.rate;
    },
    payment() {
      return Math.round((this.sum / this.time) + this.overpay);
    },
    paymentOutput() {
      return `${this.formatSum(this.payment)} ₽`;
    },
  },
  watch: {
    inputSum() {
      var sumCount = this.purifyInput(this.inputSum);
      if (sumCount > 1000000) {
        this.sum = 1000000;
      } else
      if (sumCount < 75000){
        this.sum = 75000;
      } else {
        this.sum = sumCount;
      }
    },
    inputTime() {
      var timeCount = this.purifyInput(this.inputTime);
      if (timeCount > 36) {
        this.time = 36;
      } else
      if (timeCount < 1){
        this.time = 1;
      } else {
        this.time = timeCount;
      }
    },
    sum() {
      this.inputSum = `${this.formatSum(this.sum)} ₽`;
    },
    time() {
      this.inputTime = `${this.time} мес.`;
    }
  },
  methods: {
    purifyInput(input) {
      return input.replace(/\D/g, '');
    },
    formatSum(sum) {
      var sumString = String(sum).split('').reverse();

      for (let i = 1; i <= Math.floor(sumString.length / 3); i++) {
        if (i > 1) {
          sumString.splice(i * 3 + 1, 0, ' ');
        } else {
          sumString.splice(i * 3, 0, ' ');
        }
      }
      return sumString.reverse().join('').trim();
    }
  }
});
