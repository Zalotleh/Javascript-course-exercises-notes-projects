import './styles/tooltip.css'


class Tooltip {
    constructor(element){
        this.tooltips=element;
    }
    init(){
        this.tooltips.forEach(item => {
            this.message = item.getAttribute('data-message');
            const tip = document.createElement('div');
            tip.classList.add('tip');
            tip.textContent = this.message;
            item.appendChild(tip);

            item.addEventListener('mouseenter', ()=>{
                tip.classList.add('active');
            });

            item.addEventListener('mouseleave', ()=>{
                tip.classList.remove('active');
        });
        });
        
    }
}

export { Tooltip as default}