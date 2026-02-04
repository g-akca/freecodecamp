def number_pattern(n):
    if not isinstance(n, int):
        return "Argument must be an integer value."
    if n < 1:
        return "Argument must be an integer greater than 0."

    result = "1"
    for i in range(2, n + 1):
        result += f" {i}"
        
    return result