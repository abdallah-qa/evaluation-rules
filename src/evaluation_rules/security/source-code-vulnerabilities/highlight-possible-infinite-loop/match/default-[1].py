def process_items(items):
    while True:
        if not items:
            break
        item = items.pop()
        print(item)

process_items([1, 2, 3])