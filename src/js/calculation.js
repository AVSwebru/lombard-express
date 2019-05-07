import TweenMax from 'gsap/src/uncompressed/TweenMax';

var app = new Vue({
  el: '#app',
  data: {
    sum: 800000,
    time: 1,
    inputSum: '800 000 ₽',
    inputTime: '1 мес.',
  },
  computed: {
    rate() {
      if (this.sum >= 800000 && this.sum <= 2000000) return 10;
      if (this.sum > 2000000 && this.sum <= 4000000) return 8;
      if (this.sum > 4000000 && this.sum <= 6000000) return 6.5;
      if (this.sum > 6000000 && this.sum <= 10000000) return 6;
      if (this.sum > 10000000) return 5;
    },
    rateOutput() {
      return `${this.rate} %`;
    },
    overpay() {
      return (this.sum / 100) * this.rate;
    },
    payment() {
      return Math.round(this.sum / this.time + this.overpay);
    },
    paymentOutput() {
      return `${this.formatSum(this.payment)} ₽`;
    },
  },
  watch: {
    sum() {
      this.inputSum = `${this.formatSum(this.sum)} ₽`;
    },
    time() {
      this.inputTime = `${this.time} мес.`;
    },
  },
  methods: {
    purifyInput(input) {
      return input.replace(/\D/g, '');
    },
    formatSum(sum) {
      var sumString = String(sum)
        .split('')
        .reverse();
      for (let i = 1; i <= Math.floor(sumString.length / 3); i++) {
        if (i > 1) {
          sumString.splice(i * 3 + 1, 0, ' ');
        } else {
          sumString.splice(i * 3, 0, ' ');
        }
      }
      return sumString
        .reverse()
        .join('')
        .trim();
    },
    setInputSum(event) {
      var sumCount = this.purifyInput(event.target.value);
      if (sumCount > 10000000) {
        this.sum = 10000000;
      } else {
        if (sumCount < 800000) {
          this.sum = 800000;
        } else {
          this.sum = sumCount;
        }
      }
      this.inputSum = `${this.formatSum(this.sum)} ₽`;
    },
    setInputTime(event) {
      var timeCount = this.purifyInput(event.target.value);
      if (timeCount > 24) {
        this.time = 24;
      } else {
        if (timeCount < 1) {
          this.time = 1;
        } else {
          this.time = timeCount;
        }
      }
      this.inputTime = `${this.time} мес.`;
    },
  },
});
