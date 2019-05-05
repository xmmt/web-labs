document.body.setAttribute("bgcolor", "#000000");
var canv = document.createElement('canvas');
canv.width = 600;
canv.height = 600;
canv.setAttribute('id', 'collage');
canv.style.position = 'fixed';
canv.style.top = '50%';
canv.style.left = '50%';
canv.style.marginTop = '-300px';
canv.style.marginLeft = '-300px';
canv.innerHTML = "Обновите браузер";
document.body.appendChild(canv);
var ctx     = canv.getContext('2d'),
    pic1    = new Image(),
    pic2    = new Image(),
    pic3    = new Image(),
    pic4    = new Image(),
    x       = Math.floor(Math.random() * 300 + 150),
    y       = Math.floor(Math.random() * 300 + 150);
pic1.src = `https://source.unsplash.com/collection/1127163/${x}x${y}/?sig=1`;
pic2.src = `https://source.unsplash.com/collection/1127163/${x}x${600 - y}/?sig=2`;
pic3.src = `https://source.unsplash.com/collection/1127163/${600 - x}x${y}/?sig=3`;
pic4.src = `https://source.unsplash.com/collection/1127163/${600 - x}x${600 - y}/?sig=4`;
pic1.onload = function() {
    ctx.drawImage(pic1, 0, 0);
}
pic2.onload = function() {
    ctx.drawImage(pic2, 0, y);
}
pic3.onload = function() {
    ctx.drawImage(pic3, x, 0);
}
pic4.onload = function() {
    ctx.drawImage(pic4, x, y);
}
window.onload = function() {
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(0, 0, canv.width, canv.height);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=ru', false);
    xhr.send();
    ctx.font = "700 30px Arial";
    ctx.fillStyle = '#fff';
    var quote = JSON.parse(xhr.responseText),
        words = quote.quoteText.split(' '),
        wordsCount = words.length,
        raw = "",
        raws = [];                
    for (var i = 0; i < wordsCount; ++i) {
        newRaw = raw + words[i] + " ";
        if (ctx.measureText(newRaw).width > 460) {
            raws.push(raw);
            raw = words[i] + " ";
        } else
            raw = newRaw;
    }
    raws.push(raw);
    var marginTop = 300 - raws.length * 15;
    for (var i = 0; i < raws.length; ++i) {
        var marginLeft = 300 - ctx.measureText(raws[i]).width * 0.5;
        ctx.fillText(raws[i], marginLeft, marginTop);
        marginTop += 30;
    }
    ctx.font = "italic 700 30px Arial";
    ctx.fillText(quote.quoteAuthor, 70, marginTop + 40);
}