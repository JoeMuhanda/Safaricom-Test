def solution(A):
    # Filter out negative integers and 0
    A = list(filter(lambda x: x > 0, A))
    
    
    # If the filtered list is empty, the smallest positive integer is 1
    if not A:
        return 1
    
    # Sort the list and find the smallest positive integer
    A.sort()
    smallest_int = 1
    for i in A:
        if i == smallest_int:
            smallest_int += 1
        elif i > smallest_int:
            return smallest_int
   
 # If all integers in the list are consecutive positive integers, 
    # the smallest missing positive integer is the next positive integer after the last element
    return A[-1] + 1
#i just changed something
# i learnt how to clone git,github and vscode
# find me