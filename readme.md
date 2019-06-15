# Get value at zero

**Есть вопрос**

Изначально, строка 20 кода содержала prompt:

const initialArgument = + prompt('Enter your initial number', 0);


В принципе, особо не ожидал, что этот код пройдет тесты...
Но, неожиданно для меня, две ошибки выдал Линтер.
1. О том, что пробел после унарного "+" не нужен. - Еще ладно, хотя чем ему этот пробел помешал?..
2. error  'prompt' is not defined - А вот эта ошибка поставила меня в тупик... Что не так с prompt?

Когда проверял работоспособность кода на codepen - все отлично работало. Код с codepen-а ниже:

function getValueAtZero(initialFunction) {
  const initialArgument = + prompt('Enter your initial number', 0);
  return initialFunction(initialArgument);
}

const inF = function (arg) {
  return arg + 405;
}

console.log(getValueAtZero(inF));

