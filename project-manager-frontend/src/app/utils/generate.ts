var rand = function() {
  return Math.random().toString(36).substr(2); // remove `0.`
};

export var token = function() {
  return rand() + rand(); // to make it longer
};
