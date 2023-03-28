var check_bold_left_click = false;
var check_bold_right_click = false;
var check_italic_left_click = false;
var check_italic_right_click = false;

function chatBold(position){
    if(position == 'left'){
        if(check_bold_left_click == true){
            document.getElementById('left_text').style.fontWeight = "normal";
            check_bold_left_click = false;
        }
        else{
            document.getElementById('left_text').style.fontWeight = "bold";
            check_bold_left_click = true;
        }
    }
    else{
        if(check_bold_right_click == true){
            document.getElementById('right_text').style.fontWeight = "normal";
            check_bold_right_click = false;
        }
        else{
            document.getElementById('right_text').style.fontWeight = "bold";
            check_bold_right_click = true;
        }
    }
}


function chatItalic(position){
    if(position == 'left'){
        if(check_italic_left_click == true){
            document.getElementById('left_text').style.fontStyle = "normal";
            check_italic_left_click = false;
        }
        else{
            document.getElementById('left_text').style.fontStyle = "italic";
            check_italic_left_click = true;
        }
    }
    else{
        if(check_italic_right_click == true){
            document.getElementById('right_text').style.fontStyle = "normal";
            check_italic_right_click = false;
            }
        else{
            document.getElementById('right_text').style.fontStyle = "italic";
            check_italic_right_click = true;
            }
    }
}

function createSpanLeft(option){
    var span_left_for = 'left_msg_' + option + '_chat';
    var span_left = document.createElement('span');
    span_left.classList.add(span_left_for);
    span_left.classList.add('msg');

    if(option == 'left' && check_bold_left_click == true){
        span_left.style.fontWeight = "bold";
    }

    if(option == 'left' && check_italic_left_click == true){
        span_left.style.fontStyle = "italic";
    }

    if(option == 'right' && check_bold_right_click == true){
        span_left.style.fontWeight = "bold";
    }

    if(option == 'right' && check_italic_right_click == true){
        span_left.style.fontStyle = "italic";
    }

    return span_left;
    
}

function createSpanRight(option){
    var span_right_for = 'right_msg_' + option + '_chat';
    var span_right = document.createElement('span');
    span_right.classList.add(span_right_for);
    span_right.classList.add('msg');

    if(option == 'left' && check_bold_left_click == true){
        span_right.style.fontWeight = "bold";
    }

    if(option == 'left' && check_italic_left_click == true){
        span_right.style.fontStyle = "italic";
    }

    if(option == 'right' && check_bold_right_click == true){
        span_right.style.fontWeight = "bold";
    }

    if(option == 'right' && check_italic_right_click == true){
        span_right.style.fontStyle = "italic";
    }

    return span_right;
}

function createRightMessage(option){
    var div_right_for = 'right_person_' + option + '_chat';
    var right_msg = document.createElement('div');
    right_msg.classList.add(div_right_for);
    return right_msg
}

function createLeftMessage(option){
    var div_left_for = 'left_person_' + option + '_chat';
    var left_msg = document.createElement('div');
    left_msg.classList.add(div_left_for);
    return left_msg
}

function addMessage(text, left_chat, right_chat, option){
    if(text.trim() != ''){
        var span_right = createSpanRight(option);
        span_right.appendChild(document.createTextNode(text));
        var right_msg = createRightMessage(option);
        right_msg.appendChild(span_right);
        left_chat.appendChild(right_msg);   
        var span_left = createSpanLeft(option);
        span_left.appendChild(document.createTextNode(text));
        var left_msg = createLeftMessage(option);
        left_msg.appendChild(span_left);
        right_chat.appendChild(left_msg);
    }
}

function btnSendLeftClick(){
    var left_text = document.getElementById('left_text').value;
    var left_chat = document.getElementById('left_container');
    var right_chat = document.getElementById('right_container');
    addMessage(left_text, left_chat, right_chat, 'left');
}

function btnSendRightClick(){
    var right_text = document.getElementById('right_text').value;
    var right_chat = document.getElementById('right_container');
    var left_chat = document.getElementById('left_container');
    addMessage(right_text, right_chat, left_chat, 'right');
}

function resetChat(position){
    if(position === 'left'){
        document.getElementById('left_container').innerHTML = "";
    }
    else{
        document.getElementById('right_container').innerHTML = "";
    }
}