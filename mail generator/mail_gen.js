var mailGen = {};
var x;
mailGen.generateMails = function () {
    x = mailGen.managerName[0];
    console.log(x);
}
    var managerNames = [ "Kaori", "Maya", "Mari", "Aya", "Hiroki", "Aileen", "Sayaka", "Rie", "Hasami", "Seung-yeon", "Kumiko", "Sanae", "Manami", "Yume", "Risa", "Hitomi", "Chinami", "Sophia", "Sayuri", "Ayano", "Haruka", "Ayaka" ];

    var managerName = "";
    var mailNaiyou = `Hello ${x},

    I hope all is well. This is just a reminder that the due date for the monthly e-mail is coming up.

    If you have any questions, please do not hesitate to e-mail me at [aburdick@servcorp.co.jp]. Or you can always call me at *905 8139.angular

    Thank you,

    Aaron`;



mailGen.generateMails();
