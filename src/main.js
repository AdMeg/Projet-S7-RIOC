import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.vue'
import router from './router';
import { createApp } from 'vue';

const app = createApp(App);
app.use(router);
app.mount('#app');

// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
  
//     if (username === "utilisateur" && password === "motdepasse") {
//     //   const token = createToken(username);
//       res.json({ message: "Connexion réussie" });
//     } else {
//       res.status(401).json({ message: "Identifiants invalides" });
//     }
//   });


// app.post('/logout', (req, res) => {

// res.json({ message: "Déconnexion réussie" });
// });

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('userToken');
  
    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
      next('/login');
    } else {
      next();
    }
  });
  
  function isAuthenticated(req, res, next) {
    const token = req.headers.authorization;
    
    if (!token) {
      return res.status(401).send('Non autorisé');
    }
  
    // Vérifier le token...
    next();
  }
  
  app.use('/api/protected', isAuthenticated); // Utiliser le middleware sur les routes protégées
  