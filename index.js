//method function suhu
function Suhu(paraSuhu) {
  //deklarasi dan inisialisasi atribut
  let bilang = paraSuhu;
  let c, f, k, r, choice1;

  // START function sekunder menentukan hasil
  this.setHasil = function() {
      console.log("1. Celsius ");
      console.log("2. Fahrenheit ");
      console.log("3. Kelvin ");
      console.log("4. Reamur ");
      choice1 = prompt("Masukan Jenis Suhu\t: "); // inisialisasi atribut untuk menjadi kunci percabangan

      //Start Percabangan menentukan perhitungan konversi
      if (choice1 == 1) {
        c = bilang;
        f = (bilang * 9/5) + 32;
        k = (bilang * 1) + 273;
        r = bilang * 4/5;

      } else if (choice1 == 2) {
          c = (bilang * 9/5) - 32;
          f = bilang;
          k = (bilang * 9/5) - 32 + 273;
          r = (bilang * 9/4) - 32;

      } else if (choice1 == 3) {
          c = bilang - 273;
          f = (bilang * 9/5) + 32 - 273;
          k = bilang;
          r = (bilang * 5/4) - 273;

      } else if (choice1 == 4) {
          c = bilang * 5/4;
          f = (bilang * 9/4) + 32;
          k = (bilang * 5/4) + 273;
          r = bilang;

      } else {
        console.log("Input Anda Salah !");
      }
      //End
  }
  //END

  // function sekunder menampilkan hasil
  this.getHasil = function() {
      console.log("=== Hasil Konversi ===")
      console.log("Celsius\t\t: ", c);
      console.log("Fahrenheit\t: ", f);
      console.log("Kelvin\t\t: ", k);
      console.log("Reamur\t\t: ", r);
  }
}

//Method function panjang & massa lokal
function PanBer(paramPB) {
  //deklarasi dan inisialisasi atribut
  let input = paramPB;
  let k, h, d, mg, de, c, m, milih, choice2;

  //START function sekunder menampilkan daftar
  this.list = function(paramList) {
    milih = paramList;

    //Percabangan menentukan isi daftar
    if (milih == 1) {
      console.log("\nSatuan Panjang");
      console.log("1. Kilo Meter");
      console.log("2. Hekto Meter");
      console.log("3. Deka Meter");
      console.log("4. Meter");
      console.log("5. Desi Meter");
      console.log("6. Centi Meter");
      console.log("7. Mili Meter");

    } else if (milih == 2) {
      console.log("\nSatuan Berat");
      console.log("1. Kilo Gram");
      console.log("2. Hekto Gram");
      console.log("3. Deka Gram");
      console.log("4. Gram");
      console.log("5. Desi Gram");
      console.log("6. Centi Gram");
      console.log("7. Mili Gram");

    } else {
      console.log("Input Salah ");
    }

  }
  //END

  //START function sekunder menentukan hasil
  this.setHasil = function(paraChoice) {
    choice2 = paraChoice;

    if (choice2 == 1) {
      k = input;
      h = input * 10;
      d = input * 100;
      mg = input * 1000;
      de = input * 10000;
      c = input * 100000;
      m = input * 1000000;

    } else if (choice2 == 2) {
      k = input / 10;
      h = input;
      d = input * 10;
      mg = input * 100;
      de = input * 1000;
      c = input * 10000;
      m = input * 100000;

    }else if (choice2 == 3) {
      k = input / 100;
      h = input / 10;
      d = input;
      mg = input * 10;
      de = input * 100;
      c = input * 1000;
      m = input * 10000;

    } else if (choice2 == 4) {
      k = input / 1000;
      h = input / 100;
      d = input / 10;
      mg = input;
      de = input * 10;
      c = input * 100;
      m = input * 1000;

    } else if (choice2 == 5) {
      k = input / 10000;
      h = input / 1000;
      d = input / 100;
      mg = input / 10;
      de = input;
      c = input * 10;
      m = input * 100;

    } else if (choice2 == 6) {
      k = input / 100000;
      h = input / 10000;
      d = input / 1000;
      mg = input / 100;
      de = input / 10;
      c = input;
      m = input * 10;

    } else if (choice2 == 7) {
      k = input / 1000000;
      h = input / 100000;
      d = input / 10000;
      mg = input / 1000;
      de = input / 100;
      c = input / 10;
      m = input;

    }else {
      console.log("Input Anda Salah !");
    }

  }
  //END

  // function sekunder menampilkan hasil
  this.getHasil = function() {
    if (milih == 1) {
      console.log("Kilo Meter\t: " + k);
      console.log("Hekto Meter\t: " + h);
      console.log("Deka Meter\t: " + d);
      console.log("Meter\t\t: " + mg);
      console.log("Desi Meter\t: " + de);
      console.log("Centi Meter\t: " + c);
      console.log("Mili Meter\t: " + m);
    
    } else if (milih == 2) {
      console.log("Kilo Gram\t: " + k);
      console.log("Hekto Gram\t: " + h);
      console.log("Deka Gram\t: " + d);
      console.log("Gram\t\t: " + mg);
      console.log("Desi Gram\t: " + de);
      console.log("Centi Gram\t: " + c);
      console.log("Mili Gram\t: " + m);

    } 
  }
}

