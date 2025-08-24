def get_strength(c):
    if c.isalpha():
        if c.islower():
            return 1 + ord(c) - ord('a')
        else:
            return 1 + ord(c) - ord('A')
    elif c.isdigit():
        return int(c)
    else:
        return 0

def battle(my_army, opposing_army):
    n, m = len(my_army), len(opposing_army)
    if n > m:
        return "Opponent retreated"
    elif m > n:
        return "We retreated"
    else:
        my_wins, opposing_wins = 0, 0

        for i in range(n):
            my_strength = get_strength(my_army[i])
            opposing_strength = get_strength(opposing_army[i])
            if my_strength > opposing_strength:
                my_wins += 1
            elif opposing_strength > my_strength:
                opposing_wins += 1

        if my_wins > opposing_wins:
            return "We won"
        elif opposing_wins > my_wins:
            return "We lost"
        else:
            return "It was a tie"
