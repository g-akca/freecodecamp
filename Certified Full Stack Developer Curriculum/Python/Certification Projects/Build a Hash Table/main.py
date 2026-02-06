class HashTable:
    def __init__(self):
        self.collection = {}

    def hash(self, string):
        return sum(ord(char) for char in string)

    def add(self, key, value):
        index = self.hash(key)
        if index not in self.collection:
            self.collection[index] = {}

        self.collection[index][key] = value

    def remove(self, key):
        index = self.hash(key)
        if index not in self.collection or key not in self.collection[index]:
            return

        self.collection[index].pop(key)
        
        if not self.collection[index]:
            self.collection.pop(index)

    def lookup(self, key):
        index = self.hash(key)
        if index in self.collection and key in self.collection[index]:
            return self.collection[index][key]

        return None
