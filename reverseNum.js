var reverse = function(x) {
    
        let splitNum = x.toString().split("");
        let reverse = splitNum.reverse();
        let revereseJoin =  reverse.join("");
        let covertNum = parseInt(revereseJoin);
        let numsolution = covertNum * Math.sign(x);
        if (numsolution > 2147483647 || numsolution < -2147483647) {
            return 0
        } else return numsolution;
    
    
};
