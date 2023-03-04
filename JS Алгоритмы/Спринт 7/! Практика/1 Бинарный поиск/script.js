class BST {
    constructor() {
        this.root = null;
    }

		// ������ ���� �� ��������� value � �������� � ������
    add(value) {
        const newNode = { value, left: null, right: null };

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.addNode(this.root, newNode);
        }
    }
		
		// ��������������� ����� ��� ���������� newNode ��� ������� � node
    addNode(node, newNode) {
				// ���� � ����� ��������� ��� ����
        if (newNode.value === node.value) {
            return;
        }
				
        if (newNode.value < node.value) { // ��������� ���� �����
						// ���� �������� ����� ���, ����������� newNode
            if (node.left === null) {
								...
            } else {
								// ���� ����, ���������� �������� ������� ���� �� ����� �����
                this.addNode(...);
            }
        } else { // ��������� ���� ������
						// ���� �������� ������ ���, ����������� newNode
            if (node.right === null) {
                ...
            } else {
								// ���� ����, ���������� �������� ������� ���� �� ������ �����
                this.addNode(...);
            }
        }
    }

		// ������� ���� �� ��������� value �� ������
    remove(value) {
        this.root = this.removeNode(this.root, value);
    }
		
		// ��������������� ����� ��� �������� ������� �� ��������� value
		// �� ������ �� ������� node. ���������� ����� ������� �� ������ node.
    removeNode(node, value) {
				// ���� ������� null
        if (node === null) {
            return null;
        }
	
				// ���� �������� ������� ����� ���������� ��������
        if (value === node.value) {
            if (node.left === null && node.right === null) {
								// ���� ��� �����, ������� ������ ����� null	
                return ...;
            } else if (node.left === null) {
								// ���� ����� ��� �����, �������� ������� �� ������� ������
                return ...;
            } else if (node.right === null) {
								// ���� ������ ��� �����, �������� ������� �� ������ ������
                return ...;
						} else {
								// ���� ��� ������ ����, ���� ������������ ������� �����
                const max = this.findMax(...);

                node.value = max.value;
								// ��������� �������� �������� � ����� �����
                node.left = this.removeNode(...);

                return node;
            }
        }

        if (value < node.value) { 
						// ���� �������� ������, ���������� ������� �������� �� ����� �����
            node.left = this.removeNode(...);
        } else {
						// ���� �������� ������, ���������� ������� �������� �� ������ �����
            node.right = this.removeNode(...);
        }

        return node;
    }
		
		// ���� ������������ �������, ������� � ������� node.
    findMax(node) {
       ...
    }
		
		// ���������� �������, �������� �������� ����� value.
		// ���� ������� �� ������, ���������� null.
    find(value) {
        ...
    }
}