import TweenMax from 'gsap/src/uncompressed/TweenMax';

var app = new Vue({
  el: '#app',
  data: {
    sum: 75000,
    time: 1,
    rate: 0,
    overpay: 0,
    payment: 0
  },
  computed: {
    rate() {
      if (this.sum < 300000)  return 8;
      if ((this.sum >= 300000) && (this.sum < 400000)) return 7;
      if ((this.sum >= 400000) && (this.sum < 500000)) return 6.5;
      if ((this.sum >= 500000) && (this.sum < 600000)) return 6;
      if (this.sum >= 600000) return 5.5;
    },
    overpay() {
      return (this.sum / 100) * this.rate;
    },
    payment() {
      return Math.round((this.sum / this.time) + this.overpay);
    },
  },
  watch: {
    payment: function(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
    }
  }
});
