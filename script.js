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
    try {
        const categoryResponse = await fetch('Category.csv');
        const categoryCsv = await categoryResponse.text({ encoding: "UTF-8" });
        const categoryJson = csvToJSON(categoryCsv);
        document.getElementById('json-data').innerHTML += '<h2>Category</h2><pre>' + categoryJson + '</pre>';

        const subcategoryResponse = await fetch('Subcategory.csv');
        const subcategoryCsv = await subcategoryResponse.text();
        const subcategoryJson = csvToJSON(subcategoryCsv);
        document.getElementById('json-data').innerHTML += '<h2>Subcategory</h2><pre>' + subcategoryJson + '</pre>';

        const courseResponse = await fetch('Course.csv');
        const courseCsv = await courseResponse.text();
        const courseJson = csvToJSON(courseCsv);
        document.getElementById('json-data').innerHTML += '<h2>Course</h2><pre>' + courseJson + '</pre>';
    } catch (error) {
        console.error('Error fetching CSV files:', error);
    }
}

// 調用主函式
main();
