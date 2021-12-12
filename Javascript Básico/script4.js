// =    x = y   x = y
// +=   x += y  x = x + y
// -=   x -= y  x = x - y
// *=   x *= y  x = x * y
// /=   x /= y  x = x / y
// %=   x %= y  x = x % y

var a = 30;

a += 2; // esta linha é a mesma coisa que a = a + 2

a++; // esta linha é a mesma coisa que a = a + 1, que é igual a += 1

console.log(a);
