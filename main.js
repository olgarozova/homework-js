
function init() {
    var desc = {
        'privat' : "<b>Privatbank</b> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis consequuntur voluptas sunt obcaecati, veritatis perspiciatis alias soluta illo accusamus omnis, rem eligendi modi, sint at. Aspernatur voluptatem perferendis ea molestias! ", 
        'mono' : "<b>Monobank</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam nisi quae labore eos ad, deserunt deleniti fugiat exercitationem expedita reiciendis vitae delectus numquam aspernatur illo doloribus accusantium sapiente possimus?", 
        'pumb' : "<b>Pumb</b> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit dolore quia neque porro tempora facere, modi perspiciatis excepturi corrupti harum libero sapiente vitae aliquid quo totam iure, rerum sequi accusamus! " 
    };


    var selectElement = document.querySelector("#selectBank");
    var descriptionElement = document.querySelector("#description");     

    function showDescriptoin() {       
       console.dir(this[this.selectedIndex].value);
       if(this[this.selectedIndex].value !== 'none'){
         descriptionElement.innerHTML = desc[this[this.selectedIndex].value];
         return;
       }
       descriptionElement.innerHTML = '';
    }
    
    selectElement.onchange = showDescriptoin;
   
}
init();




