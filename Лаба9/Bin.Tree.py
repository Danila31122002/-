class BinTree:
    def __init__(self):
        self.start = None
        self.lenght = 0
        self.last = None

    def __iter__(a):
        pass

    def insert_into_tree(self, value): # добавление в дерево

        if self.start is None: # проверка на содержание корневого элемента
            self.start = Node(value)
            self.length = 1
        else:
            self.current = self.start
            while True: # добавление в узел
                if self.current.value == value: # проверка на равенство
                    break
                elif self.current.value > value: # если value < значения в узле, то добавляем элемент влево
                    if self.current.left == None:
                        self.current.left = Node(value)
                        break
                    else:
                        self.current = self.current.left
                else:                           # если value > значения в узле, то добавляем элемент вправо
                    if self.current.right == None:
                        self.current.right = Node(value)
                        break
                    else:
                        self.current = self.current.right
            self.lenght += 1

    def __len__(self):
        return self.length

    def __iter__(self): # список для обхода в глубину

        node = self.start
        stack = []
        result = []
        while node or stack:
            while node:
                stack.append(node)
                result.append(node)
                node = node.left

            if stack:
                node = stack.pop()
                node = node.right
        return iter(result)

    def __str__(self):
        lines = self.build_tree(self.start, 0, False, '-')[0]
        return '\n' + '\n'.join((line.rstrip() for line in lines))

    @staticmethod
    def build_tree(root, curr_index, index=False, delimiter = '-'):

        if root is None:
            return [], 0, 0, 0

        line1 = []
        line2 = []
        if index:
            node_repr = '{}{}{}'.format(curr_index, delimiter, root.value)
        else:
            node_repr = str(root.value)

        new_root_width = gap_size = len(node_repr)

        # левая и правая части и их размеры
        l_box, l_box_width, l_root_start, l_root_end = \
            BinTree.build_tree(root.left, 2 * curr_index + 1, index, delimiter)
        r_box, r_box_width, r_root_start, r_root_end = \
            BinTree.build_tree(root.right, 2 * curr_index + 2, index, delimiter)
        if l_box_width > 0:
            l_root = (l_root_start + l_root_end) // 2 + 1
            line1.append(' ' * (l_root + 1))
            line1.append('_' * (l_box_width - l_root))
            line2.append(' ' * l_root + '/')
            line2.append(' ' * (l_box_width - l_root))
            new_root_start = l_box_width + 1
            gap_size += 1
        else:
            new_root_start = 0

        line1.append(node_repr)
        line2.append(' ' * new_root_width)

        # добавляет пробелы
        if r_box_width > 0:
            r_root = (r_root_start + r_root_end) // 2
            line1.append('_' * r_root)
            line1.append(' ' * (r_box_width - r_root + 1))
            line2.append(' ' * r_root + '\\')
            line2.append(' ' * (r_box_width - r_root))
            gap_size += 1
        new_root_end = new_root_start + new_root_width - 1

        # объеденяет левую и правую часть
        gap = ' ' * gap_size
        new_box = [''.join(line1), ''.join(line2)]
        for i in range(max(len(l_box), len(r_box))):
            l_line = l_box[i] if i < len(l_box) else ' ' * l_box_width
            r_line = r_box[i] if i < len(r_box) else ' ' * r_box_width
            new_box.append(l_line + gap + r_line)

        return new_box, len(new_box[0]), new_root_start, new_root_end


class Node: # Узел, который содержит информацию о левом и правом потомке + величину, которую кладем

    def __init__(self, value, lft=None, rght=None):
        self.value = value
        self.left = lft
        self.right = rght

    def get_value(self):
        return self.value

    def get_right(self):
        return self.right

    def get_left(self):
        return self.left

    def __str__(self):
        return str(self.get_value())


tree = BinTree()

for i in range(10):
    value = int(input())
    tree.insert_into_tree(value)
print(tree)
for i in tree:
    print(i)
