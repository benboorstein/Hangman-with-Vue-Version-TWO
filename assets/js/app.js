const App = {
    data() {
        return {
            words: [
                'basketball',
                'mountains',
                'ocean',
                'climbing',
                'drumming',
                'liberty',
                'hunting',
                'arts',
                'stupendous',
                'learning',
                'target',
                'freedom',
                'responsibility',
                'fun',
                'family',
                'work',
                'coniferous',
                'house',
                'realization'
            ],
            bodyParts: [
                'HEAD',
                'NECK',
                'TORSO',
                'RIGHT ARM',
                'LEFT ARM',
                'HANDS',
                'RIGHT LEG',
                'LEFT LEG',
                'FEET'
            ],
            alphabet: [
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
            ],
            wordInProg: [],
            bodyPartsShown: [],
            lettersGuessed: [],
            incorrectGuesses: []
        }
    },
    methods: {
        processSelection(lett) {
            this.lettersGuessed.push(lett)
            if (this.wordLettersArr.includes(lett)) {
                for (let i = 0; i < this.wordLettersArr.length; i++) {
                    if (this.wordLettersArr[i] === lett) {
                        this.wordInProg[i] = lett
                    }
                }           
                if (!this.wordInProg.includes('_')) {
                    this.wordInProg = 'You win'
                    this.alphabet = ''
                }
            } else {
                this.incorrectGuesses.push(lett)
                this.bodyPartsShown.push(this.bodyParts[this.incorrectGuesses.length - 1])
                if (this.bodyPartsShown.length >= this.bodyParts.length) {
                    this.wordInProg = 'You lose'
                    this.alphabet = ''
                }
            }
        }
    },
    computed: {
        wordLettersArr() { 
            return Array.from(this.words[Math.floor(Math.random() * this.words.length)].toUpperCase())
        }
    },
    mounted() {
        console.log(this.wordLettersArr)
        this.wordInProg = this.wordLettersArr.map(letter => '_')
    }
}

Vue.createApp(App).mount('#app')