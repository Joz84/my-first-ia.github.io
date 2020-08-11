function createMessage(answer) {
  output = "La réponse de l'utilisateur est : <b>" + answer + "</b>";
  return output
}

var form = document.querySelector("#my-form");
console.log(form);

var message = document.querySelector("#ia-message");
var counter = document.querySelector("#counter");
var count = 0;

form.addEventListener("submit", (event) => {
  var input = form.querySelector("#user-answer");
  answer = input.value
  message.innerText = createMessage(answer);
  count = count += 1
  counter.innerText = count;
});
