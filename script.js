document.addEventListener("DOMContentLoaded", () => {

    document.addEventListener("contextmenu", e => {
        e.preventDefault();
      });
    
        const dot = document.getElementById("dot");
        const wrapper = document.getElementById("wrapper");
    
        wrapper.addEventListener("mouseenter", () => {
    
            let top = Math.floor(Math.random() * 101);
            let left = Math.floor(Math.random() * 101);
    
            if(top < 5) top += 5;
            else if(top > 95) top -= 5;
            if(left < 5) left += 5;
            else if(left > 95) left -= 5;
    
            dot.style.cssText = `
            top: ${top}%;
            left: ${left}%;
            background-color: red;
            `;
        });
    });