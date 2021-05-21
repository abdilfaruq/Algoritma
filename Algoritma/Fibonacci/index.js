var i;
var a = 0;
var b = 1;

for (i = 0; i <= 20; i++) {
  if (i < 1) {
      hasil = i;
  } else {
      hasil = a + b;
      b = a;
      a = hasil;
  }
  console.log(hasil);
}