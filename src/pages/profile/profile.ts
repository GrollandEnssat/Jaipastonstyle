import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {NavController} from 'ionic-angular';
import {NavParams} from 'ionic-angular';
import {ProfileService} from '../../services/profile-service';
import {ChatDetailPage} from "../chat-detail/chat-detail";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public profile : any;
  backgroundImage : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public profileService: ProfileService) {
    this.profile = profileService.get();
  }

  openEdit() {
  }

  adapt(p) {
    return Math.round(p/3);
  }

  styleMostImportantInListeningAmicale(){
    if ((this.profile.valeurs_amicale.conseils_quotidien >= this.profile.valeurs_amicale.savoir_ecoute)
     && (this.profile.valeurs_amicale.conseils_quotidien >= this.profile.valeurs_amicale.soutien)){
       this.backgroundImage = "../../assets/img/Values/conseil.jpg";
     } else if ((this.profile.valeurs_amicale.savoir_ecoute >= this.profile.valeurs_amicale.conseils_quotidien)
      && (this.profile.valeurs_amicale.savoir_ecoute >= this.profile.valeurs_amicale.soutien)){
        this.backgroundImage = "../../assets/img/Values/ecoute.jpg";
      } else {
        this.backgroundImage = "../../assets/img/Values/soutien.jpg";
      }
      let styles = {
        'background-image' : 'url('+this.backgroundImage+')',
        'background-repeat' : 'no-reapeat',
        'background-size': '100%'
      };
      return styles;
  }

  styleMostImportantInListeningAmour(){
    if ((this.profile.valeurs_amoureuses.conseils_quotidien >= this.profile.valeurs_amoureuses.savoir_ecoute)
     && (this.profile.valeurs_amoureuses.conseils_quotidien >= this.profile.valeurs_amoureuses.soutien)){
       this.backgroundImage = "../../assets/img/Values/conseil.jpg";
     } else if ((this.profile.valeurs_amoureuses.savoir_ecoute >= this.profile.valeurs_amoureuses.conseils_quotidien)
      && (this.profile.valeurs_amoureuses.savoir_ecoute >= this.profile.valeurs_amoureuses.soutien)){
        this.backgroundImage = "../../assets/img/Values/ecoute.jpg";
      } else {
        this.backgroundImage = "../../assets/img/Values/soutien.jpg";
      }
      let styles = {
        'background-image' : 'url('+this.backgroundImage+')',
        'background-repeat' : 'no-reapeat',
        'background-size': '100%'
      };
      return styles;
  }

  styleAdmiration(){
    if (this.profile.valeurs_amoureuses.admiration >= 50){
       this.backgroundImage = "../../assets/img/Values/respect.jpg";
     }  else {
        this.backgroundImage = "../../assets/img/Values/eblouissement.jpg";
      }
      let styles = {
        'background-image' : 'url('+this.backgroundImage+')',
        'background-repeat' : 'no-reapeat',
        'background-size': '100%'
      };
      return styles;
  }

  styleFashion(){
    let styles = {
    'background-image': 'url(../../assets/img/Style/' + this.profile.style.fashion_style[0] +
    '.jpeg), url(../../assets/img/Style/' + this.profile.style.fashion_style[1] + '.jpeg)',
    'background-repeat': 'no-repeat, no-repeat',
    'background-position': 'left, right',
    'background-size': '50%, 50%'
    }
    return styles;

  }


  flowerImage1(n){
    if (n===0){
      return "assets/img/Values/fleur_pas_du_tout.png";
    } else if (n===2){
      return "assets/img/Values/fleur_un_peu.png";
    } else {
      return "assets/img/Values/fleur_beaucoup.png";
    }
  }

  flowerText1(n){
    if (n===0){
      return "Pas du tout";
    } else if (n===2){
      return "Un peu";
    } else {
      return "Beaucoup";
    }
  }

  fidelite(){
    if (this.profile.valeurs_amoureuses.fidelite === 0){
      return "inutile";
    } else if (this.profile.valeurs_amoureuses.fidelite === 6){
      return "pas important";
    } else if (this.profile.valeurs_amoureuses.fidelite === 12){
      return "important";
    } else {
      return "essentiel";
    }
  }

  yesNo(b){
    if(b){
      return "Oui";
    } else {
      return "Non";
    }
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
