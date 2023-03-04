class MyArray {
	constructor(initialSize = 1) {
		if (Number(initialSize) !== initialSize || Math.round(initialSize) !== initialSize) {
			throw new Error('����� ������� ������ ���� ����� ������');
		}

		if (!(initialSize > 0)) {
        throw new Error('������ ������� ������ ���� ������ ����');
    }

		this.size = initialSize;
		this.memory = allocate(initialSize);
		this.length = 0;
	}
	
	// ���������� �������� �� �������.
	// ���� ������ �� ��������� � ������ ������.
	get(index){
		...
	}
	
	// ������������� �������� �� �������.
	// ���� ������ �� ��������� � ������ ������.
	set(index, value) {
		...
	}

	// ��������� ����� ������� � ������.
	// ���� index �� �������� � ��������� � ����� �������.
	// � ��������� ������ � ��������� �� ������� �� �������
	// ���� ����������� ���������.
	// ���� ������ �� ��������� - ������ ������.
	// ����������� ���������� ������ �����, ���� ����������.
	// ���������� ����� ����� �������.
	add(value, index) {
		...
	}
	
	// ������� ������� �� ������� �� ������� ���� ����������� ���������.
	// ���� ������ �� ��������� - ������ ������.
	// ���������� ����� ����� �������.
	delete(index) {
		...
	}
}

function allocate(size) {
    const memory = {};

    for (let i = 0; i < size; i++) {
        memory[i] = undefined;
    }

    return memory;
}