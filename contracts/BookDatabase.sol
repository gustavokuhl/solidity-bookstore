// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract BookDatabase {
    struct Book {
        string title;
        uint16 year;
    }

    uint32 private nextId = 0;
    mapping(uint32 => Book) public books;

    address owner;

    uint256 public count;

    constructor() {
        owner = msg.sender;
    }

    function addBook(Book memory newBook) public {
        nextId++;
        books[nextId] = newBook;
        count++;
    }

    function changeBook(uint32 id, Book memory newBook) public {
        Book memory oldBook = books[id];

        if (
            !compare(newBook.title, "") &&
            !compare(newBook.title, oldBook.title)
        ) books[id].title = newBook.title;

        if (newBook.year > 0 && newBook.year != oldBook.year)
            books[id].year = newBook.year;
    }

    function deleteBook(uint32 id) public retricted {
        if (books[id].year > 0) {
            delete books[id];
            count--;
        }
    }

    modifier retricted() {
        require(owner == msg.sender, "You don't have permission");
        _;
    }

    function compare(
        string memory str1,
        string memory str2
    ) private pure returns (bool) {
        bytes memory arrA = bytes(str1);
        bytes memory arrB = bytes(str2);
        return arrA.length == arrB.length && keccak256(arrA) == keccak256(arrB);
    }
}
