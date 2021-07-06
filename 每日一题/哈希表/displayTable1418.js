/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
    const tables = new Map();
    const NameSet = new Set();

    // 创建哈希表
    for (const order of orders) {
        const id = parseInt(order[1]);
        const table = tables.get(id) || new Map();
        const foodItem = order[2];
        NameSet.add(foodItem);
        table.set(foodItem, (table.get(foodItem) || 0) + 1)
        tables.set(id, table);
    }

    // foodName排序
    const foodNames = [];
    for (const name of NameSet) {
        foodNames.push(name);
    }
    foodNames.sort()

    // 标题 Table 和 菜名
    const header = [];

    header.push('Table')
    for (const foodName of foodNames) {
        header.push(foodName)
    }
    // 获取id
    const m = tables.size;
    const ids = [];
    for (const id of tables.keys()) {
        ids.push(id)
    }
    // 升序
    ids.sort((a, b) => a - b);

    // 展示
    const ans = []
    ans.push(header);
    for (let i = 0; i < m; i++) {
        const id = ids[i]
        const row = [];
        const table = tables.get(id)
        row.push(id.toString());
        for (let j = 0; j < foodNames.length; j++) {
            // 点菜数量
            row.push((table.get(foodNames[j]) || 0).toString());
        }
        ans.push(row)
    }
    return ans
};

orders = [["David", "3", "Ceviche"], ["Corina", "10", "Beef Burrito"], ["David", "3", "Fried Chicken"], ["Carla", "5", "Water"], ["Carla", "5", "Ceviche"], ["Rous", "3", "Ceviche"]]
console.log(
    displayTable(orders)
);