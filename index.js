let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let ScreenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText == 'X')
        {
            buttonText = '*'
            ScreenValue += buttonText;
            screen.value = ScreenValue;
        }
        else if(buttonText == '=')
        {     
            screen.value = eval(ScreenValue);
            ScreenValue = screen.value;
        }
        else if(buttonText == 'C')
        {
            ScreenValue = '';
            screen.value = ScreenValue;
        }
        else if(buttonText == '!')
        {
            backspace = screen.value;
            screen.value = backspace.substr(0, backspace.length - 1);
            ScreenValue = screen.value;
        }
        else
        {
            ScreenValue += buttonText;
            screen.value = ScreenValue;
        }
    })
}