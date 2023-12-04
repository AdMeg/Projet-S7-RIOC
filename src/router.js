import ViewActualite from './Actualite/ViewActualite.vue';
import ViewAuthentification from './Authentification/ViewAuthentification.vue';
import ViewCatalogue from './Catalogue/ViewCatalogue.vue';
import ViewQCM from './QCM/ViewQCM.vue';
import ViewAnnuaire from './Annuaire/ViewAnnuaire.vue';
import DoubleAuthentification from './Authentification/DoubleAuthentification.vue';


import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/authentification' },
    { path: '/actualite', component: ViewActualite },
    { path: '/authentification', component: ViewAuthentification },
    { path: '/double-authentification', component: DoubleAuthentification },
    { path: '/catalogue', component: ViewCatalogue },
    { path: '/qcm', component: ViewQCM },
    { path: '/annuaire', component: ViewAnnuaire }
  ]
});

export default router;
