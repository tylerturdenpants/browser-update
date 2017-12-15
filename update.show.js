"use strict";
var $buo_show = function() {
var op=window._buorgres;    
var jsv=24;
var tv=jsv;//"base";
var ll=op.ll;
var bb=$bu_getBrowser();
var burl=op.burl || "http://browser-update.org/";
if (!op.url) {
    if (op.l)
        op.url= burl+ll+"/update-browser.html"+(op.test?"?force_outdated=true":"")+"#"+tv+":"+op.pageurl;
    else
        op.url= burl+"update-browser.html"+(op.test?"?force_outdated=true":"")+"#"+tv+":"+op.pageurl;
}
/*
if (Math.random()*1000<1 && !op.test && !op.betatest) {
    var i = new Image();
    var txt=op["text_"+ll]||op.text||"";
    var extra=encodeURIComponent("frac="+frac+"&txt="+txt+"&apiver="+op.apiver);
    i.src="https://browser-update.org/count.php?what=noti&from="+bb.n+"&fromv="+bb.v + "&ref="+ escape(op.pageurl) + "&jsv="+jsv+"&tv="+tv+"&extra="+extra;
}
*/
function busprintf() {
    var args=arguments;
    var data = args[ 0 ];
    for( var k=1; k<args.length; ++k ) {
        data = data.replace( /%s/, args[ k ] );
    }
    return data;
}


var t={};
t.en='<b>Your web browser ({brow_name}) is out of date.</b> Update your browser for more security, speed and the best experience on this site. <a{up_but}>Update browser</a> <a{ignore_but}>Ignore</a>';


//t.af='';
t.ar='<b> متصفح الويب ({brow_name}) الخاص بك قديم.</b> قُم بتحديث متصفحك للحصول على مزيدٍ من الحماية والراحة وتجربة أفضل على هذا الموقع. <a{up_but}> تحديث المتصفح</a> <a{ignore_but}> تجاهل</a>';
t.bg='<b>Вашият браузър ({brow_name}) не е актуализиран.</b> Актуализирайте го за повече сигурност, удобство и най-добро изживяване на сайта. <a{up_but}>Актуализирайте браузъра</a> <a{ignore_but}>Игнорирайте</a>';
t.ca='El teu navegador (%s) està <b>desactualitzat.</b> Té <b>vulnerabilitats</b> conegudes i pot <b>no mostrar totes les característiques</b> d\'aquest i altres llocs web. <a%s>Aprèn a actualitzar el navegador</a>';
t.cs='<b>Váš webový prohlížeč ({brow_name}) je zastaralý .</b> Pro větší bezpečnost, pohodlí a optimální zobrazení této stránky si prosím svůj prohlížeč aktualizujte. <a{up_but}>Aktualizovat prohlížeč</a> <a{ignore_but}>Ignorovat</a>';
t.da='<b>Din netbrowser ({brow_name}) er forældet.</b> Opdater din browser for mere sikkerhed, komfort og den bedste oplevelse på denne side. <a{up_but}>Opdater browser</a> <a{ignore_but}>Ignorer</a>';
t.de='<b>Ihr Browser ({brow_name}) ist veraltet.</b> <span>Aktualisieren Sie Ihren Browser für mehr Sicherheit, Komfort und die einwandfreie Nutzung dieser Webseite.</span> <a{up_but}>Browser aktualisieren</a> <a{ignore_but}>Ignorieren</a>';
t.el='<b>Η έκδοση του προγράμματος περιήγησής σας ({brow_name}) είναι παλιά.</b> Ενημερώστε τον περιηγητή σας για περισσότερη ασφάλεια, άνεση και την βέλτιστη εμπειρία σε αυτή την ιστοσελίδα. <a{up_but}>Αναβάθμιση περιηγητή</a> <a{ignore_but}>Παράβλεψη</a>';
t.es='<b>Tu navegador web ({brow_name}) no está actualizado.</b> Actualiza tu navegador para tener más seguridad y comodidad y tener la mejor experiencia en este sitio. <a{up_but}>Actualizar navegador</a> <a{ignore_but}>Ignorar</a>';
//t.et='';
t.fa = 'مرورگر شما (%s) <b>از رده خارج شده</b> می باشد. این مرورگر دارای <b>مشکلات امنیتی شناخته شده</b> می باشد و <b>نمی تواند تمامی ویژگی های این</b> وب سایت و دیگر وب سایت ها را به خوبی نمایش دهد. <a%s>در خصوص گرفتن راهنمایی درخصوص نحوه ی به روز رسانی مرورگر خود اینجا کلیک کنید.</a>';
t.fi='<b>Selaimesi ({brow_name}) on vanhentunut.</b> Päivitä selaimesi parantaaksesi turvallisuutta, mukavuutta ja käyttökokemusta tällä sivustolla. <a{up_but}>Päivitä selain</a> <a{ignore_but}>Ohita</a>';
t.fr='<b>Votre navigateur web ({brow_name}) n\'est pas à jour.</b> Mettez votre navigateur à jour pour plus de sécurité, de confort et une expérience optimale sur ce site. <a{up_but}>Mettre le navigateur à jour</a> <a{ignore_but}>Ignorer</a>';
t.ga='Tá an líonléitheoir agat (%s) <b>as dáta.</b> Tá <b>laigeachtaí slándála</b> a bhfuil ar eolas ann agus b\'fhéidir <b>nach taispeánfaidh sé gach gné</b> den suíomh gréasáin seo ná cinn eile. <a%s>Foghlaim conas do líonléitheoir a nuashonrú</a>';
t.gl = 'O seu navegador (%s) está <b>desactualizado.</b> Ten coñecidos <b>fallos de seguranza</b> e podería <b>non mostrar tódalas características</b> deste e outros sitios web. <a%s>Aprenda como pode actualizar o seu navegador</a>';
t.he = 'הדפדפן שלך<b>הדפדפן שלך ({brow_name}) אינו מעודכן</b>. עדכן את הדפדפן שלך בשביל אבטחה טובה יותר, נוחיות והחוויה הטובה ביותר באתר הזה. <a{up_but}>עדכן דפדפן</a> <a{ignore_but}>התעלם</a>';
t.hi='यह वेबसाइट आपको याद दिलाना चाहती हैं: आपका ब्राउज़र (%s) <b> आउट ऑफ़ डेट </b> हैं। <a%s> और अधिक सुरक्षा, आराम और इस साइट पर सबसे अच्छा अनुभव करने लिए आपके ब्राउज़र को अपडेट करें</a>।';
//t.hr='';
t.hu='<b>Az ön ({brow_name}) böngészője elavult.</b> Frissítse a böngészőjét több biztonság, kényelem és a legjobb felhasználói élmény érdekében ezen az oldalon. <a{up_but}>Böngésző frissítése</a> <a{ignore_but}>Mellőzés</a>';
t.id='<b>Peramban web Anda ({brow_name}) sudah lawas.</b> Perbarui peramban Anda untuk pengalaman terbaik yang lebih aman dan nyaman di situs ini. <a{up_but}>Perbarui peramban</a> <a{ignore_but}>Abaikan</a>';
t.it='<b>Il suo browser web ({brow_name}) non è aggiornato.</b> Aggiorni il suo browser per ottenere maggiore sicurezza, comfort, e la migliore esperienza possibile su questo sito. <a{up_but}>Aggiorna il browser</a> <a{ignore_but}>Ignora</a>';
t.ja='<b>お使いのウェブブラウザ ({brow_name}) は古すぎます。</b>安全性と快適さを向上させ、このサイトで最高の体験が出来るよう、お使いのブラウザをアップデートしましょう。<a{up_but}>ブラウザをアップデートする</a> <a{ignore_but}>無視する</a>';
t.ko='<b>현재 귀하의 웹브라우저 ({brow_name})은(는) 구버전입니다.</b> 본 사이트의 향상된 보안 및 최고 품질의 편안한 서비스를 사용하기 위해서 브라우저를 업데이트해 주십시오. <a{up_but}>브라우저 업데이트</a> <a{ignore_but}>무시하기</a>';
//t.lt='';
t.lv='Jūsu pārlūkprogramma (%s) ir <b>novecojusi.</b>  Tai ir zināmas <b>drošības problēmas</b>, un tā var attēlot šo un citas  tīmekļa lapas <b>nekorekti.</b> <a%s>Uzzini, kā atjaunot savu pārlūkprogrammu</a>';
t.ms='<b>Pelayar web ({brow_name}) anda sudah usang.</b> Kemas kini pelayar anda untuk memperoleh lebih keselamatan, keselesaan dan pengalaman terbaik di tapak ini. <a{up_but}>Kemas kini pelayar</a> <a{ignore_but}>Abaikan</a>';
t.nl='<b>Uw webbrowser ({brow_name}) is verouderd.</b> Update uw browser voor meer veiligheid, comfort en de beste ervaring op deze site. <a{up_but}>Update browser</a> <a{ignore_but}>Negeer</a>';
t.no='<b>Nettleseren din,({brow_name}), er utdatert.</b> Oppdater nettleseren din for mer sikkerhet, komfort og den beste opplevelsen på denne siden. <a{up_but}>Oppdater nettleser</a> <a{ignore_but}>Ignorer</a>';
t.pl='<b>Państwa przeglądarka ({brow_name}) jest nieaktualna.</b> Aby zapewnić większe bezpieczeństwo, wygodę i komfort użytkowania w tej witrynie, proszę zaktualizować swoją przeglądarkę. <a{up_but}>Zaktualizuj przeglądarkę</a> <a{ignore_but}>Zignoruj</a>';
t.pt='<b>Seu navegador de internet ({brow_name}) está desatualizado.</b> Atualize seu navegador para obter mais segurança, conforto e a melhor experiência neste site. <a{up_but}>Atualizar navegador</a> <a{ignore_but}>Ignorar</a>';
t.ro='<b>Browserul dumneavoastră ({brow_name}) nu este actualizat.</b> Actualizați-vă browserul pentru securitate sporită, confort și cea mai bună experiență pe site. <a{up_but}>Actualizează browser</a><a{ignore_but}>Ignoră</a>';
t.ru='<b>Ваш веб-браузер ({brow_name}) устарел.</b> Обновите свой браузер, чтобы сделать пребывание на этом сайте более безопасным, комфортным и продуктивным. <a{up_but}>Обновить браузер</a> <a{ignore_but}>Игнорировать</a>';
t.sk='<b> Váš internetový prehliadač ({brow_name}) je zastaraný.</b> Aktualizujte váš prehliadač pre vyššiu bezpečnosť, komfort a najlepší zážitok na tejto stránke. <a{up_but}>Aktualizovať prehliadač</a><a{ignore_but}>Ignorovať</a>';
t.sl = 'Vaš brskalnik (%s) je <b>zastarel.</b> Ima več <b>varnostnih pomankljivosti</b> in morda <b>ne bo pravilno prikazal</b> te ali drugih strani. <a%s>Poglejte kako lahko posodobite svoj brskalnik</a>';
t.sq = 'Shfletuesi juaj (%s) është <b>ca i vjetër.</b> Ai ka <b>të meta sigurie</b> të njohura dhe mundet të <b>mos i shfaqë të gjitha karakteristikat</b> e kësaj dhe shumë faqeve web të tjera. <a%s>Mësoni se si të përditësoni shfletuesin tuaj</a>';
t.sr='Vaš pretraživač (%s) je <b>zastareo.</b> Ima poznate <b>sigurnosne probleme</b> i najverovatnije <b>neće prikazati sve funkcionalnisti</b> ovog i drugih sajtova. <a%s>Nauči više o nadogradnji svog pretraživača</a>';
t.sv='<b>Din webbläsare ({brow_name}) är föråldrad.</b> Uppdatera din webbläsare för bättre säkerhet, bekvämlighet och den bästa upplevelsen på den här sidan. <a{up_but}>Uppdatera webbläsare</a> <a{ignore_but}>Avstå</a>';
t.th='เว็บไซต์นี้อยากจะเตือนคุณ: เบราว์เซอร์ (%s) ของคุณนั้น <b>ล้าสมัยแล้ว</b> <a%s>ปรับปรุงเบราว์เซอร์ของคุณ</a> เพื่อเพิ่ม ความปลอดภัย ความสะดวกสบายและประสบการณ์ที่ดีที่สุดในเว็บไซต์นี้';
t.tr='<b>({brow_name}) internet tarayıcınız güncel değil.</b> Bu sitede daha fazla güvenlik, konfor ve en iyi deneyim için tarayıcınızı güncelleyin. <a{up_but}>Tarayıcıyı güncelle</a> <a{ignore_but}>Yoksay</a>';
t.uk='<b>Ваш браузер ({brow_name}) є застарілим.</b> Оновіть його заради безпечнішого, зручнішого та приємнішого перегляду цього та інших сайтів. <a{up_but}>Оновити</a> <a{ignore_but}>Скасувати</a>';
t.vi='<b>Trình duyệt web của bạn ({brow_name}) đã cũ.</b> Hãy nâng cấp trình duyệt của bạn để được an toàn và thuận lợi hơn đồng thời có được trải nghiệm tốt nhất với trang này. <a{up_but}>Nâng cấp trình duyệt</a> <a{ignore_but}>Bỏ qua</a>';
t.zh='<b>您的网页浏览器 ({brow_name}) 已过期。</b>更新您的浏览器，以提高安全性和舒适性，并获得访问本网站的最佳体验。<a{up_but}>更新浏览器</a> <a{ignore_but}>忽略</a>';
t["zh-tw"]='<b>您的網頁瀏覽器  ({brow_name}) 已經過時。</b> 請更新您的瀏覽器，以在此網站取得更安全、舒適的最佳瀏覽體驗。<a{up_but}>更新瀏覽器</a><a{ignore_but}>忽略</a>';


t=op["text_"+ll]||op.text||t[ll]||t.en;

var tar="";
if (op.newwindow)
    tar=' target="_blank" rel="noopener"';

var div = op.div = document.createElement("div");
div.id="buorg";
div.className="buorg";

var style='<style>.buorg {background: #FDF2AB no-repeat 14px center url(https://browser-update.org/img/small/'+bb.n+'.png);}</style>';
var style2='<style>.buorg {background-position: 8px 17px; position:absolute;position:fixed;z-index:111111; width:100%; top:0px; left:0px; border-bottom:1px solid #A29330; text-align:left; cursor:pointer;        background-color: #fff8ea;    font: 17px Calibri,Helvetica,Arial,sans-serif;    box-shadow: 0 0 5px rgba(0,0,0,0.2);}'
    +'.buorg div { padding: 11px 12px 11px 30px;  line-height: 1.7em; }'
    +'.buorg div a,.buorg div a:visited{ text-indent: 0; color: #fff; text-decoration: none; box-shadow: 0 0 2px rgba(0,0,0,0.4); padding: 1px 10px; border-radius: 4px; font-weight: normal; background: #5ab400;    white-space: nowrap;    margin: 0 2px; display: inline-block;}'
    +'#buorgig{ background-color: #edbc68;}'
    +'@media only screen and (max-width: 700px){.buorg div { padding:5px 12px 5px 9px; text-indent: 22px;line-height: 1.3em;}.buorg {background-position: 9px 8px;}}'
    +'@keyframes buorgfly {from {opacity:0;transform:translateY(-50px)} to {opacity:1;transform:translateY(0px)}}'
    +'.buorg { animation-name: buorgfly; animation-duration: 1s; animation-timing-function: ease-out;}</style>';

if (t.indexOf("{brow_name}")===-1) {//legacy style
    t=busprintf(t,bb.t,' id="buorgul" href="'+op.url+'"'+tar);

    style += '<style>.buorg {position:absolute;position:fixed;z-index:111111; width:100%; top:0px; left:0px; border-bottom:1px solid #A29330; text-align:left; cursor:pointer; font: 13px Arial,sans-serif;color:#000;}'
    +'.buorg div { padding:5px 36px 5px 40px; }'
    +'.buorg>div>a,.buorg>div>a:visited{color:#E25600; text-decoration: underline;}'
    +'#buorgclose{position:absolute;right:6px;top:0px;height:20px;width:12px;font:18px bold;padding:0;}'
    +'#buorga{display:block;}'
    +'@media only screen and (max-width: 700px){.buorg div { padding:5px 15px 5px 9px; }}</style>';
    div.innerHTML= '<div>'+t+'<div id="buorgclose"><a id="buorga">&times;</a></div></div>'+style;
    op.addmargin=true;
}
else {
    if (op.style === "bottom") {
        style2 += '<'+'style>.buorg {bottom:0; top:auto; border-top:1px solid #A29330; } @keyframes buorgfly {from {opacity:0;transform:translateY(50px)} to {opacity:1;transform:translateY(0px)}}</style>';
    }
    else if (op.style === "corner") {
        style2 += '<'+'style>.buorg { width:300px; top:50px; right:50px; left:auto; border:1px solid #A29330; } .buorg div b {display:block;} .buorg div span { display: block; } .buorg div a {margin: 4px 2px;}</style>';
    }
    else {
        op.addmargin=true;
    }
    t = t.replace("{brow_name}", bb.t).replace("{up_but}", ' id="buorgul" href="' + op.url + '"' + tar).replace("{ignore_but}", ' id="buorgig" href="'+burl+"block-ignore-browser-update-warning.html"+'" target="_blank"');
    div.innerHTML = '<div>' + t + '</div>' + style+style2;
}

op.text=t;
if (op.container) {
    op.container.appendChild(div);
    op.addmargin=false;
}
else
    document.body.insertBefore(div,document.body.firstChild);

div.onclick=function(){
    if (op.newwindow)
        window.open(op.url,"_blank");
    else
        window.location.href=op.url;
    op.setCookie(op.reminderClosed);
    op.onclick(op);
    return false;
};
try {
document.getElementById("buorgul").onclick = function(e) {
    e = e || window.event;
    if (e.stopPropagation) e.stopPropagation();
    else e.cancelBubble = true;
    op.div.style.display = "none";
    hm.style.marginTop = op.bodymt;    
    op.onclick(op);    
    return true;
};
}
catch(e) {}

if (op.addmargin) {
    var hm=document.getElementsByTagName("html")[0]||document.body;
    op.bodymt = hm.style.marginTop;
    hm.style.marginTop = (div.clientHeight)+"px";
}
(document.getElementById("buorga")||document.getElementById("buorgig")).onclick = function(e) {
    e = e || window.event;
    if (e.stopPropagation) e.stopPropagation();
    else e.cancelBubble = true;
    op.div.style.display = "none";
    if (op.addmargin)
        hm.style.marginTop = op.bodymt;
    op.onclose(op);
    op.setCookie(op.reminderClosed);
    
    if(ll==="en" && Math.random()*20<1) {
        op.setCookie(24*365);
        return true;
    }
    return false;
}

if (op.noclose) {
    var el=(document.getElementById("buorga")||document.getElementById("buorgig"));
    el.parentNode.removeChild(el);
}
op.onshow(op);

};

$buo_show();
