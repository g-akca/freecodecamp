class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []

    def __str__(self):
        title = self.name.center(30, "*") + "\n"
        items = ""
        for entry in self.ledger:
            desc = entry["description"][:23]
            amt = f"{entry['amount']:.2f}"
            items += f"{desc:<23}{amt:>7}\n"

        total = f"Total: {self.get_balance():.2f}"
        return title + items + total

    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description})

    def withdraw(self, amount, description=""):
        if self.check_funds(amount):
            self.ledger.append({"amount": -amount, "description": description})
            return True

        return False

    def get_balance(self):
        return sum(item["amount"] for item in self.ledger)

    def transfer(self, amount, other_category):
        if self.check_funds(amount):
            self.withdraw(amount, f"Transfer to {other_category.name}")
            other_category.deposit(amount, f"Transfer from {self.name}")
            return True
        
        return False

    def check_funds(self, amount):
        return amount <= self.get_balance()

def create_spend_chart(categories):
    spent = []
    for category in categories:
        total = 0
        for item in category.ledger:
            if item["amount"] < 0:
                total += -item["amount"]
        spent.append(total)

    total_spent = sum(spent)
    percentages = [(s / total_spent) * 100 for s in spent]
    rounded = [int(p // 10) * 10 for p in percentages]

    chart = "Percentage spent by category\n"

    for i in range(100, -1, -10):
        chart += f"{i:>3}|"
        for percent in rounded:
            chart += " o " if percent >= i else "   "
        chart += " \n"

    chart += "    " + "-" * (3 * len(categories) + 1) + "\n"

    names = [category.name for category in categories]
    max_len = max(len(name) for name in names)

    for i in range(max_len):
        chart += "     "
        for name in names:
            chart += f"{name[i]}  " if i < len(name) else "   "
        chart += "\n"

    return chart.rstrip("\n")