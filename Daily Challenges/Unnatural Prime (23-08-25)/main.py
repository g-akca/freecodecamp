import math

def is_unnatural_prime(n):
    if (n < 0):
        n = -n
    if (n == 0 or n == 1):
        return False

    for i in range(2, math.floor(math.sqrt(n) + 1)):
        print(i)
        if n % i == 0:
            return False
    
    return True