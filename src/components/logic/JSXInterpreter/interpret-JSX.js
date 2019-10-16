export default function interpretJSX (input) {
  console.log(input)
  console.log(input.match(/<{2}[a-zA-Z]+(.*|\s\/)>{2}/g))

}
