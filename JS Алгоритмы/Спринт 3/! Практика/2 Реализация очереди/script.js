class Queue {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
		
		// ������ ������� � �������.
		// ���������� ����� ������ �������.
    enqueue(value) {
        const node = { value, next: null, prev: null };
				...
    }
		
		// ������� ������� �� �������.
		// ���� ������� ������, ������ ������.
		// ���������� �������� �������.
    dequeue() {
				...
    }
		
		// ���������� ������� � ������ �������.
    peek() {
				...
    }
		
		// ���� ������� ������, ���������� true. � ��������� ������ �� false.
    isEmpty() {
				...
    }
}