function toGerman() {
    document.getElementById('menue').innerHTML = 'MENÜ';
    document.getElementById('location').innerHTML = 'ANFAHRT';
    document.getElementById('aboute').innerHTML = 'ÜBER';
    document.getElementById('headline-slogan').innerHTML = 'DAS BESTE RAMEN DER STADT';
    document.getElementById('how-to-order').innerHTML = 'SO BESTELLST DU';
    document.getElementById('pick-noodle1').innerHTML = 'Wähle';
    document.getElementById('pick-noodle2').innerHTML = 'Dein Nudeln';
    document.getElementById('pick-noodle-resp').innerHTML = 'Wähle Dein Nudeln';
    document.getElementById('pick-broth1').innerHTML = 'Wähle';
    document.getElementById('pick-broth2').innerHTML = 'Deine Brühe';
    document.getElementById('pick-broth-resp').innerHTML = 'Wähle Deine Brühe';
    document.getElementById('add-toppings').innerHTML = 'Wähle Deine Beilagen';
    document.getElementById('add-toppings-resp').innerHTML = 'Wähle Deine Beilagen';
    document.getElementById('our-menu').innerHTML = 'UNSER MENÜ';
    document.getElementById('chicken1').innerHTML = 'HÄHNCHEN';
    document.getElementById('chicken2').innerHTML = 'HÄHNCHEN'
    document.getElementById('chicken3').innerHTML = 'HÄHNCHEN'
    document.getElementById('beef1').innerHTML = 'RINDFLEISCH';
    document.getElementById('beef2').innerHTML = 'RINDFLEISCH';
    document.getElementById('beef3').innerHTML = 'RINDFLEISCH';
    document.getElementById('shrimp1').innerHTML = 'GARNELEN';
    document.getElementById('shrimp2').innerHTML = 'GARNELEN';
    document.getElementById('shrimp3').innerHTML = 'GARNELEN';
    document.getElementById('find-us-at').innerHTML = 'FINDE UNS HIER';
    document.getElementById('adress').innerHTML = 'Kapuzinerstraße 31, 80337 München';
    document.getElementById('attribution').innerHTML = 'Icons kreiert von <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> auf <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>';
}

function showMenu() {
    document.getElementById('side-menu').classList.add('show-overlay-menu');
}

function closeMenu() {
    document.getElementById('side-menu').classList.remove('show-overlay-menu');
}