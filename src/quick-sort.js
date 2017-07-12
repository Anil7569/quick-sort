'use strict';

function quickSort(input) {
    if (Array.isArray(input) && input.length >= 0) {
        if (input.length == 1) {
            return input;
        } else {
            quickSorter(input, 0, input.length - 1);
        }
    } else {
        if (!Array.isArray(input)) {
            throw "Input is not an array.";
        }
    }
};

function partition(items, left, right) {

    var pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
};

function swap(items, firstIndex, secondIndex) {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
};

function quickSorter(items, left, right) {

    var index;

    if (items.length > 1) {

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSorter(items, left, index - 1);
        }

        if (index < right) {
            quickSorter(items, index, right);
        }

    }

    return items;
};
module.exports = quickSort;