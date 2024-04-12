// 将 CSV 转换为 JSON 格式
function csvToJSON(csv) {
    // 删除 \r
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
    return result; // 不再使用 JSON.stringify()，直接返回 JSON 对象数组
}


// 主函式
async function main() {
    try {
        const categoryResponse = await fetch('Category_2.csv');
        const categoryCsv = await categoryResponse.text();
        const categoryJson = csvToJSON(categoryCsv);

        // 使用<pre>标签来保留JSON格式
        document.getElementById('json-data').innerHTML = '<pre>' + JSON.stringify(categoryJson, null, 2) + '</pre>';

        const subcategoryResponse = await fetch('Subcategory.csv');
        const subcategoryCsv = await subcategoryResponse.text();
        const subcategoryJson = csvToJSON(subcategoryCsv);

        // 使用<pre>标签来保留JSON格式
        document.getElementById('json-data').innerHTML += '<pre>' + JSON.stringify(subcategoryJson, null, 2) + '</pre>';

        const courseResponse = await fetch('Course.csv');
        const courseCsv = await courseResponse.text();
        const courseJson = csvToJSON(courseCsv);

        // 使用<pre>标签来保留JSON格式
        document.getElementById('json-data').innerHTML += '<pre>' + JSON.stringify(courseJson, null, 2) + '</pre>';
    } catch (error) {
        console.error('Error fetching CSV files:', error);
    }
}

// 调用主函数
main();

