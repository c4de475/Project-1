const app = Vue.createApp({ 
    data() {
        return {
            showStart: true, 
            showActions: false,
            showLog: false,
            endActions: false,
            playerHealth: 100,
            monsterHealth: 100,
            turnsStorage: []
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100
            this.monsterHealth = 100
            this.showStart = false
            this.showActions = true
            this.showLog = true
            this.turnsStorage = []
        },
        attack() {
            playerDamage = Math.floor(Math.random() * (10 - 3 + 1) + 3)
            monsterDamage = Math.floor(Math.random() * (12 - 5 + 1) + 5)

            this.playerHealth = this.playerHealth - monsterDamage
            this.monsterHealth = this.monsterHealth - playerDamage

            this.turnsStorage.unshift({
                human: true,
                message: 'Player hit the Monster for ' + playerDamage + ' Damage'
            })

            this.turnsStorage.unshift({
                monster: true,
                message: 'Monster hit the Player for ' + monsterDamage + ' Damage'
            })

            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0
                this.turnsStorage = []
                this.turnsStorage.unshift({
                    human: true,
                    message: 'The Player Wins!!!'
                })
                this.showActions = false
                this.endActions = true
            } else if (this.playerHealth <= 0) {
                this.playerHealth = 0
                this.turnsStorage = []
                this.turnsStorage.unshift({
                    monster: true,
                    message: 'Monster Wins.... Better luck next time'
                })
                this.showActions = false
                this.endActions = true
            }
        },
        specialAttack() {
            playerDamage = Math.floor(Math.random() * (20 - 10 + 1) + 10)
            monsterDamage = Math.floor(Math.random() * (12 - 5 + 1) + 5)

            this.playerHealth = this.playerHealth - monsterDamage
            this.monsterHealth = this.monsterHealth - playerDamage

            this.turnsStorage.unshift({
                human: true,
                message: 'Player hit the Monster really hard for ' + playerDamage + ' Damage'
            })

            this.turnsStorage.unshift({
                monster: true,
                message: 'Monster hit the Player for ' + monsterDamage + ' Damage'
            })

            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0
                this.turnsStorage = []
                this.turnsStorage.unshift({
                    human: true,
                    message: 'The Player Wins!!!'
                })
                this.showActions = false
                this.endActions = true
            } else if (this.playerHealth <= 0) {
                this.playerHealth = 0
                this.turnsStorage = []
                this.turnsStorage.unshift({
                    monster: true,
                    message: 'Monster Wins.... Better luck next time'
                })
                this.showActions = false
                this.endActions = true
            }
        },
        block() {
            playerDamage = Math.floor(Math.random() * (3 - 1 + 1) + 1)

            this.monsterHealth = this.monsterHealth - playerDamage

            this.turnsStorage.unshift({
                human: true,
                message: 'Player blocked and parried the Monsters damage for ' + playerDamage + ' Damage'
            })

            this.turnsStorage.unshift({
                monster: true,
                message: 'Monster hit the Player for ' + 0 + ' Damage'
            })
            
            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0
                this.turnsStorage = []
                this.turnsStorage.unshift({
                    human: true,
                    message: 'The Player Wins!!!'
                })
                this.showActions = false
                this.endActions = true
            } else if (this.playerHealth <= 0) {
                this.playerHealth = 0
                this.turnsStorage = []
                this.turnsStorage.unshift({
                    monster: true,
                    message: 'Monster Wins.... Better luck next time'
                })
                this.showActions = false
                this.endActions = true
            }
        },
        heal() {
            monsterDamage = Math.floor(Math.random() * (12 - 5 + 1) + 5)

            this.playerHealth = this.playerHealth + 10 - monsterDamage

            this.turnsStorage.unshift({
                human: true,
                message: 'Player heals for  ' + 10 + ' Health'
            })

            this.turnsStorage.unshift({
                monster: true,
                message: 'Monster hit the Player for ' + monsterDamage + ' Damage'
            })

            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0
                this.turnsStorage = []
                this.turnsStorage.unshift({
                    human: true,
                    message: 'The Player Wins!!!'
                })
                this.showActions = false
                this.endActions = true
            } else if (this.playerHealth <= 0) {
                this.playerHealth = 0
                this.turnsStorage = []
                this.turnsStorage.unshift({
                    monster: true,
                    message: 'Monster Wins.... Better luck next time'
                })
                this.showActions = false
                this.endActions = true
            }
        },
        endGame() {
            this.playerHealth = 100
            this.monsterHealth = 100 
            this.showStart = true
            this.showActions = false
            this.showLog = false
            this.turnsStorage = []
        },
        tryAgain() {
            this.endActions = false
            this.playerHealth = 100
            this.monsterHealth = 100
            this.showActions = true
            this.turnsStorage = []
        },
        donePlaying() {
            this.endActions = false
            this.showLog = false
            this.showStart = true
            this.turnsStorage = []
        }
    }
})
app.mount('#app')