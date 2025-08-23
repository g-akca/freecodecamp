def decode(message, shift):
    decoded = ""
    for c in message:
        if c.isalpha():
            if c.isupper():
                base = ord('A')
            else:
                base = ord('a')
            decoded += chr((ord(c) - base - shift) % 26 + base)
        else:
            decoded += c
    
    return decoded
