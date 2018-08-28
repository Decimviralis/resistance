
export default {
	name: 'mainPage',
  
  data : function () {
    return {
      coord: 0,
      testInput: null,
      newX: 0,
      blueBlockWidth: 0,
      inputValue: 0,
      widthDifference: 0

    }
  },

  created() {
    this.getFirstCoords()

  },

  mounted() {
    this.getFirstCoords()
    console.log(document.getElementById("blue").offsetLeft);
    this.newX = document.getElementById("green").offsetLeft;
    console.log(document.getElementById("green").offsetWidth);

  },

  methods: {
      setCoord(e) {
        if(e.keyCode == 13) {
          console.log(e.target.offsetLeft)
          console.log(this.newX)
          console.log(this.inputValue)
          this.widthDifference = this.inputValue - document.getElementById("green").offsetWidth;
          console.log(this.widthDifference)
        } else {
          console.log("govno")
        }

     },

    getFirstCoords() {
        let self = this;
        if(document.getElementById("blue")) {
          let elem = document.getElementById("blue");
          self.newX = elem.offsetX
        }
    }
  }
};
