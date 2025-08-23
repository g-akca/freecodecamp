import math

def is_balanced(s):
    half = math.ceil(len(s) / 2)
    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    balance = 0

    for i in range(0, len(s) // 2):
        if (s[i] in vowels):
            balance = balance + 1
        if (s[half + i] in vowels):
            balance = balance - 1
    
    if balance == 0:
        return True
    else:
        return False
    