const { createApp } = Vue;

createApp({
    data() {
        return {
            images: [
                {
                    image: '01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: '02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: '03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: '04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: '05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            activeIndex: 0,
            isMouseOver: false,
            caruselInterval: null,
            infoVisivility: false,
        }
    },
    mounted() {
        this.slideInterval();
    },
    methods: {
        nextSlide() {
            this.activeIndex++;
            if (this.activeIndex >= this.images.length) {
                this.activeIndex = 0
            }
        },
        prevSlide() {
            this.activeIndex--;
            if (this.activeIndex < 0) {
                this.activeIndex = this.images.length - 1
            }
        },
        focus() {
            this.isMouseOver = true
            clearInterval(this.caruselInterval)
        },
        deFocus() {
            this.isMouseOver = false;
            this.slideInterval();
        },
        slideInterval() {
            this.caruselInterval = setInterval(() => {
                if (!this.isMouseOver) {
                    this.nextSlide();
                }
            }, 3000);
        },
        setIndex(newIndex) {
            this.activeIndex = newIndex
        },
        infoToggle() {
            const infoTxt = document.getElementById('imageInfo')
            if (infoTxt.classList.contains('d-none')) {
                infoTxt.style.opacity = '1';
                infoTxt.classList.remove('d-none');
            } else {
                infoTxt.style.opacity = '0';
                setTimeout(() => {
                    infoTxt.classList.add('d-none')
                }, 950);
            }
        }
    }
}).mount('#app');