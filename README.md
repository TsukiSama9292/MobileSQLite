# JSON格式，JSON格式以便於SQLite儲存
第一層分類的JSON格式 
```json
{"Table_name":[
    {"ID_TOP":"TOP專屬ID" , "name":"分類/課程名稱" , "URL":"https://www.example.com" , "Intro":"課程簡介"}
  ]
}
```
第二層分類的JSON格式 
```json
{"Table_name":[
        {"ID_TOP":"TOP專屬ID","ID_MID":"MID專屬ID","name":"分類/課程名稱","URL":"https://www.example.com","Intro":"課程簡介"}
    ]
}
```
課程的JSON格式 
```json
{"Table_name":[
        {"ID_TOP":"TOP專屬ID","ID_MID":"MID專屬ID","name":"分類/課程名稱","URL":"https://www.example.com","Intro":"課程簡介"}
    ]
}
```
