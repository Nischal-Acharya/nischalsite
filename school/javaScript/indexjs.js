
// Here is the sliders image

document.addEventListener('alpine:init', () => {
    Alpine.data('slider', () => ({
        currentIndex: 1,
        images: [
            'assects/images/schoolImages/fullschool.jpg',
            'assects/images/schoolImages/mainschool.jpg',
            'assects/images/schoolImages/engineeringschool.jpg',
            'assects/images/schoolImages/westschool.jpg'
           
        ],
        back() {
            if (this.currentIndex > 1) {
                this.currentIndex = this.currentIndex - 1;
            }
        },
        next() {
            if (this.currentIndex < this.images.length) {
                this.currentIndex = this.currentIndex + 1;
            } else if (this.currentIndex <= this.images.length) {
                this.currentIndex = this.images.length - this.currentIndex + 1
            }

            
        },
        
    }))
    
})

setInterval(slidenext, 9000);
function slidenext(){
    document.getElementsByClassName('nextslide')[0].click();
}