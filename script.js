
const langSwitch = document.getElementById('lang-switch');
const title = document.getElementById('title');
const slogan = document.getElementById('slogan');
const products = document.getElementById('products');
const location = document.getElementById('location');
const contact = document.getElementById('contact');

let currentLang = 'fr';

const content = {
  fr: {
    title: 'Labé Shop',
    slogan: 'Le goût du monde à deux pas de chez vous.',
    products: {
      h2: 'Des produits frais d'Afrique et bien plus 🌍',
      p: 'Chez Labé Shop, nous vous proposons une large gamme de produits frais en provenance d'Afrique, incluant des boissons, des snacks et bien plus encore. Découvrez la richesse de notre culture à travers des produits authentiques et de qualité.'
    },
    location: {
      h2: '📍 Où nous trouver ?',
      p: 'Labé Shop est situé à <strong>Overwinningsstraat 46A, 2830 Willebroek, Belgique</strong>. Venez nous rendre visite, nous serons ravis de vous accueillir !'
    },
    contact: {
      h2: '📞 Contact',
      p: 'Téléphone : 0467648034<br>Email : contact@labeshop.com'
    },
    footer: '© 2025 Labé Shop. Tous droits réservés.'
  },
  nl: {
    title: 'Labé Shop',
    slogan: 'De smaak van de wereld vlak bij u.',
    products: {
      h2: 'Verse producten uit Afrika en meer 🌍',
      p: 'Bij Labé Shop bieden we een breed scala aan verse producten uit Afrika, inclusief drankjes, snacks en nog veel meer. Ontdek de rijkdom van onze cultuur door authentieke en kwaliteitsproducten.'
    },
    location: {
      h2: '📍 Waar vindt u ons?',
      p: 'Labé Shop is gevestigd op <strong>Overwinningsstraat 46A, 2830 Willebroek, België</strong>. Kom gerust langs, we verwelkomen u graag!'
    },
    contact: {
      h2: '📞 Contact',
      p: 'Telefoon: 0467648034<br>Email: contact@labeshop.com'
    },
    footer: '© 2025 Labé Shop. Alle rechten voorbehouden.'
  }
};

langSwitch.addEventListener('click', () => {
  currentLang = currentLang === 'fr' ? 'nl' : 'fr';
  langSwitch.textContent = currentLang === 'fr' ? 'NL' : 'FR';
  updateContent();
});

function updateContent() {
  const lang = content[currentLang];
  title.textContent = lang.title;
  slogan.textContent = lang.slogan;
  products.querySelector('h2').textContent = lang.products.h2;
  products.querySelector('p').textContent = lang.products.p;
  location.querySelector('h2').textContent = lang.location.h2;
  location.querySelector('p').innerHTML = lang.location.p;
  contact.querySelector('h2').textContent = lang.contact.h2;
  contact.querySelector('p').innerHTML = lang.contact.p;
  document.querySelector('footer p').textContent = lang.footer;
}

updateContent();
