# 使用方法
透過GET URL = "https://raw.githubusercontent.com/TsukiSama9292/MobileSQLite/main/Category.json"
# JSON格式，JSON格式以便於SQLite儲存
第一層分類的JSON格式 
```json
{"Category":[
    {"ID_TOP":"TOP專屬ID","NAME":"分類/課程名稱","URL":"https://www.example.com","INTRO":"課程簡介"}
  ]
}
```
第二層分類的JSON格式 
```json
{"Subcategory":[
        {"ID_TOP":"TOP專屬ID","ID_MID":"MID專屬ID","NAME":"分類名稱","URL":"https://www.example.com","INTRO":"課程簡介"}
    ]
}
```
課程的JSON格式 
```json
{"Course":[
        {"ID_TOP":"TOP專屬ID","ID_MID":"MID專屬ID","ID_COURSE":"Course專屬ID","NAME":"分類/課程名稱","URL":"https://www.example.com","INTRO":"課程簡介"}
    ]
}
```

# 使用工具
[CSV轉JSON工具](https://jsoneditoronline.org/#right=local.zuwoha&left=local.mevomu)

