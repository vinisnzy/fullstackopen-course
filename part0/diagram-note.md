sequenceDiagram
    participant browser
    participant server

    browser->>server: POST 302 https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of browser: Ao digitar a nota e pressionar o botão 'save' envia o request: 'note: teste' e move temporariamente o navegador para essa página

    server-->>browser: Redireciona novamente o navegador para https://studies.cs.helsinki.fi/exampleapp/notes
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML é fácil", "date": "2023-1-1" }, ... ]
    deactivate server
