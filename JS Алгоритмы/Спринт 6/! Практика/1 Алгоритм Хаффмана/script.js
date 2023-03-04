function huffman(str) {
    // ��������� ������� ���������� ������� �������
    const rates = getRates(str);
    // ������� ������� � �����������, ����������� ������ ��� ������� �������
    const queue = buildQueue(rates);

    while(queue.size > 1) {
        // ����� ��� �������� �� �������
        const [ rightNode, rightPriority ] = queue.pop();
        const [ leftNode, leftPriority ] = queue.pop();

        // ������� ����� ���� ������, ��������� ��� ��������� � �������� � �������
				const newNode = { left: leftNode, right: rightNode };
        const newPriority = rightPriority + leftPriority;
        
				...
    }

    // ��������� ���������� ���� ����� ������ ������
    const [ rootNode ] = queue.pop();
    // ������ ���-������� � ����� ��� ������� �������
    const codes = getCodes(rootNode);
    // �������� ������
    const encodedStr = getEncodedStr(str, codes);

    // ���������� ���������
    return { codes, encodedStr };
}

// ������� ������� ���������� ������� �������.
// ���������� ������ � ������� { [char]: count }.
function getRates(str) {
		const rate = {};

    ...

		return rates;
}

// ������ ������� � �����������, ����������� ������ ��� ������� ������� �� ������ ������� rates.
// ������ ���� � { value: ������, left: null, right: null }.
function buildQueue(rates) {
    const queue = new PirorityQueue();

    ...

    return queue;
}

// ������ ���-������� � ����� ��� ������� �������, ���������� ������ ������.
// ���������� ������ � ������� { [char]: code }, ��� code � ������ �� ����� � ������.
function getCodes(node, codes = {}, code = '') {
    // ���� ��� �����, ��� ����, ���������� �������� � �������.
    if (!node.left && !node.right) {
        codes[node.value] = code;
    } else {
        // ������� ����� � ������ ����� ������,
        // �������� � code ���������� ��� � ����������� �� �����������.
        getCodes(...);
        getCodes(...);
    }

    return codes;
}
// �������� ������ �� ������� ����� � ���������� ���������.
function getEncodedStr(str, codes) {
		let encodedStr = '';

    ...
		
		return encodedStr;
}

// ������� ���������� ������� � ����������� ��� �������� �������.
class PirorityQueue {
    constructor() {
        this.nodes = [];
        this.priority = new Map();
    }

    push(node, priority) {
        if (!this.priority.has(node)) {
            this.nodes.push(node);
        }

        this.priority.set(node, priority);
        this.nodes.sort((a, b) => this.priority.get(b) - this.priority.get(a));
    }

    pop() {
        if (!this.nodes.length) {
            return undefined;
        }

        const node = this.nodes.pop();
        const priority = this.priority.get(node);

        return [ node, priority ];
    }

    get size() {
        return this.nodes.length;
    }
}