def hanoi_solver(n):
    rod_1 = list(range(n, 0, -1))
    rod_2 = []
    rod_3 = []
    rods = [rod_1, rod_2, rod_3]
    states = []

    def move(disks, src, aux, tgt):
        if disks == 0:
            return
        move(disks - 1, src, tgt, aux)
        tgt.append(src.pop())
        states.append(f"{rods[0]} {rods[1]} {rods[2]}")
        move(disks - 1, aux, src, tgt)

    states.append(f"{rods[0]} {rods[1]} {rods[2]}")

    move(n, rod_1, rod_2, rod_3)

    return "\n".join(states)
