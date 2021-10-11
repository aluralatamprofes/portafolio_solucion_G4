function validarDatos(){
    event.preventDefault()
    var error = document.querySelector('#error')
    error.style.color = 'white'
    
    var expresion = /\w+@\w+\.+[a-z]/

    var mensajesError = []

    
    if (document.form.name.value=="" ) {
        mensajesError.push("Campo Nombre es obligatorio")  
        document.form.name.focus()
    
    }else if (document.form.email.value=="") {
        mensajesError.push("Campo e-mail es obligatorio")
        document.form.email.focus() 

    }else if (document.form.assunto.value=="" ) {
        mensajesError.push("Campo Asunto es obligatorio")
        document.form.assunto.focus() 

    }else if (document.form.textarea.value=="" || document.form.textarea.value.length < 50 ){
        mensajesError.push("Campo Mensaje es obligatorio y debe contener almenos  50 caracteres") 
        document.form.textarea.focus()
      
    } else if (document.form.email.value.indexOf('@')==-1 ||
    document.form.email.value.indexOf('.')==-1 ) {
        mensajesError.push("e-mail inválido")
    }


    error.innerHTML = mensajesError.join(',')

    
}
    document.querySelector('form').addEventListener('submit',validardatos)


    