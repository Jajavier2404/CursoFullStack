sequenceDiagram
    participant browser
    participant server

    Note right of browser: El usuario escribe una nota y hace clic en Save
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of browser: Envía los datos como JSON
    server-->>browser: 201 Created
    deactivate server

    Note right of browser: El navegador actualiza la lista de notas 
    Note right of browser: Sin recargar toda la página

