var Stack = (function(){
  function Stack() {
    this.dataStore = [];
    this.top = 0;
  }
  Stack.prototype.push = function(item) {
    this.dataStore.push(item);
  }
  Stack.prototype.pop = function() {
    this.dataStore.pop();
    // your code here
  }
  Stack.prototype.display = function() {
    // your code here
    for(let i=0; i < this.dataStore.length; i++){
      console.log(this.dataStore[i]);
    }
  }
  return Stack;
})();
module.exports = Stack;