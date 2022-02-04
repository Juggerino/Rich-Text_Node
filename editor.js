
CDEditor = function (textarea){
    this.textarea = textarea;

    var init = function () {
        textareaSource = document.querySelector(self.textarea);
        textareaSource.Style.display = 'name';
        container = textareaSource.parentElement;
        initToolbar(container,toolbar);
        initIframe(container,textareaSource);
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

    }

}