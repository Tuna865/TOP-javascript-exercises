const palindromes = function (string) {
    // console.log('initial string:', string)
    
    let initStr = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:' '{}=\-_`~()]/g,"")
    // console.log('lowercased & no punc:', initStr)
  
    const array = initStr.split('')
    // console.log('array:', array)

    let revStr = array.reverse()
    // console.log('revStr:',revStr)

    let revArr = revStr.join('')
    // console.log('revArr:', revArr)
  
    if(revArr === initStr){
        return true
    }else return false
};

// Do not edit below this line
module.exports = palindromes;
