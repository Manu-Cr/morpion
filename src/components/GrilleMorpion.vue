<template>
  <h1 id="player">Au joueur {{ player }} de jouer </h1>
  <div class="container">
    <div class="row">

      <div class="col-sm-4">Score Joueur 1 <br> <img src="../assets/cross.png"> <br>
        <h1>{{ scorePlayerOne }}</h1></div>
      <div class="col-sm-4">
        <table class="table">
          <tbody>
          <tr>
            <td v-on:click="add(1)"><img v-if="case1 == PLAYERONE" src="../assets/cross.png"> <img v-if="case1 == PLAYERTWO"
                                                                                           src="../assets/circle.png">
            </td>
            <td v-on:click="add(2)"><img v-if="case2 == PLAYERONE" src="../assets/cross.png"> <img v-if="case2 == PLAYERTWO"
                                                                                           src="../assets/circle.png">
            </td>
            <td v-on:click="add(3)"><img v-if="case3 == PLAYERONE" src="../assets/cross.png"> <img v-if="case3 == PLAYERTWO"
                                                                                           src="../assets/circle.png">
            </td>
          </tr>
          <tr>
            <td v-on:click="add(4)"><img v-if="case4 == PLAYERONE" src="../assets/cross.png"> <img v-if="case4 == PLAYERTWO"
                                                                                           src="../assets/circle.png">
            </td>
            <td v-on:click="add(5)"><img v-if="case5 == PLAYERONE" src="../assets/cross.png"> <img v-if="case5 == PLAYERTWO"
                                                                                           src="../assets/circle.png">
            </td>
            <td v-on:click="add(6)"><img v-if="case6 == PLAYERONE" src="../assets/cross.png"> <img v-if="case6 == PLAYERTWO"
                                                                                           src="../assets/circle.png">
            </td>
          </tr>
          <tr>
            <td v-on:click="add(7)"><img v-if="case7 == PLAYERONE" src="../assets/cross.png"> <img v-if="case7 == PLAYERTWO"
                                                                                           src="../assets/circle.png">
            </td>
            <td v-on:click="add(8)"><img v-if="case8 == PLAYERONE" src="../assets/cross.png"> <img v-if="case8 == PLAYERTWO"
                                                                                           src="../assets/circle.png">
            </td>
            <td v-on:click="add(9)"><img v-if="case9 == PLAYERONE" src="../assets/cross.png"> <img v-if="case9 == PLAYERTWO"
                                                                                           src="../assets/circle.png">
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col-sm-4">Score Joueur 2 <br> <img src="../assets/circle.png"> <br>
        <h1>{{ scorePlayerTwo }}</h1></div>
    </div>
  </div>
  <button type="button" class="btn btn-primary m-2" v-on:click="resetScore()">Réinitialiser les scores</button>
  <button type="button" class="btn btn-primary m-2" v-on:click="reset()">Réinitialiser la grille</button>
  <h1 v-if="winner == 1 || winner == 2">Dernière partie remporté par le Joueur {{ winner }}</h1>
  <h1 v-if="winner == 0">Match nul pour la dernière partie</h1>

</template>

<script>
export default {
  name: 'GrilleMorpion',
  data() {
    return {
      PLAYERONE: 1,
      PLAYERTWO: 2,
      player: 1,
      scorePlayerOne: 0,
      scorePlayerTwo: 0,
      case1: 0,
      case2: 0,
      case3: 0,
      case4: 0,
      case5: 0,
      case6: 0,
      case7: 0,
      case8: 0,
      case9: 0,
      winner: null
    }
  },
  methods: {
    add(numberOfCase) {
      /**
       * Ajoute le signe du joueur en cours sur la case cliquée test si une condition de victoire est remplie puis change de joueur.
       */
      if (numberOfCase === 1 && this.case1 === 0) {
        this.case1 = this.player
        this.victory()
        this.changePlayer()
      } else if (numberOfCase === 2 && this.case2 === 0) {
        this.case2 = this.player
        this.victory()
        this.changePlayer()
      } else if (numberOfCase === 3 && this.case3 === 0) {
        this.case3 = this.player
        this.victory()
        this.changePlayer()
      } else if (numberOfCase === 4 && this.case4 === 0) {
        this.case4 = this.player
        this.victory()
        this.changePlayer()
      } else if (numberOfCase === 5 && this.case5 === 0) {
        this.case5 = this.player
        this.victory()
        this.changePlayer()
      } else if (numberOfCase === 6 && this.case6 === 0) {
        this.case6 = this.player
        this.victory()
        this.changePlayer()
      } else if (numberOfCase === 7 && this.case7 === 0) {
        this.case7 = this.player
        this.victory()
        this.changePlayer()
      } else if (numberOfCase === 8 && this.case8 === 0) {
        this.case8 = this.player
        this.victory()
        this.changePlayer()
      } else if (numberOfCase === 9 && this.case9 === 0) {
        this.case9 = this.player
        this.victory()
        this.changePlayer()
      }
    },

    changePlayer() {
      /**
       * Change de joueur
       */
      if (this.player === 1) {
        this.player = 2
      } else {
        this.player = 1
      }
    },

    victory() {
      /**
       * Test les conditions de victoire
       * En cas de victoire d'un des deux joueurs on ajoute un point à son score puis on réinitialise la grille
       * En cas de match nul personne prend de points et on réinitialise la grille
       */
      if ((this.case1 === this.case2 && this.case2 === this.case3 && this.case1 !== 0) ||
          (this.case4 === this.case5 && this.case5 === this.case6 && this.case4 !== 0) ||
          (this.case7 === this.case8 && this.case8 === this.case9 && this.case7 !== 0) ||
          (this.case1 === this.case4 && this.case4 === this.case7 && this.case1 !== 0) ||
          (this.case2 === this.case5 && this.case5 === this.case8 && this.case2 !== 0) ||
          (this.case3 === this.case6 && this.case6 === this.case9 && this.case3 !== 0) ||
          (this.case1 === this.case5 && this.case5 === this.case9 && this.case1 !== 0) ||
          (this.case3 === this.case5 && this.case5 === this.case7 && this.case3 !== 0)) {
        this.winner = this.player
        if (this.player === 1) {
          this.scorePlayerOne++
        } else {
          this.scorePlayerTwo++
        }
        this.reset()
      } else if (this.case1 !== 0 && this.case2 !== 0
          && this.case3 !== 0 && this.case4 !== 0
          && this.case5 !== 0 && this.case6 !== 0
          && this.case7 !== 0 && this.case8 !== 0
          && this.case9 !== 0) {
        this.winner =0
        this.reset()
      }
    },
    reset() {
      /**
       * Reset de la grille
       * @type {number}
       */
      this.case1 = this.case2 = this.case3 = this.case4 = this.case5 = this.case6 = this.case7 = this.case8 = this.case9 = 0
    },

    resetScore(){
      /**
       * Réinitialise les Scores
       * @type {number}
       */
      this.scorePlayerOne = 0
      this.scorePlayerTwo = 0
    }
  }
}
</script>

<style scoped>

table {
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
  border: 2px solid rgb(200, 200, 200);
  letter-spacing: 1px;
  font-size: 0.8rem;
}

td, th {
  border: 1px solid rgb(190, 190, 190);
  width: 125px;
  height: 125px;
}
</style>
