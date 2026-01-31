let poll = new Map();

function addOption(option) {
  if (option == "") return "Option cannot be empty.";
  else if (!poll.has(option)) {
    poll.set(option, new Set());
    return 'Option "' + option + '" added to the poll.';
  }

  return 'Option "' + option + '" already exists.';
}

function vote(option, voterId) {
  if (!poll.has(option)) return 'Option "' + option + '" does not exist.';
  else if (poll.get(option).has(voterId)) return 'Voter ' + voterId + ' has already voted for "' + option + '".';

  poll.get(option).add(voterId);
  return 'Voter ' + voterId + ' voted for "' + option + '".';
}

function displayResults() {
  let result = "Poll Results:\n";
  poll.forEach((value, key) => result += key + ": " + value.size + " votes\n");
  return result.trim();
}

addOption("Turkey");
addOption("Morocco");
addOption("Malaysia");

vote("Turkey", 1);
vote("Turkey", 2);
vote("Morocco", 3);
