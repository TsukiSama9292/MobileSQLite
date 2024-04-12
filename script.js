// 將 CSV 資料轉換成 JSON 格式
function csvToJSON(csv) {
    // 刪除 \r
    csv = csv.replace(/\r/g, '');
    
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
    // 移除末尾的空对象
    while (result.length > 0 && Object.keys(result[result.length - 1]).length === 0) {
        result.pop();
    }
    return result;
}

// 主函式
async function main() {
    try {
        // const jsonData = csvToJSON(/* Your CSV data here */);
        // const jsonString = jsonData.map(obj => JSON.stringify(obj)).join(', ');
        // document.getElementById('json-data').innerHTML = jsonString;

        
        const categoryResponse = await fetch('Category_2.csv');
        const categoryCsv = await categoryResponse.text();
        const categoryJson = csvToJSON(categoryCsv);
        const categoryString = categoryJson.map(obj => JSON.stringify(obj)).join(', ');
        document.getElementById('json-data').innerHTML = '<pre>'+categoryString+</pre>;
        //document.getElementById('json-data').innerHTML += '<h2>Category</h2><pre>' + categoryJson + '</pre>';

        const subcategoryResponse = await fetch('Subcategory.csv');
        const subcategoryCsv = await subcategoryResponse.text();
        const subcategoryJson = csvToJSON(subcategoryCsv);
        const subcategoryString = categoryJson.map(obj => JSON.stringify(obj)).join(', ');
        document.getElementById('json-data').innerHTML = '<pre>'+subcategoryString+</pre>;
        //document.getElementById('json-data').innerHTML += '<h2>Subcategory</h2><pre>' + subcategoryJson + '</pre>';

        const courseResponse = await fetch('Course.csv');
        const courseCsv = await courseResponse.text();
        const courseJson = csvToJSON(courseCsv);
        const courseString = categoryJson.map(obj => JSON.stringify(obj)).join(', ');
        document.getElementById('json-data').innerHTML = '<pre>'+courseString+</pre>;
        //document.getElementById('json-data').innerHTML += '<h2>Course</h2><pre>' + courseJson + '</pre>';
    } catch (error) {
        console.error('Error fetching CSV files:', error);
    }
}

// 調用主函式
main();
