import React from 'react';
import axios from 'axios';
import { Match, Redirect } from 'react-router';
import ProfileLanding from './ProfileLanding';
import SearchMeals from './SearchMeals';
import ReviewMeals from './ReviewMeals';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      nutrIds: {
        "203": ["g", "Protein"],
        "204": ["g", "Total lipid (fat)"],
        "205": ["g", "Carbohydrate, by difference"],
        "207": ["g", "Ash"],
        "208": ["kcal", "Energy"],
        "209": ["g", "Starch"],
        "210": ["g", "Sucrose"],
        "211": ["g", "Glucose (dextrose)"],
        "212": ["g", "Fructose"],
        "213": ["g", "Lactose"],
        "214": ["g", "Maltose"],
        "221": ["g", "Alcohol, ethyl"],
        "255": ["g", "Water"],
        "257": ["g", "Adjusted Protein"],
        "262": ["mg", "Caffeine"],
        "263": ["mg", "Theobromine"],
        "268": ["kJ", "Energy (kJ)"],
        "269": ["g", "Sugars, total"],
        "287": ["g", "Galactose"],
        "291": ["g", "Fiber, total dietary"],
        "301": ["mg", "Calcium, Ca"],
        "303": ["mg", "Iron, Fe"],
        "304": ["mg", "Magnesium, Mg"],
        "305": ["mg", "Phosphorus, P"],
        "306": ["mg", "Potassium, K"],
        "307": ["mg", "Sodium, Na"],
        "309": ["mg", "Zinc, Zn"],
        "312": ["mg", "Copper, Cu"],
        "313": ["µg", "Fluoride, F"],
        "315": ["mg", "Manganese, Mn"],
        "317": ["µg", "Selenium, Se"],
        "318": ["IU", "Vitamin A, IU"],
        "319": ["µg", "Retinol"],
        "320": ["µg", "Vitamin A, RAE"],
        "321": ["µg", "Carotene, beta"],
        "322": ["µg", "Carotene, alpha"],
        "323": ["mg", "Vitamin E (alpha-tocopherol)"],
        "324": ["IU", "Vitamin D"],
        "325": ["µg", "Vitamin D2 (ergocalciferol)"],
        "326": ["µg", "Vitamin D3 (cholecalciferol)"],
        "328": ["µg", "Vitamin D (D2 + D3)"],
        "334": ["µg", "Cryptoxanthin, beta"],
        "337": ["µg", "Lycopene"],
        "338": ["µg", "Lutein + zeaxanthin"],
        "341": ["mg", "Tocopherol, beta"],
        "342": ["mg", "Tocopherol, gamma"],
        "343": ["mg", "Tocopherol, delta"],
        "344": ["mg", "Tocotrienol, alpha"],
        "345": ["mg", "Tocotrienol, beta"],
        "346": ["mg", "Tocotrienol, gamma"],
        "347": ["mg", "Tocotrienol, delta"],
        "401": ["mg", "Vitamin C, total ascorbic acid"],
        "404": ["mg", "Thiamin"],
        "405": ["mg", "Riboflavin"],
        "406": ["mg", "Niacin"],
        "410": ["mg", "Pantothenic acid"],
        "415": ["mg", "Vitamin B-6"],
        "417": ["µg", "Folate, total"],
        "418": ["µg", "Vitamin B-12"],
        "421": ["mg", "Choline, total"],
        "428": ["µg", "Menaquinone-4"],
        "429": ["µg", "Dihydrophylloquinone"],
        "430": ["µg", "Vitamin K (phylloquinone)"],
        "431": ["µg", "Folic acid"],
        "432": ["µg", "Folate, food"],
        "435": ["µg", "Folate, DFE"],
        "454": ["mg", "Betaine"],
        "501": ["g", "Tryptophan"],
        "502": ["g", "Threonine"],
        "503": ["g", "Isoleucine"],
        "504": ["g", "Leucine"],
        "505": ["g", "Lysine"],
        "506": ["g", "Methionine"],
        "507": ["g", "Cystine"],
        "508": ["g", "Phenylalanine"],
        "509": ["g", "Tyrosine"],
        "510": ["g", "Valine"],
        "511": ["g", "Arginine"],
        "512": ["g", "Histidine"],
        "513": ["g", "Alanine"],
        "514": ["g", "Aspartic acid"],
        "515": ["g", "Glutamic acid"],
        "516": ["g", "Glycine"],
        "517": ["g", "Proline"],
        "518": ["g", "Serine"],
        "521": ["g", "Hydroxyproline"],
        "573": ["mg", "Vitamin E, added"],
        "578": ["µg", "Vitamin B-12, added"],
        "601": ["mg", "Cholesterol"],
        "605": ["g", "Fatty acids, total trans"],
        "606": ["g", "Fatty acids, total saturated"],
        "607": ["g", "butanoic acid (butyric acid), 4:0", "sat"],
        "608": ["g", "hexanoic acid (caproic acid), 6:0", "sat"],
        "609": ["g", "octanoic acid (caprylic acid), 8:0", "sat"],
        "610": ["g", "decanoic acid (capric acid), 10:0", "sat"],
        "611": ["g", "dodecanoic acid (lauric acid), 12:0", "sat"],
        "612": ["g", "tetradecanoic acid (myristic acid), 14:0", "sat"],
        "613": ["g", "hexadecanoic acid (palmitic acid), 16:0", "sat"],
        "614": ["g", "octadecanoic acid (stearic acid), 18:0", "sat"],
        "615": ["g", "eicosanoic acid (arachidic acid), 20:0", "sat"],
        "617": ["g", "octadecenoic acid (oleic acid), 18:1 undifferentiated", "monounsat"],
        "618": ["g", "18:2 undifferentiated", "polyunsat"],
        "619": ["g", "18:3 undifferentiated", "polyunsat"],
        "620": ["g", "eicosatetraenoic acid (arachidonic acid), 20:4 undifferentiated", "polyunsat"],
        "621": ["g", "docosahexaenoic acid (DHA), 22:6 n-3", "polyunsat"],
        "624": ["g", "docosanoic acid (behenic acid), 22:0", "sat"],
        "625": ["g", "tetradecenoic acid (myristoleic acid), 14:1", "monounsat"],
        "626": ["g", "hexadecenoic acid (palmitoleic acid), 16:1 undifferentiated", "monounsat"],
        "627": ["g", "18:4", "polyunsat"],
        "628": ["g", "eicosenoic acid (gadoleic acid), 20:1", "monounsat"],
        "629": ["g", "eicosapentaenoic acid (EPA) (timnodonic acid), 20:5 n-3", "polyunsat"],
        "630": ["g", "docosenoic acid (erucic acid), 22:1 undifferentiated", "monounsat"],
        "631": ["g", "docosapentaenoic acid (DPA) (clupanodonic acid), 22:5 n-3", "polyunsat"],
        "636": ["mg", "Phytosterols"],
        "638": ["mg", "Stigmasterol"],
        "639": ["mg", "Campesterol"],
        "641": ["mg", "Beta-sitosterol"],
        "645": ["g", "Fatty acids, total monounsaturated"],
        "646": ["g", "Fatty acids, total polyunsaturated"],
        "652": ["g", "pentadecanoic acid, 15:0", "sat"],
        "653": ["g", "heptadecanoic acid (margaric acid), 17:0", "sat"],
        "654": ["g", "tetracosanoic acid (lignoceric acid), 24:0", "sat"],
        "662": ["g", "palmitoleic acid, 16:1 t", "monounsat"],
        "663": ["g", "18:1 t", "monounsat"],
        "664": ["g", "22:1 t", "monounsat"],
        "665": ["g", "octadecadienoic acid (linoleic acid), 18:2 t not further defined", "polyunsat"],
        "666": ["g", "octadecadienoic acid (linoleic acid), 18:2 i", "polyunsat"],
        "669": ["g", "octadecadienoic acid (linoleic acid), 18:2 t,t", "polyunsat"],
        "670": ["g", "octadecadienoic acid (Conjugated Linoleic Acid, rumenic acid), 18:2 CLAs", "polyunsat"],
        "671": ["g", "cis-tetracosenoic acid (nervonic acid), 24:1 c", "monounsat"],
        "672": ["g", "eicosadienoic acid, 20:2 n-6 c,c", "polyunsat"],
        "673": ["g", "16:1 c", "monounsat"],
        "674": ["g", "18:1 c", "monounsat"],
        "675": ["g", "18:2 n-6 c,c", "polyunsat"],
        "676": ["g", "22:1 c", "monounsat"],
        "685": ["g", "gamma-linolenic acid, 18:3 n-6 c,c,c", "polyunsat"],
        "687": ["g", "heptadecenoic acid, 17:1", "monounsat"],
        "689": ["g", "20:3 undifferentiated", "polyunsat"],
        "693": ["g", "Fatty acids, total trans-monoenoic"],
        "695": ["g", "Fatty acids, total trans-polyenoic"],
        "696": ["g", "tridecanoic acid, 13:0", "sat"],
        "697": ["g", "pentadecenoic acid, 15:1", "monounsat"],
        "851": ["g", "alpha-linolenic acid (ALA), 18:3 n-3 c,c,c", "polyunsat"],
        "852": ["g", "20:3 n-3", "polyunsat"],
        "853": ["g", "20:3 n-6", "polyunsat"],
        "855": ["g", "20:4 n-6", "polyunsat"],
        "856": ["g", "18:3i", "polyunsat"],
        "857": ["g", "21:5", "polyunsat"],
        "858": ["g", "22:4", "polyunsat"],
        "859": ["g", "18:1-11 t (18:1t n-7)", "polyunsat"]
      }
    }
  }

  componentDidMount() {
    axios.get('/users')
      .then((res) => {
        const { firstName, lastName } = res.data;
        this.setState({ firstName, lastName })
      })
      .catch((err) => console.error(err))
  }

  render() {
    return (
      <div>
        <Redirect to="/profile" />
        <Match pattern="/profile" render={() => <ProfileLanding firstName={this.state.firstName}/>} />
        <Match pattern="/search" render={() => <SearchMeals {...this.state}/>}  />
        <Match pattern="/review" render={() => <ReviewMeals {...this.state}/>} />
      </div>
    );
  }
}
