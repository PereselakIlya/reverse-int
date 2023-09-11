module.exports = function reverse (n) {
    var output="";
    var nstr=n.toString();
    var nchararr=nstr.split('');
    for(var i=nchararr.length;i>=0;--i){
        output+=nchararr[i];
    }
    output=output.replace(undefined,"");
    output=output.replace(/-/i,"");
    return output;
}
