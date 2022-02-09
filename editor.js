
CDEditor = function (textarea){
    this.textarea = textarea;

    //declarar variaveis dos botoes

    var textareaSource = null;
    var container = null;
    var toolbar = [];
    var iframe = null;

    //document.getElementById("negrito").onclick = function() {buttonN()};
    
     
            function buttonN(){
                document.getElementById("clickMe").onclick = function () { alert('hello!'); };
                //var button = document.getElementById("text").innerHTML = "AAAAAAA";
                //return button
            }

    var initIframe = function (container, textareaSource){

        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'about:blank');
        iframe.setAttribute('contenteditable', 'true');
        iframe.setAttribute('id', 'CDEditorIframe');
        iframe.setAttribute('name', 'CDEditorIframe');
        iframe.classList.add('cd-editor');

        container.appendChild(iframe);

        CDEditorIframe.documnet.body.innerHTML = textareaSource;
        CDEditroIframe.document.designMode = 'on';
        CDEditorIframe.document.body.style.margin = 0;
        CDEditorIframe.document.body.style.wordwrap = 'break';

    };

}