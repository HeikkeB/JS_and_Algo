function zip() {
  // ��� ���
}

// ������ ������
const objects = [
  { foo: 5, bar: 6 },
  { foo: 13, baz: -1 } // foo - ������������� ����
];

zip(...objects); // { foo: 5, bar: 6, baz: -1 }