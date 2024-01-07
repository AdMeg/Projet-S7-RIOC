<template>
  <AppSidebar />
  <div class=" main container-fluid">
    <div class="title mt-5">
      <h1>Actualité</h1>
    </div>
    <div class="row d-flex rounded content justify-content-center mt-70 mb-70">

        <div class="main-card mb-3 ">
          <div class="card-body">
            <!-- <h5 class="card-title">User Timeline</h5> -->
            <div class="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
              <div class="vertical-timeline-item vertical-timeline-element">
                <div>
                  <span class="vertical-timeline-element-icon bounce-in">
                    <i class="badge badge-dot badge-dot-xl badge-success"></i>
                  </span>
                  <div class="vertical-timeline-element-content bounce-in">
                    <h4 class="timeline-title">Meeting with client</h4>
                    <p>Meeting with USA Client, today at <a href="javascript:void(0);" data-abc="true">12:00 PM</a></p>
                    <span class="vertical-timeline-element-date">9:30 AM</span>
                  </div>
                </div>
              </div>
              <div class="vertical-timeline-item vertical-timeline-element">
                <div>
                  <span class="vertical-timeline-element-icon bounce-in">
                    <i class="badge badge-dot badge-dot-xl badge-warning"> </i>
                  </span>
                  <div class="vertical-timeline-element-content bounce-in">
                    <p>Another meeting with UK client today, at <b class="text-danger">3:00 PM</b></p>
                    <p>Yet another one, at <span class="text-success">5:00 PM</span></p>
                    <span class="vertical-timeline-element-date">12:25 PM</span>
                  </div>
                </div>
              </div>
              <div class="vertical-timeline-item vertical-timeline-element">
                <div>
                  <span class="vertical-timeline-element-icon bounce-in">
                    <i class="badge badge-dot badge-dot-xl badge-danger"> </i>
                  </span>
                  <div class="vertical-timeline-element-content bounce-in">
                    <h4 class="timeline-title">Discussion with team about new product launch</h4>
                    <p>meeting with team mates about the launch of new product. and tell them about new features</p>
                    <span class="vertical-timeline-element-date">6:00 PM</span>
                  </div>
                </div>
              </div>
              
    
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
import axios from 'axios';
import AppSidebar from '../components/AppSidebar.vue'
// import ActuCard from '../Actualite/ActuCard.vue'
export default {
  name: 'ViewActualite',
  components: {
    AppSidebar,
  },
  methods: {
    getAllQuiz() {
      // const baseUrl = 'http://10.114.236.239:3000/Quiz';
      const baseUrl = 'http://10.19.2.1:5000/get_groupe_actu';

      axios({
        method: 'get',
        url: baseUrl,
        data: {
        },
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        // Traitement de la réponse
        console.log(response);
      })
      .catch(error => {
        // Gestion des erreurs
        console.error('Erreur lors de la requête POST', error);
      });
    }
  },
  mounted() {
    // Appel de la méthode au montage du composant, si souhaité
    this.getAllQuiz();
  }
}
</script>



<style scoped>
.title {
  margin-left: 50px;
}

.content {
  margin-left: 50px;
  width: 95%;
  box-shadow: 0px 0px 50px rgba(103, 103, 103, 0.221)
}

.scroll {
  height: 900px;
  overflow: auto;
  text-align: justify;
  padding: 20px;
}

body{
     background-color: #eee;
}

.mt-70{
     margin-top: 70px;
}

.mb-70{
     margin-bottom: 70px;
}



.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    padding: 1.25rem;
}
.vertical-timeline {
    width: 100%;
    position: relative;
    padding: 1.5rem 0 1rem;
}

.vertical-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 67px;
    height: 100%;
    width: 4px;
    background: #e9ecef;
    border-radius: .25rem;
}

.vertical-timeline-element {
    position: relative;
    margin: 0 0 1rem;
}

.vertical-timeline--animate .vertical-timeline-element-icon.bounce-in {
    visibility: visible;
    animation: cd-bounce-1 .8s;
}
.vertical-timeline-element-icon {
    position: absolute;
    top: 0;
    left: 60px;
}

.vertical-timeline-element-icon .badge-dot-xl {
    box-shadow: 0 0 0 5px #fff;
}

.badge-dot-xl {
    width: 18px;
    height: 18px;
    position: relative;
}
.badge:empty {
    display: none;
}


.badge-dot-xl::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: .25rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -5px 0 0 -5px;
    background: #fff;
}

.vertical-timeline-element-content {
    position: relative;
    margin-left: 90px;
    font-size: .8rem;
}

.vertical-timeline-element-content .timeline-title {
    font-size: .8rem;
    text-transform: uppercase;
    margin: 0 0 .5rem;
    padding: 2px 0 0;
    font-weight: bold;
}

.vertical-timeline-element-content .vertical-timeline-element-date {
    display: block;
    position: absolute;
    left: -90px;
    top: 0;
    padding-right: 10px;
    text-align: right;
    color: #adb5bd;
    font-size: .7619rem;
    white-space: nowrap;
}

.vertical-timeline-element-content:after {
    content: "";
    display: table;
    clear: both;
}
</style>

