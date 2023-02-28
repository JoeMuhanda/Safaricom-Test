function solution(A) {
    // Filter out negative integers and 0
    A = A.filter(x => x > 0);
    
    // If the filtered list is empty, the smallest positive integer is 1
    if (A.length === 0) {
        return 1;
    }
    
    // Sort the list and find the smallest positive integer
    A.sort((a, b) => a - b);
    let smallestInt = 1;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === smallestInt) {
            smallestInt++;
        } else if (A[i] > smallestInt) {
            return smallestInt;
        }
    }
    
    // If all integers in the list are consecutive positive integers, 
    // the smallest missing positive integer is the next positive integer after the last element
    return A[A.length - 1] + 1;
}
