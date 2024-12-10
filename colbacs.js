const countSum = (a, b, c) => {
    const sum = a - b + c
    return sum
}


const makeMassage = (countSumCallBack, n1, n2, n3 ) => {
    const result = countSumCallBack(n1, n2, n3)
    const message = `загальна сума чисел ${result}`
    
    return message


}
console.log(makeMassage(countSum, 7, 9, 3))
console.log(makeMassage(countSum, 9, 9, 2))