'use strict';

import selectClub from './modules/selectClub';
import mainSlider from './modules/mainSlider';
import formPopups from './modules/formPopups';
import maskPhone from './modules/maskPhone';
import isValid from './modules/isValid';
import sendForm from './modules/sendForm';
import calculator from './modules/calculator';
import scroll from './modules/scroll';
import hamburgerMenu from './modules/hamburgerMenu';
import slider from './modules/slider';
import carousel from './modules/carousel';

selectClub();
mainSlider();
maskPhone();
isValid();
sendForm('form1');
sendForm('form2');
sendForm('card_order');
sendForm('banner-form');
sendForm('footer_form');
formPopups();
calculator();
scroll();
hamburgerMenu();
slider();
carousel();