//Method function panjang & massa internasional
function PanBerInt(paraPBI) {
  //deklarasi dan inisialisasi atribut
  let input2 = paraPBI;
  let kg, yard, feet, inchi, meter, pound;

  //function sekunder menentukan & menampilkan hasil
  this.panjang = function() {
    //inisialisasi atribut
    yard = input2 * 1.09;
    feet = input2 * 3.3;
    inchi = input2 * 39.3701;

    console.log("\n");
    console.log("=== Hasil Konversi ===");
    console.log("Meter\t: " + input2);
    console.log("Yard\t: " + yard);
    console.log("Feet\t: " + feet);
    console.log("Inchi\t: " + inchi);
  }

  // function sekunder menentukan & menampilkan hasil
  this.berat = function() {
    pound = input2 * 2.2046;

    console.log("\n");
    console.log("=== Hasil Konversi ===")
    console.log("Kilo Gram\t: " + input2);
    console.log("Pound\t\t: " + pound);
  }
}

//Method function operasi bilangan
function Bilangan(paraBilang) {
  //deklarasi dan inisialisasi atribut dengan object Number
  var bil = new Number(paraBilang);

  //function sekunder menampilkan hasil
  this.getHasil = function() {
    console.log("\n");
    console.log("=== Hasil Konversi ===");
    console.log("Desimal\t\t: " + bil);
    console.log("Biner\t\t: " + bil.toString(2));
    console.log("Oktal\t\t: " + bil.toString(8));
    console.log("HexaDesimal\t: " + bil.toString(16));
  }
}

//deklarasi dan inisialisasi atribut
let suhu, bilangan, panBer, panBerInt;
let repeat = true;

//START LOOP Pengulangan Program
while (repeat == true) {
  console.log("\t<====================>");
  console.log("\n\t\tSelamat Datang");
  console.log("\n<============================>\n\n");
  
  console.log("a. Suhu");
  console.log("b. Panjang & Massa");
  console.log("c. Operasi Bilangan");
  console.log("d. Keluar");
  var pilih = prompt("Masukan Pilihan Konvertor\t: "); //Atribut kunci untuk percabangan
  console.log("\n")

  let repeat2 = true; //Atribut kunci untuk pengulangan
  switch(pilih) {
    case "a":
    //START Proses konversi suhu
      while(repeat2 == true) {
        console.log("< === Konvertor Suhu === >");
        var input3 = prompt("Masukan Nilai Suhu\t: ");
        suhu = new Suhu(input3);
        suhu.setHasil();
        console.log();
        suhu.getHasil();
        repeat2 = prompt("Apakah anda ingin mengulangi lagi ? (y/n)");
        if (repeat2 == "y") {
          repeat2 = true;
        } else {
          repeat2 = false;
        }
        console.log("\n\n");
      }
    //END
    break;

    case "b":
    //START Proses konversi Panjang & Massa
    while(repeat2 == true) {
      console.log("< === Konverter Panjang Dan Massa === >");
      console.log("1. Lokal")
      console.log("2. Internasional")
      var milih2 = prompt("Masukan Pilihan\t: ");

      switch(milih2) {
        //Start Konversi Lokal
        case "1":
          console.log("\n1. Panjang");
          console.log("2. Berat");
          var milih3 = prompt("Masukan Pilihan\t: ");

          var input4 = prompt("Masukan Nilai\t: ");
          panBer = new PanBer(input4);

          panBer.list(milih3);
          var choice3 = prompt("Masukan Satuan ");
          panBer.setHasil(choice3);

          console.log("\n=== Hasil Konversi ===");
          panBer.getHasil();

          repeat2 = prompt("Apakah anda ingin mengulangi lagi ? (y/n)");
          if (repeat2 == "y") {
            repeat2 = true;
          } else {
            repeat2 = false;
          }
          console.log("\n\n");
        //End
        break;

        case "2":
        //Start Konversi Internasional
          console.log("\n1. Panjang");
          console.log("2. Berat");
          milih3 = prompt("Masukan Pilihan\t: ");
          if (milih3 == 1) {
            input4 = prompt("Masukan Nilai\t: ");
            panBerInt = new PanBerInt(input4);
            panBerInt.panjang();

          } else if (milih3 == 2) {
            input4 = prompt("Masukan Nilai\t: ");
            panBerInt = new PanBerInt(input4);
            panBerInt.berat();

          } else {
            console.log("Input Anda Salah")
          }

          repeat2 = prompt("Apakah anda ingin mengulangi lagi ? (y/n)");
          if (repeat2 == "y") {
            repeat2 = true;
          } else {
            repeat2 = false;
          }
          console.log("\n\n");
        //End
        break;

        default:
        console.log("Inputan Anda Salah");
        repeat2 = prompt("Apakah anda ingin mengulangi lagi ? (y/n)");
          if (repeat2 == "y") {
            repeat2 = true;
          } else {
            repeat2 = false;
          }
          console.log("\n\n");
        break;
      }
    }
    //END
    break;

    case "c":
    //START Proses konversi operasi bilanganjkkl;
      while (repeat2 == true) {
        console.log("< === Konverter Operasi Bilangan === >");
        var bil2 = prompt("Masukan Bilangan Desimal\t: ");
        bilangan = new Bilangan(bil2);
        bilangan.getHasil();

        repeat2 = prompt("Apakah anda ingin mengulangi lagi ? (y/n)");
            if (repeat2 == "y") {
              repeat2 = true;
            } else {
              repeat2 = false;
            }
            console.log("\n\n");
      }
    //END
    break;

    case "d":
    //Proses keluar program
      repeat = false;
      console.log("TerimaKasih :)");
      
    break;

    default:
      console.log("Input Anda Salah, Harap Masukan Pilihan Kembali !");
    break;
  }
}
//END LOOP