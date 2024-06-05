# 使用方法
### 網路請求方法-分類與課程(URL設定範例)  
URL = "https://raw.githubusercontent.com/TsukiSama9292/MobileSQLite/main/Category.json"
### 網路請求方法-圖片(URL設定範例)  
URL = "https://raw.githubusercontent.com/TsukiSama9292/MobileSQLite/main/img/Algorithm_Notes.png"
# JSON格式，JSON格式以便於SQLite儲存
### 第一層分類的JSON格式 
```json
{
    "ID_TOP": 1,
    "NAME": "AI",
    "URL": "https://www.youtube.com/watch?v=fsF0WKgdTys",
    "Image":"https://img.youtube.com/vi/fsF0WKgdTys/0.jpg",
    "INTRO": "人工智慧（Artificial Intelligence，簡稱AI）是模擬人類智能的一種技術。它涉及了構建能夠執行任務的計算機系統，這些任務通常需要人類智能的特徵，例如學習、推理、問題解決和自適應。AI的目標是使計算機系統能夠執行類似於人類的智能行為，從而模仿或甚至超越人類的能力。在AI的發展過程中，涉及到了許多子領域，如機器學習、自然語言處理、計算機視覺、專家系統等。這些領域的發展使得AI技術得以應用於各個領域，包括醫療保健、金融、交通、教育等，為社會帶來了巨大的改變和發展。"
}
```
ID_TOP : 用於分類(最上層)，涵蓋範圍廣，資料型態(int)  
NAME : 顯示名稱，資料型態(String)  
URL : 介紹的影片連結，資料型態(String)  
Image : 影片縮圖連結，資料型態(String)  
INTRO : 文本介紹(ChatGPT-4o生成)，資料型態(String)   
### 第二層分類的JSON格式 
```json
{
    "ID_TOP": 1,
    "ID_MID": 1,
    "NAME": "CNN",
    "URL": "https://www.youtube.com/watch?v=4-IR8kOrtoY",
    "Image":"https://img.youtube.com/vi/4-IR8kOrtoY/0.jpg",
    "INTRO": "CNN，即卷積神經網絡（Convolutional Neural Network），是一種用於處理和分析視覺數據的深度學習模型。它在圖像識別、影像分類、物體檢測等領域表現出色。CNN 的結構受到人類視覺系統的啟發。它包含了多個卷積層（Convolutional Layer）、池化層（Pooling Layer）和全連接層（Fully Connected Layer）。這些層次之間的結構有助於模型自動學習視覺特徵，從而實現對圖像的有效分類和辨識。"
}
```
ID_TOP : 用於分類(最上層)，涵蓋範圍廣，資料型態(int)  
ID_MID : 用於細分TOP分類，涵蓋範圍狹隘，資料型態(int)  
NAME : 顯示名稱，資料型態(String)  
URL : 介紹的影片連結，資料型態(String)  
Image : 影片縮圖連結，資料型態(String)  
INTRO : 文本介紹(ChatGPT-4o生成)，資料型態(String)  
### 課程的JSON格式 
```json
{
    "ID_TOP": 1,
    "ID_MID": 1,
    "ID_COURSE": 1,
    "SKILL": 1,
    "NAME": "卷積神經網絡(CNN) - MNIST 手寫數字辨識",
    "URL": "https://nbviewer.org/github/erhwenkuo/deep-learning-with-keras-notebooks/blob/master/2.7-mnist-recognition-cnn.ipynb",
    "Image": "https://raw.githubusercontent.com/TsukiSama9292/MobileSQLite/main/img/CNN_MNIST.png",
    "URL_TYPE": 1,
    "INTRO": "CNN教學檔案(ipynb)，可用於學習CNN基礎知識，並且能累積實作經驗。"
}
```
ID_TOP : 用於分類(最上層)，涵蓋範圍廣，資料型態(int)  
ID_MID : 用於細分TOP分類，涵蓋範圍狹隘，資料型態(int)  
ID_COURSE : 課程ID標記，無關ID_TOP和ID_MID，資料型態(int)  
SKILL : 分類是否為學習技巧的資源，0為否，1為是，資料型態(boolean)  
NAME : 顯示名稱，資料型態(String)  
URL : 介紹的影片連結，資料型態(String)  
Image : 影片縮圖連結，資料型態(String)  
INTRO : 文本介紹(ChatGPT-4o生成)，資料型態(String)  
