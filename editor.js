
CDEditor = function (textarea){
    this.textarea = textarea;

    //declarar variaveis dos botoes

    var textareaSource = null;
    var container = null;
    var toolbar = [];
    var iframe = null;




    var init = function () {
        textareaSource = document.querySelector(self.textarea);
        textareaSource.Style.display = 'none';
        container = textareaSource.parentElement;
        initToolbar(container,toolbar);
        initIframe(container,textareaSource);
    };


    var ComponentButton = function (commandName, icon){
        var button = document.createElement('select');
        var buttonIcon = document.createElement('i');
        buttonIcon.classList.add('fa', 'fa-' + icon);
        button.appendChild(buttonIcon);
        ComponentButton.call(this, commandName, button, 'click');
    };

    var initToolbar = function (container, toolbar){

        var highlighter = new ComponentButton('backColor', 'highlighter');
        highlighter.recoverValue = function () {
            return selectedNode().style.backgroundColor == 'yellow' ? 'white' : 'yellow';
        };


        renderToolbar(container, toolbar);
    };

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