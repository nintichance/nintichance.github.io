


    $(document).ready(function() {
        // run test on initial page load
        const checkSize = () => {
            if ($('body').css("width") < 800 ){
                
                $('body > .intro').prepend('<div id="introImage"><img src="https://i.imgur.com/xgLtToC.png"/></div>')
            }
          
        }
       
        checkSize()
        
        // run test on resize of the window
        // $(window).resize(checkSize)
    })
    
    //Function to the css rule
  
    // $('nav > a').addClass('animated pulse')
    // $('.section > img').addClass('animated pulse')
    // let personality = ['placeholder','outgoing', 'hard working', 'inquisitive', 'bubbly.']
    // let clicked = 0
    // $('article > h1').on('click', this, function(){
    // clicked +=1
    // $(this).append('<article><p>' + personality[clicked] + '</p></article>')
    // if (clicked === 4){
    //     $(this).off()
    // }
    // })
    


