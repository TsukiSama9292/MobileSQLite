// displayJSON.js

async function fetchData() {
    try {
        const response = await fetch('./Category.json');
        const jsonData = await response.json();

        // 将 JSON 数据转换为字符串并插入到 HTML 中
        document.getElementById('json-data').innerHTML = '<pre>' +JSON.stringify(jsonData) + '</pre>';
    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
}

// 调用函数来获取并显示 JSON 数据
fetchData();
