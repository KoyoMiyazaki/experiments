function Who(name) {
    this.name = name;
}
Who.prototype.getName = function() {
    console.log('Myname is ' + this.name);
}
let o = new Who('miya');
o.getName();