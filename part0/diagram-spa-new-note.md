sequenceDiagram

    note right of browser: Antes disso é realizado todo o processo de renderizar o html, css, js e a lista de notas
    participant browser
    participant server

    browser->>server: 201 POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server    
    note right of browser: O usuário digita sua nota e salva, enviando o request: '{"content":"note","date":"2025-10-26T13:55:49.197Z"}
    note right of browser: Assim o próprio navegador adiciona a nova nota na lista, e apenas após isso envia os dados ao servidor
