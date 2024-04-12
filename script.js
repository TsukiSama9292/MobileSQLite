// 透過 XMLHttpRequest 讀取 CSV 檔案
function loadCSV(file, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.open("GET", file, true);
    xhr.send();
}

// 將 CSV 資料轉換成 JSON 格式
function csvToJSON(csv) {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    return JSON.stringify(result);
}

// 主函式
function main() {
    loadCSV('./Category.csv', function(categoryCsv) {
        var categoryJson = csvToJSON(categoryCsv);
        document.getElementById('json-data').innerHTML += '<h2>Category</h2><pre>' + categoryJson + '</pre>';
    });

    loadCSV('./Subcategory.csv', function(subcategoryCsv) {
        var subcategoryJson = csvToJSON(subcategoryCsv);
        document.getElementById('json-data').innerHTML += '<h2>Subcategory</h2><pre>' + subcategoryJson + '</pre>';
    });

    loadCSV('./Course.csv', function(courseCsv) {
        var courseJson = csvToJSON(courseCsv);
        document.getElementById('json-data').innerHTML += '<h2>Course</h2><pre>' + courseJson + '</pre>';
    });
}

// 調用主函式
main();
