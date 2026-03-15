def test_addition():
    assert 1 + 1 == 2, "Expected 1 + 1 to equal 2"


def test_string_length():
    word = "hello"
    assert len(word) == 5, f"Expected length 5, got {len(word)}"


def test_list_contains():
    items = [1, 2, 3]
    assert 3 in items, "Expected 3 to be in the list"
