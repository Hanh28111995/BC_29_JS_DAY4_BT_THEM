document.getElementById("btn1").onclick = function () {
    var d = parseInt(document.getElementById("date").value);
    var m = parseInt(document.getElementById("month").value);
    var y = parseInt(document.getElementById("year").value);
    d++;
    if ((m == 1) || (m == 3) || (m == 5) || (m == 7) || (m == 8) || (m == 10) || (m == 12)) {
        if (d > 31) { d = 0; m++; }
    }
    if (m == 2) {
        if ((y % 4) == 0) { if (d > 29) { d = 0; m++; } }
        else { if (d > 28) { d = 0; m++; } }
    }
    if ((m == 4) || (m == 6) || (m == 9) || (m == 11)) {
        if (d > 30) { d = 0; m++; }
    }
    if (m > 12) { m = 1; y++; }
    document.getElementById("date").value = d;
    document.getElementById("month").value = m;
    document.getElementById("year").value = y;
};

document.getElementById("btn2").onclick = function () {
    var d = parseInt(document.getElementById("date").value);
    var m = parseInt(document.getElementById("month").value);
    var y = parseInt(document.getElementById("year").value);
    d--;
    if ((m == 2) || (m == 4) || (m == 6) || (m == 8) || (m == 9) || (m == 11) || (m == 1)) {
        if (d < 1) { d = 31; m--; }
    }
    if (m == 3) {
        if ((y % 4) == 0) { if (d < 1) { d = 29; m--; } }
        else { if (d < 1) { d = 28; m--; } }
    }
    if ((m == 5) || (m == 7) || (m == 10) || (m == 12)) {
        if (d < 1) { d = 30; m--; }
    }
    if (m < 1) { m = 12; y--; }
    document.getElementById("date").value = d;
    document.getElementById("month").value = m;
    document.getElementById("year").value = y;
};

//////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("btn3").onclick = function () {
    var m1 = parseInt(document.getElementById("month1").value);
    var y1 = parseInt(document.getElementById("year1").value);
    var songay = 0;
    if ((m1 == 1) || (m1 == 3) || (m1 == 5) || (m1 == 7) || (m1 == 8) || (m1 == 10) || (m1 == 12)) {
        songay = 31;
        document.getElementById("check2").value = "Th??ng n??y c?? " + songay + " ng??y";
    }
    if ((y1 % 4) == 0) {
        document.getElementById("check1").value = "Yes";
        if (m1 == 2) {
            songay = 29;
            document.getElementById("check2").value = "Th??ng n??y c?? " + songay + " ng??y";
        }
    }
    else {
        document.getElementById("check1").value = "No";
        if (m1 == 2) {
            songay = 28;
            document.getElementById("check2").value = "Th??ng n??y c?? " + songay + " ng??y";
        }
    }
    if ((m1 == 4) || (m1 == 6) || (m1 == 9) || (m1 == 11)) {
        songay = 30;
        document.getElementById("check2").value = "Th??ng n??y c?? " + songay + " ng??y";
    }
    if ((m1 > 12) || (m1 < 1)) { document.getElementById("check2").value = "Th??ng n??y kh??ng t???n t???i"; }
};

//////////////////////////////////////////////////////////////////////////////////////////
function dich(so) {
    switch (so) {
        case 0:
            return "";
        case 1:
            return " m???t";
        case 2:
            return " hai";
        case 3:
            return " ba";
        case 4:
            return " b???n";
        case 5:
            return " n??m";
        case 6:
            return " s??u";
        case 7:
            return " b???y";
        case 8:
            return " t??m";
        case 9:
            return " ch??n";
        // default: return "";
    }
}
document.getElementById("btn4").onclick = function () {
    var number = (document.getElementById("number3").value);
    var tram = Math.floor(number / 100);
    var donvi = number % 10;
    var chuc = (number - (tram * 100) - donvi) / 10;
    var tram1 = dich(tram);
    var chuc1 = dich(chuc);
    var donvi1 = dich(donvi);
    if ((donvi == 1) && (chuc > 1)) { donvi1 = " m???t"; }
    tram1 = tram1 + " tr??m";
    if (chuc == 0) { chuc1 =  " l???";}
    else {
            if (chuc == 1) { chuc1 = " m?????i"; }
            if ((chuc != 0)&&(chuc != 1)) { chuc1 = chuc1 + " m????i"; }
        }
    document.getElementById("check3").value = tram1 + chuc1 + donvi1;

}





  document.getElementById("btn7").onclick = function () {
    var KD = (document.getElementById("KD").value);
    var VD = (document.getElementById("VD").value);
    var KD1 = (document.getElementById("KD1").value);
    var VD1 = (document.getElementById("VD1").value);
    var KD2 = (document.getElementById("KD2").value);
    var VD2 = (document.getElementById("VD2").value);
    var KD3 = (document.getElementById("KD3").value);
    var VD3 = (document.getElementById("VD3").value);
    var L1 = Math.sqrt((KD1*KD1)-(KD*KD))+((VD1*VD1)-(VD*VD));
    var L2 = Math.sqrt((KD2*KD2)-(KD*KD))+((VD2*VD2)-(VD*VD));
    var L3 = Math.sqrt((KD3*KD3)-(KD*KD))+((VD3*VD3)-(VD*VD));
    if ((L1 > L2)&&(L1 > L3)) { document.getElementById("check7").value = "SV1 ??? xa tr?????ng nh???t" ;}
    if ((L3 > L2)&&(L3 > L1)) { document.getElementById("check7").value = "SV3 ??? xa tr?????ng nh???t" ;}
    if ((L2 > L1)&&(L2 > L3)) { document.getElementById("check7").value = "SV2 ??? xa tr?????ng nh???t" ;}
  }

