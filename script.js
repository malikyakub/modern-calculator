const upper_screen = document.getElementById('upper')
const lower_screen = document.getElementById('lower')

const buttons = document.querySelectorAll('.btn')

buttons.forEach((button) =>{
    button.addEventListener('click', function(){
        var holding_val = button.getAttribute('data-type')
        if (holding_val == 'C'){
            lower_screen.value = ''
            upper_screen.value = ''
        }
        else if(holding_val == '='){
            upper_screen.value = lower_screen.value
            try{
                lower_screen.value = eval(lower_screen.value)
            }
            catch{
                lower_screen.value = 'Syntax Error'
            }
        }
        else if (holding_val == 'del'){
            lower_screen.value = lower_screen.value.slice(0, -1)
        }
        else{
            lower_screen.value = lower_screen.value += holding_val
        }
    })
})
